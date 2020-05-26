/*------------------MODALS------------------*/

//modal 1
function openModal1() {
  document.getElementById("myModal1").style.height = "100%";
}

//modal 2
function openModal2() {
  document.getElementById("myModal2").style.height = "100%";
}

//modal 3
function openModal3() {
  document.getElementById("myModal3").style.height = "100%";
} 

//Modèle pour fermer modal mais rester sur page créditer
/*
function closeModal() {	
  document.getElementById("myModal").style.height = "0%";
}
*/ 

/*------------------STICKY WHEN VIDEO------------------*/

//header
var header = document.getElementById("sticky-header");
var sticky = header.offsetTop;
function stickHeader() {
  header.classList.add("sticky-header");
}

//footer
var footer = document.getElementById("sticky-footer");
var sticky = footer.offsetTop;
function stickFooter() {
  footer.classList.add("sticky-footer");
}


/*------------------VIDEO CODE ORIGINAL------------------

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
    playbtn.classList.remove("fa-play");
    playbtn.classList.add("fa-pause");
  } else {
    vid.pause();
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
    mutebtn.classList.remove("fa-volume-mute");
    mutebtn.classList.add("fa-volume-up");
  } else {
    vid.muted = true;
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
*/

/*------------------VIDEO 1------------------*/

let vid1, playbtn1, seekslider1, curtimetext1, durtimetext1, mutebtn1, volumeslider1, fullscreenbtn1;
function intializePlayer1(){
  // Set object references
  vid1 = document.getElementById("my_video1");
  playbtn1 = document.getElementById("playpausebtn1");
  seekslider1 = document.getElementById("seekslider1");
  curtimetext1 = document.getElementById("curtimetext1");
  durtimetext1 = document.getElementById("durtimetext1");
  mutebtn1 = document.getElementById("mutebtn1");
  volumeslider1 = document.getElementById("volumeslider1");
  fullscreenbtn1 = document.getElementById("fullscreenbtn1");
  // Add event listeners
  playbtn1.addEventListener("click",playPause1,false);
  seekslider1.addEventListener("change",vidSeek1,false);
  vid1.addEventListener("timeupdate",seektimeupdate1,false);
  mutebtn1.addEventListener("click",vidmute1,false);
  volumeslider1.addEventListener("change",setvolume1,false);
  fullscreenbtn1.addEventListener("click",toggleFullScreen1,false);
}

window.onload = intializePlayer1;
//play and pause 
function playPause1(){
  if(vid1.paused){
    vid1.play();
    playbtn1.classList.remove("fa-play");
    playbtn1.classList.add("fa-pause");
  } else {
    vid1.pause();
    playbtn1.classList.remove("fa-pause");
    playbtn1.classList.add("fa-play");
  }
}

//barre de temps
function vidSeek1(){
  let seekto1 = vid1.duration * (seekslider1.value / 100);
  vid1.currentTime = seekto1;
}

//choisir temps
function seektimeupdate1(){
  let nt1 = vid1.currentTime * (100 / vid1.duration);
  seekslider1.value = nt1;
  let curmins1 = Math.floor(vid1.currentTime / 60);
  let cursecs1 = Math.floor(vid1.currentTime - curmins1 * 60);
  let durmins1 = Math.floor(vid1.duration / 60);
  let dursecs1 = Math.floor(vid1.duration - durmins1 * 60);
  if(cursecs1 < 10){ cursecs1 = "0"+cursecs1; }
  if(dursecs1 < 10){ dursecs1 = "0"+dursecs1; }
  if(curmins1 < 10){ curmins1 = "0"+curmins1; }
  if(durmins1 < 10){ durmins1 = "0"+durmins1; }
  curtimetext1.innerHTML = curmins1+":"+cursecs1;
  durtimetext1.innerHTML = durmins1+":"+dursecs1;
}

//mute and unmute
function vidmute1(){
  if(vid1.muted){
    vid1.muted = false;
    mutebtn1.classList.remove("fa-volume-mute");
    mutebtn1.classList.add("fa-volume-up");
  } else {
    vid1.muted = true;
    mutebtn1.classList.remove("fa-volume-up");
    mutebtn1.classList.add("fa-volume-mute");
  }
}

//set volume
function setvolume1(){
  vid1.volume = volumeslider1.value / 100;
}

//fullscreen
function toggleFullScreen1(){
  if(vid1.requestFullScreen){
    vid1.requestFullScreen();
  } else if(vid1.webkitRequestFullScreen){
    vid1.webkitRequestFullScreen();
  } else if(vid1.mozRequestFullScreen){
    vid1.mozRequestFullScreen();
  }
}

/*------------------VIDEO 2------------------*/

let vid2, playbtn2, seekslider2, curtimetext2, durtimetext2, mutebtn2, volumeslider2, fullscreenbtn2;
function intializePlayer2(){
  // Set object references
  vid2 = document.getElementById("my_video2");
  playbtn2 = document.getElementById("playpausebtn2");
  seekslider2 = document.getElementById("seekslider2");
  curtimetext2 = document.getElementById("curtimetext2");
  durtimetext2 = document.getElementById("durtimetext2");
  mutebtn2 = document.getElementById("mutebtn2");
  volumeslider2 = document.getElementById("volumeslider2");
  fullscreenbtn2 = document.getElementById("fullscreenbtn2");
  // Add event listeners
  playbtn2.addEventListener("click",playPause2,false);
  seekslider2.addEventListener("change",vidSeek2,false);
  vid2.addEventListener("timeupdate",seektimeupdate2,false);
  mutebtn2.addEventListener("click",vidmute2,false);
  volumeslider2.addEventListener("change",setvolume2,false);
  fullscreenbtn2.addEventListener("click",toggleFullScreen2,false);
}

window.onload = intializePlayer2;
//play and pause 
function playPause2(){
  if(vid2.paused){
    vid2.play();
    playbtn2.classList.remove("fa-play");
    playbtn2.classList.add("fa-pause");
  } else {
    vid2.pause();
    playbtn2.classList.remove("fa-pause");
    playbtn2.classList.add("fa-play");
  }
}

//barre de temps
function vidSeek2(){
  let seekto2 = vid2.duration * (seekslider2.value / 100);
  vid2.currentTime = seekto2;
}

//choisir temps
function seektimeupdate2(){
  let nt2 = vid2.currentTime * (100 / vid2.duration);
  seekslider2.value = nt2;
  let curmins2 = Math.floor(vid2.currentTime / 60);
  let cursecs2 = Math.floor(vid2.currentTime - curmins2 * 60);
  let durmins2 = Math.floor(vid2.duration / 60);
  let dursecs2 = Math.floor(vid2.duration - durmins2 * 60);
  if(cursecs2 < 10){ cursecs2 = "0"+cursecs2; }
  if(dursecs2 < 10){ dursecs2 = "0"+dursecs2; }
  if(curmins2 < 10){ curmins2 = "0"+curmins2; }
  if(durmins2 < 10){ durmins2 = "0"+durmins2; }
  curtimetext2.innerHTML = curmins2+":"+cursecs2;
  durtimetext2.innerHTML = durmins2+":"+dursecs2;
}

//mute and unmute
function vidmute2(){
  if(vid2.muted){
    vid2.muted = false;
    mutebtn2.classList.remove("fa-volume-mute");
    mutebtn2.classList.add("fa-volume-up");
  } else {
    vid2.muted = true;
    mutebtn2.classList.remove("fa-volume-up");
    mutebtn2.classList.add("fa-volume-mute");
  }
}

//set volume
function setvolume2(){
  vid2.volume = volumeslider2.value / 100;
}

//fullscreen
function toggleFullScreen2(){
  if(vid2.requestFullScreen){
    vid2.requestFullScreen();
  } else if(vid2.webkitRequestFullScreen){
    vid2.webkitRequestFullScreen();
  } else if(vid2.mozRequestFullScreen){
    vid2.mozRequestFullScreen();
  }
}

/*------------------VIDEO 3------------------*/

let vid3, playbtn3, seekslider3, curtimetext3, durtimetext3, mutebtn3, volumeslider3, fullscreenbtn3;
function intializePlayer3(){
  // Set object references
  vid3 = document.getElementById("my_video3");
  playbtn3 = document.getElementById("playpausebtn3");
  seekslider3 = document.getElementById("seekslider3");
  curtimetext3 = document.getElementById("curtimetext3");
  durtimetext3 = document.getElementById("durtimetext3");
  mutebtn3 = document.getElementById("mutebtn3");
  volumeslider3 = document.getElementById("volumeslider3");
  fullscreenbtn3 = document.getElementById("fullscreenbtn3");
  // Add event listeners
  playbtn3.addEventListener("click",playPause3,false);
  seekslider3.addEventListener("change",vidSeek3,false);
  vid3.addEventListener("timeupdate",seektimeupdate3,false);
  mutebtn3.addEventListener("click",vidmute3,false);
  volumeslider3.addEventListener("change",setvolume3,false);
  fullscreenbtn3.addEventListener("click",toggleFullScreen3,false);
}

window.onload = intializePlayer3;
//play and pause 
function playPause3(){
  if(vid3.paused){
    vid3.play();
    playbtn3.classList.remove("fa-play");
    playbtn3.classList.add("fa-pause");
  } else {
    vid3.pause();
    playbtn3.classList.remove("fa-pause");
    playbtn3.classList.add("fa-play");
  }
}

//barre de temps
function vidSeek3(){
  let seekto3 = vid3.duration * (seekslider3.value / 100);
  vid3.currentTime = seekto3;
}

//choisir temps
function seektimeupdate3(){
  let nt3 = vid3.currentTime * (100 / vid3.duration);
  seekslider3.value = nt3;
  let curmins3 = Math.floor(vid3.currentTime / 60);
  let cursecs3 = Math.floor(vid3.currentTime - curmins3 * 60);
  let durmins3 = Math.floor(vid3.duration / 60);
  let dursecs3 = Math.floor(vid3.duration - durmins3 * 60);
  if(cursecs3 < 10){ cursecs3 = "0"+cursecs3; }
  if(dursecs3 < 10){ dursecs3 = "0"+dursecs3; }
  if(curmins3 < 10){ curmins3 = "0"+curmins3; }
  if(durmins3 < 10){ durmins3 = "0"+durmins3; }
  curtimetext3.innerHTML = curmins3+":"+cursecs3;
  durtimetext3.innerHTML = durmins3+":"+dursecs3;
}

//mute and unmute
function vidmute3(){
  if(vid3.muted){
    vid3.muted = false;
    mutebtn3.classList.remove("fa-volume-mute");
    mutebtn3.classList.add("fa-volume-up");
  } else {
    vid3.muted = true;
    mutebtn3.classList.remove("fa-volume-up");
    mutebtn3.classList.add("fa-volume-mute");
  }
}

//set volume 
function setvolume3(){
  vid3.volume = volumeslider3.value / 100;
}

//fullscreen
function toggleFullScreen3(){
  if(vid3.requestFullScreen){
    vid3.requestFullScreen();
  } else if(vid3.webkitRequestFullScreen){
    vid3.webkitRequestFullScreen();
  } else if(vid3.mozRequestFullScreen){
    vid3.mozRequestFullScreen();
  }
}