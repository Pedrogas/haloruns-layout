/**
 * Created by Pedrogas on 06/11/2016.
 */

var gRunner = nodecg.Replicant('gRunner');
var rRunner = nodecg.Replicant('rRunner');
var bRunner = nodecg.Replicant('bRunner');

var gStream = nodecg.Replicant('gStream');
var rStream = nodecg.Replicant('rStream');
var bStream = nodecg.Replicant('bStream');

var gOptions;		var rOptions;		var bOptions;
var gPlayer;		var rPlayer;		var bPlayer;
var gtCreated = 0;	var rtCreated = 0;	var btCreated = 0;

nodecg.listenFor('ggoLive', green);
nodecg.listenFor("ggoTwitch", gcreateTPlayer)
nodecg.listenFor("ggoBeam", gcreateBPlayer)

nodecg.listenFor('rgoLive', red);
nodecg.listenFor("rgoTwitch", rcreateTPlayer)
nodecg.listenFor("rgoBeam", rcreateBPlayer)

nodecg.listenFor('bgoLive', blue);
nodecg.listenFor("bgoTwitch", bcreateTPlayer)
nodecg.listenFor("bgoBeam", bcreateBPlayer)


//Green Stuff
function green() {
	console.log(gRunner.value);
	$("#gRunner").html(gRunner.value);
}

function gcreateTPlayer() {
	if (gtCreated == 0){
		$("#gPlayer iframe").remove();
		gOptions = {
			channel: "{"+gStream.value+"}",
			width: 929,
			height: 519,
			//video: "{VIDEO_ID}"
		};
		gPlayer = new Twitch.Player("gPlayer", gOptions);
		gPlayer.setVolume(0.0);
		gtCreated = 1;
	}else {
		gPlayer.setChannel(gStream.value);
	}
}

function gcreateBPlayer() {
	$("#gPlayer iframe").remove();
	gtCreated = 0;
	$("#gPlayer").html("<iframe id='gBeamPlayer' width='929px' height='519px' src='https://beam.pro/embed/player/"+gStream.value+"'></iframe>");
}


//Red Stuff
function red() {
	$("#rRunner").html(rRunner.value);
}

function rcreateTPlayer() {
	if (rtCreated == 0){
		$("#rPlayer iframe").remove();
		rOptions = {
			channel: "{"+rStream.value+"}",
			width: 929,
			height: 519,
			//video: "{VIDEO_ID}"
		};
		rPlayer = new Twitch.Player("rPlayer", rOptions);
		rPlayer.setVolume(0.0);
		rtCreated = 1;
	}else {
		rPlayer.setChannel(rStream.value);
	}
}

function rcreateBPlayer() {
	$("#rPlayer iframe").remove();
	rtCreated = 0;
	$("#rPlayer").html("<iframe id='rBeamPlayer' width='929px' height='519px' src='https://beam.pro/embed/player/"+rStream.value+"'></iframe>");
}


//Blue Stuff
function blue() {
	$("#bRunner").html(bRunner.value);
}

function bcreateTPlayer() {
	if (btCreated == 0){
		$("#bPlayer iframe").remove();
		bOptions = {
			channel: "{"+bStream.value+"}",
			width: 929,
			height: 519,
			//video: "{VIDEO_ID}"
		};
		bPlayer = new Twitch.Player("bPlayer", bOptions);
		bPlayer.setVolume(0.0);
		btCreated = 1;
	}else {
		bPlayer.setChannel(bStream.value);
	}
}

function bcreateBPlayer() {
	$("#bPlayer iframe").remove();
	btCreated = 0;
	$("#bPlayer").html("<iframe id='bBeamPlayer' width='929px' height='519px' src='https://beam.pro/embed/player/"+bStream.value+"'></iframe>");
}

