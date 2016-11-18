/**
 * Created by Pedrogas on 05/11/2016.
 */
var name = "";
var beam ="";
var twitch = "";
var gradio = "beam";
var succes = [false,false,false];

var runner = nodecg.Replicant('gRunner');
var stream = nodecg.Replicant('gStream');

$("#radio1").change(function(){
	if( $(this).is(":checked") ){
		$("#twitchDiv").hide()
		$("#beamDiv").show()
		gradio = "beam";
		succes = [false,false,false];
	}
});

$("#radio2").change(function(){
	if( $(this).is(":checked") ){
		$("#beamDiv").hide()
		$("#twitchDiv").show()
		gradio = "twitch";
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

	if(gradio == "beam"){
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

	if(gradio == "twitch"){
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

		runner.value = name;

		if(succes[1] == true){
			$("#btnGo").show();
			stream.value = beam;
			nodecg.sendMessage('gpreviewBeam');
		}

		if(succes[2] == true){
			$("#btnGo").show();
			stream.value = twitch;
			nodecg.sendMessage('gpreviewTwitch');
		}
	}
});

$("#btnGo").click(function(){
	if(gradio == "twitch"){
		nodecg.sendMessage("ggoTwitch");
	}else{
		nodecg.sendMessage("ggoBeam");
	}
	nodecg.sendMessage("ggoLive");

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

