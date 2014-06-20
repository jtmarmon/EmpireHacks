$(document).ready(function(){
	$("#hover-logo").mouseenter(animateIn);
	$("#wrapper").mouseleave(animateOut);
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