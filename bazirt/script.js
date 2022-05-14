var timesWaited = 0
function timer() {
    var totalTime = 600
    document.getElementById("headr").setAttribute("hidden",true)
    document.getElementById("count").removeAttribute("hidden")
    document.getElementById("count").innerHTML = totalTime
    var x = setInterval(function(){
        if(totalTime === 32){
            document.getElementById("count").innerHTML = totalTime-1 + "😂";
            totalTime = totalTime - 1
        }
        else{
            document.getElementById("count").innerHTML = totalTime-1;
            totalTime = totalTime - 1
        };
        if(totalTime === 0){
            clearInterval(x);
            document.getElementById("count").setAttribute("hidden",true);
            document.getElementById("headr").removeAttribute("hidden")
            timesWaited = timesWaited + 1
            if (2 < timesWaited & timesWaited < 5) {
                document.getElementById("zort").innerHTML = "mal"
            }
            if (timesWaited > 5) {
                document.getElementById("zort").innerHTML = "ciddi mal"
            }
        }
    }, 1000)

}