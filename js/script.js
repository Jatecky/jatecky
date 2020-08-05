var audio = document.getElementById("myaudio");
		  audio.volume = 0.4;

var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
if (!isChrome){
	$('#iframeAudio').remove()
}
else {
	$('#playAudio').remove()
}
