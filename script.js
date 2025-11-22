let currentslide = 0;

let interval;

function slideshow(index) {
  let slides = document.getElementsByClassName("bannerimg");
  let dots = document.getElementsByClassName("dot");

  if (index < 0) {
    currentslide = slides.length - 1;
  }
  if (index > slides.length - 1) {
    currentslide = 0;
  }

  Array.from(slides).forEach((slide) => {
    slide.style.display = "none";
  });
  Array.from(dots).forEach((dot) => {
    dot.classList.remove("dot-active");
  });

  slides[currentslide].style.display = "flex";
  dots[currentslide].classList.add("dot-active");
}

function userclick(n) {
  currentslide += n;
  slideshow(currentslide);
}

function doted(n) {
  currentslide += n;
  slideshow(currentslide);
}

slideshow(currentslide);

function resetinterval() {
  clearInterval(interval);
  interval = setInterval(() => {
    userclick(1);
  }, 3000);
}

resetinterval();

const songs = [
  {
    title: "Darshana",
    author: "Hesham abdul wahab",
    src: "./data/hridayam.ogg",
    thumbnail: "./data/hridayam.webp",
    duration: "03:46",
    year: "2022",
  },
  {
    title: "Uyiril Thodum",
    author: "Sushin Shyam",
    src: "./data/kumblangi.ogg",
    thumbnail: "./data/kumblangi.webp",
    duration: "03:54",
    year: "2019",
  },
  {
    title: "Mandharapoo",
    author: "Jakes Bejoy",
    src: "./data/kumari.ogg",
    thumbnail: "./data/kumari.webp",
    duration: "04:00",
    year: "2022",
  },
  {
    title: "Ole melody",
    author: "Vishnu Vijay",
    src: "./data/thallumala.ogg",
    thumbnail: "./data/Thallumala.jpg",
    duration: "04:02",
    year: "2022",
  },
];

const outline = "./IMAGES/icons/menusong.png";

const tracklist = document.getElementById("tracklist");
const loadedimg = document.getElementById("loadedimg");
const title = document.getElementById("name");
const titleauthor = document.getElementById("author");
const progress = document.getElementById("progress");
const currenttime = document.getElementById("current-time");
const timeleft = document.getElementById("time-left");
const nextbtn = document.getElementById("next");
const prevbtn = document.getElementById("prev");
const playpause = document.getElementById("play-pause");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const playpausebtn = document.getElementById("play-pause");
const playpauseimg = document.getElementById("playpause");
const volumelow = document.getElementById("low-volume");
const volumehigh = document.getElementById("high-volume");
const volume = document.getElementById("volume");

let currentindex = 0;
let audio = new Audio();

tracklist.innerHTML = "";
loadedsong(currentindex);

function loadedsong(index) {
  let currentsong = songs[index];
  loadedimg.src = currentsong.thumbnail;
  audio.src = currentsong.src;
  title.innerHTML = currentsong.title;
  titleauthor.innerHTML = currentsong.author;
  currenttime.innerHTML = "00:00";
  timeleft.innerHTML = "00:00";
  audio.addEventListener("loadeddata", function () {
    progress.max = audio.duration;
  });
  highlightsong(index);
}

function playpausefn() {
  if (audio.paused) {
    audio.play();
    playpauseimg.src = "./IMAGES/icons/pause (2).png";
  } else {
    audio.pause();
    playpauseimg.src = "./IMAGES/icons/play (2).png";
  }
}

function padzero(number) {
  return (number < 10 ? "0" : "") + number;
}

function formattime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${padzero(minutes)}:${padzero(seconds)}`;
}

function updateprogress() {
  const presenttime = audio.currentTime;
  const duration = audio.duration;

  const remainingtime = duration - presenttime;
  progress.value = presenttime;

  currenttime.innerText = `${formattime(presenttime)}`;

  timeleft.innerText = `${
    "-" + (remainingtime >= 0 ? formattime(remainingtime) : "00:00")
  }`;
}

function nextfn() {
  currentindex++;
  if (currentindex > songs.length) {
    currentindex = 0;
  }
  loadedsong(currentindex);
}

function prevfn() {
  currentindex--;
  if (currentindex < 0) {
    currentindex = songs.length - 1;
  }
  loadedsong(currentindex);
}

function songslides() {
  songs.forEach((song, index) => {
    const trackcontainer = document.createElement("div");
    const trackimg = document.createElement("div");
    const iconeimg = document.createElement("img");
    const songimg = document.createElement("img");
    const trackdetail = document.createElement("div");
    const name = document.createElement("p");
    const author = document.createElement("p");
    const tracktime = document.createElement("div");
    const time = document.createElement("p");
    const year = document.createElement("p");

    trackcontainer.classList.add("track-container");
    trackimg.classList.add("trackimg");
    trackdetail.classList.add("track-detail");
    tracktime.classList.add("track-time");
    name.classList.add("trackname");
    author.classList.add("trackauthor");

    iconeimg.src = outline;
    songimg.src = song.thumbnail;
    name.innerText = song.title;
    author.innerText = song.author;
    time.innerText = song.duration;
    year.innerText = song.year;

    trackcontainer.appendChild(trackimg);
    trackcontainer.setAttribute("data-index", index);
    trackimg.appendChild(iconeimg);
    trackimg.appendChild(songimg);
    trackdetail.appendChild(name);
    trackdetail.appendChild(author);
    tracktime.appendChild(time);
    tracktime.appendChild(year);
    trackcontainer.appendChild(trackdetail);
    trackcontainer.appendChild(tracktime);
    tracklist.appendChild(trackcontainer);

    trackcontainer.addEventListener("click", function () {
      currentindex = index;
      loadedsong(currentindex);
      playpausefn();
    });
  });
}

function highlightsong(index) {
  const trackselected = document.querySelectorAll(".track-detail");

  trackselected.forEach((elements) => {
    elements.classList.remove("highlightsong");
  });

  const tracktdetailhighlight = document.querySelector(
    `.track-container[data-index="${index}"] .track-detail`
  );

  if (tracktdetailhighlight) {
    tracktdetailhighlight.classList.add("highlightsong");
  }
}

songslides();

//progress
progress.addEventListener("input", function () {
  audio.currentTime = progress.value;
});

audio.addEventListener("timeupdate", updateprogress);

//next,prev,playpause

next.addEventListener("click", nextfn);
prev.addEventListener("click", prevfn);
playpausebtn.addEventListener("click", playpausefn);
volumehigh.addEventListener("click", function () {
  audio.volume = 1;
  volumelow.src = "./IMAGES/icons/mute.png";
  volume.value = 1;
});
volumelow.addEventListener("click", function () {
  audio.volume = 0;
  volumelow.src = "./IMAGES/icons/mute1.png";
  volume.value = 0;
});
volume.addEventListener("click", function () {
  audio.volume = volume.value;
  volumelow.src = "./IMAGES/icons/mute.png";
  if (audio.volume == 0) {
    volumelow.src = "./IMAGES/icons/mute1.png";
  }
});

setTimeout(() => {
  document.getElementById("intro").style.display = "none";
  document.getElementById("main").classList.remove("hidden");
}, 4000);
