/**
 * Created by Pedrogas on 30/10/2016.
 */
var seconds = nodecg.Replicant('seconds');
var mints = nodecg.Replicant('mints');
var hrs = nodecg.Replicant('hors');

nodecg.listenFor('stopTimer', stop);
nodecg.listenFor('startTimer', start);
nodecg.listenFor('resetTimer', reset);
nodecg.listenFor('setTimer', set);
nodecg.listenFor('setBlue', setBlue);
nodecg.listenFor('setGreen', setGreen);
nodecg.listenFor('setRed', setRed);

$(document).ready(function()
{
	$("#rSpeaker").hide();
	$("#gSpeaker").hide();
	$("#bSpeaker").hide();
	show();
});

function setBlue() {
	$("#bSplit").html($time.innerHTML);
}

function setGreen() {
	$("#gSplit").html($time.innerHTML);
}

function setRed() {
	$("#rSplit").html($time.innerHTML);
}

var	clsStopwatch = function() {
	// Private vars
	var	startAt	= 0;	// Time of last start / resume. (0 if not running)
	var	lapTime	= 0;	// Time on the clock when last stopped in milliseconds

	var	now	= function() {
		return (new Date()).getTime();
	};

	// Public methods
	// Start or resume
	this.start = function() {
		startAt	= startAt ? startAt : now();
	};

	// Stop or pause
	this.stop = function() {
		// If running, update elapsed time otherwise keep it
		lapTime	= startAt ? lapTime + now() - startAt : lapTime;
		startAt	= 0; // Paused
	};

	// Reset
	this.reset = function() {
		lapTime = startAt = 0;
	};

	// Set
	this.set = function() {
		lapTime = parseInt((hrs.value * 3600) + (mints.value * 60) + seconds.value + "000");
		startAt = 0;
	};

	// Duration
	this.time = function() {
		return lapTime + (startAt ? now() - startAt : 0);
	};
};

var x = new clsStopwatch();
var $time;
var clocktimer;

function pad(num, size) {
	var s = "0000" + num;
	return s.substr(s.length - size);
}

function formatTime(time) {
	var h = m = s = ms = 0;
	var newTime = '';

	h = Math.floor( (time)/ (60 * 60 * 1000) );
	time = time % (60 * 60 * 1000);
	m = Math.floor( (time) / (60 * 1000) );
	time = time % (60 * 1000);
	s = Math.floor( (time) / 1000 );
	ms = time % 1000;

	newTime = pad(h, 2) + ':' + pad(m, 2) + ':' + pad(s, 2);
	newTime = pad(h, 2) + ':' + pad(m, 2) + ':' + pad(s, 2);
	return newTime;
}

function show() {
	$time = document.getElementById('timer');
	update();
}

function update() {
	$time.innerHTML = formatTime(x.time());
}

function start() {
	clocktimer = setInterval("update()", 1);
	x.start();
}

function stop() {
	x.stop();
	clearInterval(clocktimer);
}

function reset() {
	stop();
	x.reset();
	update();
}
function set() {
	stop();
	x.set();
	update();
}
