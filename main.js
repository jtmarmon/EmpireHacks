$(document).ready(function(){
	setInterval(pulseArrow, 700);
	/*setTimeout(function(){
		$("#wrapper").animate({
			'opacity':'1'
		},700);
	},1000);*/
});
var ANIMATION_TIME = 300;
function animateIn(){
	console.log('enterlogo');
		$("#wrapper").stop().animate({
			'opacity':'1',
			'width':'80%',
			'height':'100%'
		},ANIMATION_TIME);
		$("#wrapper").css('z-index', '1001');
		// $("#hover-logo").attr('src', 'noglow.png');
		$("#hover-logo").animate({'opacity': '0'}, ANIMATION_TIME);
}
function animateOut(){
	console.log('leavewrapper');
		$("#wrapper").stop().animate({
			'opacity':'0',
			'width':'40%',
			'height':'50%',
			'z-index':'999'
		},ANIMATION_TIME, function(){
			// $("#hover-logo").attr('src', 'blackglow.png');
		});
		$("#wrapper").css('z-index', '999');
		$("#hover-logo").animate({'opacity': '1'}, ANIMATION_TIME);
		
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

var arrowCycle = true;
function pulseArrow() {
			arrowCycle = !arrowCycle;
			if(arrowCycle)
			{
	        	$(".arrow-down").css('border-top-color', 'rgba(0,163,172,.7)');
	        }
	        else
	        {
	        	$(".arrow-down").css('border-top-color', 'rgba(0,163,172,.2)');
	        }
	    }

var muted = true;
function toggleVolume(){
	if(muted)
	{
		$("#volumeButton").attr('src', 'volumeLoud.png');
		document.getElementById('audio').muted = false;
	}
	else
	{
		$("#volumeButton").attr('src', 'volumeMute.png');
		document.getElementById('audio').muted = true;
	}
	muted = !muted;
}

















