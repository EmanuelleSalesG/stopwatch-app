let seconds = 0;
const timerInterval = 1000; //1 sec
let timerSec = null;

let sec = 0;
let min = 0;
let hr = 0;

const start = document.querySelector('.start-button');
const stop = document.querySelector('.stop-button');
const display = document.querySelector('.display');

function formatTime(time){
    return time < 10 ? `0${time}`: time;
}


function startButton(){

        seconds++;
    
        sec = Math.floor(seconds % 60);
        min = Math.floor((seconds / 60) % 60);
        hr = Math.floor((seconds /3600));

        display.innerHTML = `${formatTime(hr)}:${formatTime(min)}:${formatTime(sec)}`; 

}

start.addEventListener('click', ()=> {

    if(start.innerHTML === 'Start'){
        timerSec = setInterval(startButton, timerInterval);
        start.innerHTML = 'Pause';
    }else{
        clearInterval(timerSec);
        start.innerHTML = 'Start';
    }

});
        
stop.addEventListener('click', () => {
        
        clearInterval(timerSec);
        seconds = 0;
        start.innerHTML = 'Start';
        display.innerHTML = '0:00:00';
});
