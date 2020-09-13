
var volumeLevel = 0.5;
var muteState = false;

var source = new EventSource("../scripts/dash.php");
source.onmessage = function(event) {
	console.log(event.data);
	var info = JSON.parse(event.data);
	if(info.clap == 1) {
		var audioElement = new Audio("../assets/applause8.mp3");
		audioElement.volume = volumeLevel;
		audioElement.muted = muteState;
		audioElement.play();
	}
	
	var lines = info.text.split("\n").reverse().join("<br>");
	var elem = document.getElementById('comments');
	elem.innerHTML = lines;

};


document.getElementById("volumeUp").onclick = function volumeUp() {
	volumeLevel += 0.05;
	if (volumeLevel > 1.0) {
		volumeLevel = 1.0;
	}	
	document.getElementById('volumeLevel').innerText = Math.floor(volumeLevel*100);
}

document.getElementById("volumeDown").onclick = function volumeDown() {
	volumeLevel -= 0.05;
	if (volumeLevel < 0.0) {
		volumeLevel = 0.0;
	}	
	document.getElementById('volumeLevel').innerText = Math.floor(volumeLevel*100);
}

document.getElementById("muteButton").onclick = function volumeMuteUnmute() {
	if (muteState) {
		muteState = false;
		document.getElementById("muteButton").innerText = "Mute";
	} else {
		muteState = true;
		document.getElementById("muteButton").innerText = "Unmute";
	}	
}


