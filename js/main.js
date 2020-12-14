// const slider = document.querySelector("#slider");
if (window.innerWidth < 840) {
  var slideIndex = 1;
  showSlides(slideIndex);
  //   automaticSlide();
  setInterval(function () {
    slideIndex++;
    showSlides(slideIndex);
  }, 3000);
} else {
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "block";
  }
}

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  //   console.log("setting ", slideIndex, "th element to display block");
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function automaticSlide() {}

const openBtn = document.querySelector("#open");
const closeBtn = document.querySelector("#close");
const navBar = document.querySelector("#nav");

openBtn.addEventListener("click", openNav);
function openNav() {
  openBtn.style.display = "none";
  closeBtn.style.display = "block";

  navBar.className = "header__nav open";
}
closeBtn.addEventListener("click", closeNav);
function closeNav() {
  openBtn.style.display = "block";
  closeBtn.style.display = "none";

  navBar.className = "header__nav close";
}
