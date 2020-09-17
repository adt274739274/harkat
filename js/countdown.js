var countdownDate = new Date("Sep 17, 2020 21:00:00");
var enterButton = document.getElementById("enter");

enterButton.onclick = function passwordCheckAndLink() {
	var pswd = getPassword();
	if (document.getElementById("passwordInput").value == pswd) {
		console.log(pswd);
		console.log(document.getElementById("passwordInput").value); 
		window.location.href = "livetheatre.html";

	}	

}	

setDate();
function setDate() {
	document.getElementById("date").innerText = countdownDate.toDateString() + ", " + countdownDate.getHours() + ":" + countdownDate.getMinutes();
}
var x = setInterval(function() {

	var now = new Date().getTime();
	var then = countdownDate.getTime();
	var distance = countdownDate - now;
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

       	var timerText = ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
	document.getElementById("timer").innerText = timerText;
	
	if (distance < 0) {
		document.getElementById("timer").innerText = "00:00:00";
		clearInterval(x);
		document.getElementById("enter").disabled = false;
		setTimeout(function(){ 
			document.getElementById("enter").disabled = true;
	       	}, 600000);	
	}
}, 1000);

function getPassword() {
	return "qwerty123";
}	
