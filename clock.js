
var secHand = document.getElementById("second");
var minHand = document.getElementById("minute");
var hourHand = document.getElementById("hour");

var secPosition = null;
var minPosition = null;
var hourPosition = null;

var d = new Date();
var currentSec = d.getSeconds();
var currentSecDegrees = currentSec * 6;
var currentMin = d.getMinutes();
var currentMinDegrees = (currentMin * 6);
currentMin = currentMin + (currentSec * 0.0166666666667)
var currentHour = d.getHours();
currentHour = currentHour + (currentMin * 0.016666666667);
var currentHourDegrees = (currentHour * 30);

document.getElementById('clock').addEventListener('click', actionsPerInterval);



function setHandsToCurrentTime() {
	secHand.style.transform = "rotate(" + currentSecDegrees + "deg)";
	minHand.style.transform = "rotate(" + currentMinDegrees + "deg)";
	hourHand.style.transform = "rotate(" + currentHourDegrees + "deg)";
}

setHandsToCurrentTime();


function actionsPerInterval() {
	currentSecDegrees += 6;
	currentMinDegrees += 0.1;
	currentHourDegrees += 0.08333;
	secHand.style.transform = "rotate(" + currentSecDegrees + "deg)";
	document.getElementById('woosh').play();
};

setInterval(actionsPerInterval, 1000);

