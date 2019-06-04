const timeFormatter = (i) => {
    if (i < 10) { i = "0" + i }; // add zero in front of numbers < 10
    return i;
}

const workingClock = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    minutes = timeFormatter(minutes);
    seconds = timeFormatter(seconds);
    document.getElementById("displayClock").innerHTML = `${hours}:${minutes}:${seconds}`;
}
var t = setTimeout(workingClock, 500);
const currentTime = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    console.log("hi");
    document.getElementById("displayClock").innerHTML = `${hours}:${minutes}:${seconds}`;
}

const resetClock = () => {
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    document.getElementById("displayClock").innerHTML = `${hours}:${minutes}:${seconds}`;
    clearTimeout(t);

    function checkTime(i) {
        if (i < 10) { i = "0" + i }; // add zero in front of numbers < 10
        return i;
    }
}
var t1 = setTimeout(resetClock, 500);