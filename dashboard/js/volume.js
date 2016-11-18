/**
 * Created by Pedrogas on 17/11/2016.
 */

$("#optN").change(function(){
	if( $(this).is(":checked") ){
		nodecg.sendMessage("showN");
	}
});

$("#optG").change(function(){
	if( $(this).is(":checked") ){
		nodecg.sendMessage("showG");
	}
});

$("#optR").change(function(){
	if( $(this).is(":checked") ){
		nodecg.sendMessage("showR");
	}
});

$("#optB").change(function(){
	if( $(this).is(":checked") ){
		nodecg.sendMessage("showB");
	}
});

$("#optA").change(function(){
	if( $(this).is(":checked") ){
		nodecg.sendMessage("showA");
	}
});
