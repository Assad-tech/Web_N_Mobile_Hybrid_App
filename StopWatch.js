// Assignment 08 StopWatch
var  min = 0;
var  sec = 0;
var  msec = 0;

var  minHeading = document.getElementById("min")
var  secHeading = document.getElementById("sec")
var  msecHeading = document.getElementById("msec")


function Timer (){
    msec++
    msecHeading.innerHTML = msec;
    if(msec >= 100){
        sec++
        secHeading.innerHTML = sec;
        msec = 0;
    }
    else if(sec >= 60){
        min++
        minHeading.innerHTML = min;
        msec = 0;
        sec = 0;
    }
}
var countStarter;
function btnStart (){
    countStarter = setInterval(Timer,10)
    document.getElementById("btnB").disabled = "true"
    document.getElementById("btnB").style.opacity = "0.5"
}

function btnStop (){
    clearInterval(countStarter)
}
function btnReset(){
    min = 0;
    sec = 0;
    msec = 0;
    minHeading.innerHTML =  min;
    secHeading.innerHTML =  sec;
    msecHeading.innerHTML = msec;
    btnStop()
}




