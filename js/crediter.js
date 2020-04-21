/*------------------MODAL------------------*/

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let img = document.getElementById("myThumb");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the thumbnail, open the modal 
img.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


/*------------------VIDEO------------------*/

let vid, playbtn, seekslider, curtimetext, durtimetext, mutebtn, volumeslider, fullscreenbtn;
function intializePlayer(){
	// Set object references
	vid = document.getElementById("my_video");
	playbtn = document.getElementById("playpausebtn");
	seekslider = document.getElementById("seekslider");
	curtimetext = document.getElementById("curtimetext");
	durtimetext = document.getElementById("durtimetext");
	mutebtn = document.getElementById("mutebtn");
	volumeslider = document.getElementById("volumeslider");
	fullscreenbtn = document.getElementById("fullscreenbtn");
	// Add event listeners
	playbtn.addEventListener("click",playPause,false);
	seekslider.addEventListener("change",vidSeek,false);
	vid.addEventListener("timeupdate",seektimeupdate,false);
	mutebtn.addEventListener("click",vidmute,false);
	volumeslider.addEventListener("change",setvolume,false);
	fullscreenbtn.addEventListener("click",toggleFullScreen,false);
}

window.onload = intializePlayer;
//play and pause 
function playPause(){
	if(vid.paused){
		vid.play();
		// playbtn.style.background = "url(img/pause.png)";
		playbtn.classList.remove("fa-play");
		playbtn.classList.add("fa-pause");
	} else {
		vid.pause();
		// playbtn.style.background = "url(img/play.png)";
		playbtn.classList.remove("fa-pause");
		playbtn.classList.add("fa-play");
	}
}

//barre de temps
function vidSeek(){
	let seekto = vid.duration * (seekslider.value / 100);
	vid.currentTime = seekto;
}

//choisir temps
function seektimeupdate(){
	let nt = vid.currentTime * (100 / vid.duration);
	seekslider.value = nt;
	let curmins = Math.floor(vid.currentTime / 60);
	let cursecs = Math.floor(vid.currentTime - curmins * 60);
	let durmins = Math.floor(vid.duration / 60);
	let dursecs = Math.floor(vid.duration - durmins * 60);
	if(cursecs < 10){ cursecs = "0"+cursecs; }
	if(dursecs < 10){ dursecs = "0"+dursecs; }
	if(curmins < 10){ curmins = "0"+curmins; }
	if(durmins < 10){ durmins = "0"+durmins; }
	curtimetext.innerHTML = curmins+":"+cursecs;
	durtimetext.innerHTML = durmins+":"+dursecs;
}

//mute and unmute
function vidmute(){
	if(vid.muted){
		vid.muted = false;
		// mutebtn.style.background = "url(img/unmute.png)";
		mutebtn.classList.remove("fa-volume-mute");
		mutebtn.classList.add("fa-volume-up");
	} else {
		vid.muted = true;
		// mutebtn.style.background = "url(img/mute.png)";
		mutebtn.classList.remove("fa-volume-up");
		mutebtn.classList.add("fa-volume-mute");
	}
}

//set volume
function setvolume(){
	vid.volume = volumeslider.value / 100;
}

//fullscreen
function toggleFullScreen(){
	if(vid.requestFullScreen){
		vid.requestFullScreen();
	} else if(vid.webkitRequestFullScreen){
		vid.webkitRequestFullScreen();
	} else if(vid.mozRequestFullScreen){
		vid.mozRequestFullScreen();
	}
}

//download in footer
function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}