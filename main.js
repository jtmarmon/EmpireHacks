$(document).ready(function(){
	
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
		$("#hover-logo").attr('src', 'noglow.png');
}
function animateOut(){
	console.log('leavewrapper');
		$("#wrapper").stop().animate({
			'opacity':'0',
			'width':'40%',
			'height':'50%',
			'z-index':'999'
		},500, function(){
			$("#hover-logo").attr('src', 'blackglow.png');
		});
		$("#wrapper").css('z-index', '999');
		
}
function videoLoad(){
	$("#stillframe").hide();
	document.getElementById('audio').play();
	$("#hover-logo").mouseenter(animateIn);
	$("#wrapper").mouseleave(animateOut);
}
function audioLoad(){
	 $('audio').bind('canplay', function(){
        $(this)[0].currentTime = 8;
        $(this)[0].volume = .5;
    });
}