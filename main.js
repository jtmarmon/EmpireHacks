$(document).ready(function(){
	var video = document.getElementById('bgvid');
	video.addEventListener('loadeddata', videoLoad);
	var audio = document.getElementById('audio');
	audio.addEventListener('loadeddata', audioLoad);
	
	/*setTimeout(function(){
		$("#wrapper").animate({
			'opacity':'1'
		},700);
	},1000);*/
});
function animateIn(){
	console.log('enterlogo');
		$("#wrapper").stop().animate({
			'opacity':'1',
			'width':'80%',
			'height':'100%'
		},500);
		$("#wrapper").css('z-index', '1001');
}
function animateOut(){
	console.log('leavewrapper');
		$("#wrapper").stop().animate({
			'opacity':'0',
			'width':'40%',
			'height':'50%',
			'z-index':'999'
		},500);
		$("#wrapper").css('z-index', '999');
		
}
function videoLoad(){
	$("#stillframe").hide();
	document.getElementById('audio').play();
	$("#hover-logo").mouseenter(animateIn);
	$("#wrapper").mouseleave(animateOut);
}
function audioLoad(){
	this.currentTime = 11;
}