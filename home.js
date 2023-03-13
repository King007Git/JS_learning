// prettier- code formatter
// live server
// auto saver







// const text = document.querySelector(".title");
// const changeColor = document.querySelector(".changeColor");

// // text.classList.add("change");

// changeColor.addEventListener("click", function() {
//     text.classList.add("change");
// });



const timer = document.getElementById("stopwatch");
var hr =0;
var min =0;
var sec = 0;
var stoptime = true;

// if(localStorage.getItem("timers"))
// {
//     var timers = localStorage.getItem("timers");
// }

function startTimer() {
    if (stoptime == true){
    stoptime = false;
    timerCycle();
}
}
function stopTimer() {
    if (stoptime == false) {
    stoptime = true;

    }
}
function timerCycle(){
    if (stoptime == false) {
        sec=parseInt(sec);
        min=parseInt(min);
        hr=parseInt(hr);

        sec = sec+1;

        if(sec==60){
            min=min+1;
            sec=0;
        }
        if(min==60){
            hr=hr+1;
            min=0;
            sec=0;
        }

        if (sec <10){
            sec = "0" + sec;
        }
        if (min <10){
            min = "0" + min;
        }
        if (hr <10){
            hr = "0" + hr;
        }
        
 
        timer.innerHTML = hr + ":" + min + ":" + sec;

        // localStorage.clear("timer");
        localStorage.setItem("timer",timer);
        console.log(localStorage);
        // localStorage.setItem('timer', JSON.stringify())
        // console.log(localStorage);
        // localStorage.setItem("timer", timer);
        // console.log(localStorage);
        setTimeout("timerCycle()", 1000);
    }
}

function resetTimer(){
    timer.innerHTML = "00:00:00";
    stoptime = true;
    hr=0;
    min=0;
    sec=0;


}




// window.localStorage.setItem('timer',timer);
// console.log(localStorage);
// last line is important
