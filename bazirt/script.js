function timer() {
    var totalTime = 600
    document.getElementById("headr").setAttribute("hidden",true)
    document.getElementById("count").removeAttribute("hidden")
    document.getElementById("count").innerHTML = totalTime
    var x = setInterval(function(){
        if(totalTime === 32){
            document.getElementById("count").innerHTML = totalTime-1 + "😂";
            totalTime = totalTime-1
        }
        else{
            document.getElementById("count").innerHTML = totalTime-1;
            totalTime = totalTime-1
        };
        if(totalTime === 0){
            clearInterval(x);
            document.getElementById("count").setAttribute("hidden",true);
            document.getElementById("headr").removeAttribute("hidden")
        }
    }, 1000)

}