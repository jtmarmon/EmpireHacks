$(document).ready(function(){
	$("#placeholder").hover(animateIn, animateOut);
	/*setTimeout(function(){
		$("#wrapper").animate({
			'opacity':'1'
		},700);
	},1000);*/
});
function animateIn(){
		$("#wrapper").animate({
			'opacity':'1',
			'width':'80%',
			'height':'100%'
		},500);
}
function animateOut(){
		$("#wrapper").animate({
			'opacity':'0',
			'width':'0',
			'height':'0'
		},500);
}