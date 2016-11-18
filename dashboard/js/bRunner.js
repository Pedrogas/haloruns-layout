/**
 * Created by Pedrogas on 05/11/2016.
 */
var name = "";
var beam ="";
var twitch = "";
var bradio = "beam";
var succes = [false,false,false];

var bRunner = nodecg.Replicant('bRunner');
var bStream = nodecg.Replicant('bStream');

$("#radio1").change(function(){
	if( $(this).is(":checked") ){
		$("#twitchDiv").hide()
		$("#beamDiv").show()
		bradio = "beam";
		succes = [false,false,false];
	}
});

$("#radio2").change(function(){
	if( $(this).is(":checked") ){
		$("#beamDiv").hide()
		$("#twitchDiv").show()
		bradio = "twitch";
		succes = [false,false,false];
	}
});

$("#btnCheck").click(function(){

	succes = [false,false,false];
	name = $("#rName").val().replace(/ /g,'');
	beam = $("#bName").val().replace(/ /g,'');
	twitch = $("#tName").val().replace(/ /g,'');

	if(name.length > 0){
		$("#rForm").removeClass();
		$("#rForm").addClass("input-group has-success");
		succes[0] = true;
	}else {
		$("#rForm").removeClass();
		$("#rForm").addClass("input-group has-error");
		succes[0] = false;
	}

	if(bradio == "beam"){
		if(beam.indexOf("https://beam.pro/") > 0){
			beam.replace('https://beam.pro/','');
			$("#beamDiv").removeClass();
			$("#beamDiv").addClass("input-group has-success");
			succes[1] = true;
		}else{
			if(beam.length > 0){
				$("#beamDiv").removeClass();
				$("#beamDiv").addClass("input-group has-success");
				succes[1] = true;
			}else {
				$("#beamDiv").removeClass();
				$("#beamDiv").addClass("input-group has-error");
				succes[1] = false;
			}
		}
	}else{succes[1] = false;}

	if(bradio == "twitch"){
		if(twitch.indexOf("https://www.twitch.tv/") > 0){
			twitch.replace('https://www.twitch.tv/','');
			$("#twitchDiv").removeClass();
			$("#twitchDiv").addClass("input-group has-success");
			succes[2] = true;
		}else{
			if(twitch.length > 0){
				$("#twitchDiv").removeClass();
				$("#twitchDiv").addClass("input-group has-success");
				succes[2] = true;
			}else {
				$("#twitchDiv").removeClass();
				$("#twitchDiv").addClass("input-group has-error");
				succes[2] = false;
			}
		}
	}else{succes[2] = false;}

	if(succes[0] == true){

		bRunner.value = name;

		if(succes[1] == true){
			$("#btnGo").show();
			bStream.value = beam;
			nodecg.sendMessage('bpreviewBeam');
		}

		if(succes[2] == true){
			$("#btnGo").show();
			bStream.value = twitch;
			nodecg.sendMessage('bpreviewTwitch');
		}
	}
});

$("#btnGo").click(function(){
	if(bradio == "twitch"){
		nodecg.sendMessage("bgoTwitch");
	}else{
		nodecg.sendMessage("bgoBeam");
	}
	nodecg.sendMessage("bgoLive");

	$("#btnGo").hide();
	$("iframe").remove();
	$("#rName").val('');
	$("#tName").val('');
	$("#bName").val('');
	$("#rForm").removeClass();
	$("#rForm").addClass("input-group");
	$("#twitchDiv").removeClass();
	$("#twitchDiv").addClass("input-group");
	$("#beamDiv").removeClass();
	$("#beamDiv").addClass("input-group");
});

