$(document).ready(function() {
	let context = document.getElementById("brick-board").getContext("2d");

	$("#before-start-btn").click(function(){
		
		$(".main-btn").show();
		$("#before-start-btn").hide();
	});

	$("#start-btn").click(function() {
		$(".main-btn").hide();
		$("#select-stage").css("display", "flex");
	});

	$("#stage1").click(function(){
		$("#select-stage").hide();
		
	});
	$("#stage2").click(function(){
		$("#select-stage").hide();

	});
	$("#stage3").click(function(){
		$("#select-stage").hide();
		
	});
	$(".back").click(function(){
		$("#select-stage").hide();
		$("#settings").hide();
		$(".main-btn").show();
	})
	

	$("#option-btn").click(function(){
		$(".main-btn").css("display", "none");
		$("#settings").css("display", "flex");
		switch(game.settings.character){
			case redCharacter:
				$("#redbird").css("filter", "grayscale(0)");
				break;
			case blueCharacter:
				$("#bluebird").css("filter", "grayscale(0)");
				break;
			case yellowCharacter:
				$("#yellowbird").css("filter", "grayscale(0)");
				break;
		}
	});
})