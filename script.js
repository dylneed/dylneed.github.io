var aWidth;
var aHeight;

var links;
var help;

window.addEventListener('load',init);
window.addEventListener('resize', layoutPage);

function init() {
	links = document.getElementById("links");
	help = document.getElementById("help");
	layoutPage();
}

function layoutPage() {
	aWidth = innerWidth;
	aHeight = innerHeight;
	//help.innerHTML += " " + aWidth;
}
