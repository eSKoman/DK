//Animation with scroll
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);

//Change background
var images = [
  "./media/titulky/20210408_160951.jpg",
  "./media/titulky/20210729_170235.jpg",
  "./media/titulky/20220405_161303.jpg"
]

var imageHead = document.querySelector(".showcase-area");

var i = 0;
setInterval(function () {

  imageHead.style.backgroundImage = "url(" + images[i] + ")";

  i = i + 1;
  if (i == images.length) {
    i = 0;
  }
}, 3000);

//Navigation
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', () => {
  openMenu();
});

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', () => {
    openMenu();
  })
};

function openMenu() {
  //Animate Links
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });

  //Hamburger Animation
  hamburger.classList.toggle("toggle");
}