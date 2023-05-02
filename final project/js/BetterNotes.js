var imageSources = ["images/BetterNotes/hl4frame1.png", "images/BetterNotes/hl4frame2.png", "images/BetterNotes/hl4frame3.png"]

const image = document.getElementById("highlight4");

const image2 = document.getElementById("hl5Image");

var imageSources2 = ["images/BetterNotes/hl5frame1.png", "images/BetterNotes/hl5frame2.png", "images/BetterNotes/hl5frame3.png","images/BetterNotes/hl5frame4.png"]


var index = 0;
setInterval (function(){
  if (index === imageSources.length) {
    index = 0;
  }
  image.src = imageSources[index];
  image2.src = imageSources2[index];
  index++;
} , 1000);
