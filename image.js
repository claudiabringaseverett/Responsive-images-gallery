var slideOne = 1;
showSlides(slideOne);

//next slide, go back options
function plusSlides (n) {
    showSlides(slideOne += n);
}

// preview the images
function currentSlide (n) {
    showSlides(slideOne = n)
}

function showSlides (n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption")
    if (n > slides.length) {slideOne = 1}
    if (n < 1) {slideOne = slides.length}
    for (i=0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideOne-1].style.display = "block";
      dots[slideOne-1].className += " active";
      captionText.innerHTML = dots[slideOne-1].alt;
}
