const fileInput = document.getElementById('pdf-file');
const playButton = document.getElementById('play-button');
const pdfContainer = document.getElementById('pdf-container');

// Load the PDF.js library
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.3.122/pdf.worker.js';

playButton.addEventListener('click', async function() {
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onload = async function() {
    const pdfData = new Uint8Array(reader.result);
    const text = await extractTextFromPdf(pdfData);
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-UK';
    speech.rate = 2.0;
    speech.pitch = 1.5;
    speech.volume = 0.5;
    speechSynthesis.speak(speech);
    pdfContainer.innerText = text;
  }
  document.getElementById("zort").style.display = "none";
  reader.readAsArrayBuffer(file);
});


// Extracts the text from a PDF file using PDF.js
async function extractTextFromPdf(pdfData) {
  const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise;
  const maxPages = pdf.numPages;
  const start = document.getElementById("start-num").value
  console.log(start);
  const pages = Array.from(new Array(maxPages), (x,i) => (+i + +start));
  console.log(pages);
  for (let z = 1; z < start; z++) {
    pages.pop()
  };
  console.log(pages);
  const pageTexts = await Promise.all(pages.map(pageNumber => {
    return pdf.getPage(pageNumber).then(page => {
      return page.getTextContent().then(textContent => {
        return textContent.items.map(item => item.str).join(' ');
      });
    });
  }));
  return pageTexts.join('\n');
}
