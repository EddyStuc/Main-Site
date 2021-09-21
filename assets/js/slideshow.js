let slideIndex = 1;
let imageContainer;

let slideOpened = function (e) {
  imageContainer = e.target.getAttribute("data-image-container");
  showSlides(0, imageContainer);
};

let projects = document.querySelectorAll(".project-container button");
for (let i = 0; i < projects.length; i++) {
  projects[i].addEventListener("click", slideOpened);
}

function changeSlide(increment) {
  showSlides((slideIndex += increment), imageContainer);
}

function showSlides(currentSlide, imageContainerClass) {
  let i;
  let image_group = document.getElementsByClassName(imageContainerClass);
  if (currentSlide > image_group.length) {
    slideIndex = 1;
  }
  if (currentSlide < 1) {
    slideIndex = image_group.length;
  }
  for (i = 0; i < image_group.length; i++) {
    image_group[i].style.display = "none";
  }
  image_group[slideIndex - 1].style.display = "block";
}