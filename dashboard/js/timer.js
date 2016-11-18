/**
 * Created by Pedrogas on 30/10/2016.
 */

var seconds = nodecg.Replicant('seconds');
var mints = nodecg.Replicant('mints');
var hrs = nodecg.Replicant('hors');

$('#btnStart').click(function()
{
	document.getElementById("btnStart").disabled = true;
	nodecg.sendMessage('startTimer');

});// Sends message to start the chrono


$('#btnStop').click(function()
{
	document.getElementById("btnStart").disabled = false;
	nodecg.sendMessage('stopTimer');
});// Sends message to stop the chronometer


$('#btnReset').click(function()
{
	document.getElementById("btnStart").disabled = false;
	nodecg.sendMessage('resetTimer');
});// Sends message to reset the chronometer


$('#btnSet').click(function()
{
	nodecg.sendMessage('stopTimer');

	seconds.value = parseInt(document.getElementById('sec').value);
	mints.value = parseInt(document.getElementById('min').value);
	hrs.value = parseInt(document.getElementById('hr').value);

	document.getElementById("btnStart").disabled = false;
	nodecg.sendMessage('setTimer');
});//gets and sets the chronometer


$('#getBlue').click(function()
{
	nodecg.sendMessage('setBlue');
});//sets time for blue


$('#getGreen').click(function()
{
	nodecg.sendMessage('setGreen');
});//sets time fot green


$('#getRed').click(function()
{
	nodecg.sendMessage('setRed');

});//sets time for red
