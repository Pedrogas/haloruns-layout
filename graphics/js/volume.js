/**
 * Created by Pedrogas on 17/11/2016.
 */

nodecg.listenFor('showN', speakerN);
nodecg.listenFor('showR', speakerR);
nodecg.listenFor('showG', speakerG);
nodecg.listenFor('showB', speakerB);
nodecg.listenFor('showA', speakerA);

function speakerN() {
	$("#rSpeaker").hide();
	$("#gSpeaker").hide();
	$("#bSpeaker").hide();
}

function speakerR() {
	$("#rSpeaker").show();
	$("#gSpeaker").hide();
	$("#bSpeaker").hide();
}

function speakerG() {
	$("#rSpeaker").hide();
	$("#gSpeaker").show();
	$("#bSpeaker").hide();
}

function speakerB() {
	$("#rSpeaker").hide();
	$("#gSpeaker").hide();
	$("#bSpeaker").show();
}

function speakerA() {
	$("#rSpeaker").show();
	$("#gSpeaker").show();
	$("#bSpeaker").show();
}
