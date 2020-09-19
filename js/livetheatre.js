var liveCtr = document.getElementById("liveCounter");

function getViewerCount() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			liveCtr.innerText = this.responseText;
		}	
	};
	
	xmlhttp.open("GET", "scripts/livecount.php", true);
	xmlhttp.send();
}

setInterval(getViewerCount,1000);

var clapButton = document.getElementById("clapButton");

clapButton.onclick = function applauseStart() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log(this.responseText);
		}	
	};
	
	xmlhttp.open("GET", "scripts/server.php?clap=1", true);
	xmlhttp.send();
}

var clapButton = document.getElementById("commentButton");

commentButton.onclick = function sendComment() {
	var name = document.getElementById("name").value; 
	var comment = document.getElementById("comment").value;
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log(this.responseText);
		}	
	};
	var d = new Date();
	comment = d.getHours() + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0"+d.getSeconds()).slice(-2) + "    <b>" + name + "</b> " + comment;
	document.getElementById("comment").value = "";
	xmlhttp.open("GET", "scripts/server.php?comment="+comment, true);
	xmlhttp.send();

}	



