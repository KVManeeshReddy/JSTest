var currentTimer;
var stopWatch;
var h = 0;
var m = 0;
var s = 0;

const timeFormatter = (i) => {
    if (i < 10) { i = "0" + i }; // add zero in front of numbers < 10
    return i;
}

const workingClock = (hours, minutes, seconds) => {
    hours = timeFormatter(hours);
    minutes = timeFormatter(minutes);
    seconds = timeFormatter(seconds);
    document.getElementById("displayClock").innerHTML = `${hours}:${minutes}:${seconds}`;
    currentTimer = setTimeout(workingClockAction, 1000);
}


const resetClockAction = () => {
    clearInterval(currentTimer);
    timerAction();
}

const timerAction = () => {
    timer(h, m, s);
    s++;
    if (s == 60) {
        s = 0;
        m++;
    }
    if (m == 60) {
        m = 0;
        h++;
    }
    if (h == 24) {
        h = 0;
    }
    stopWatch = setTimeout(timerAction, 1000);
}

const currentTimeAction = () => {
    clearInterval(stopWatch);
    h = 0;
    m = 0;
    s = 0;
    let date = new Date();
    workingClock(date.getHours(), date.getMinutes(), date.getSeconds());
}

const workingClockAction = () => {
    let date = new Date();
    workingClock(date.getHours(), date.getMinutes(), date.getSeconds());
}

const timer = (h, m, s) => {
    h = timeFormatter(h);
    m = timeFormatter(m);
    s = timeFormatter(s);
    document.getElementById("displayClock").innerHTML = `${h}:${m}:${s}`;
}