window.addEventListener("load", function() {
    var slideIndex = 1;
    showDivs(slideIndex);
    slidshow();
});

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    //slideIndex = 1
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) { slideIndex = 1 } else if (n < 1) { slideIndex = x.length } else { slideIndex = n }
    //if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" gallery-white", "");
    }
    //for (i = 0; i < dots.length; i++) {
    //    dots[i].className = dots[i].className.replace(" gallery-white", "");
    //}
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " gallery-white";
}

function slidshow() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" gallery-white", "");
    }
    slideIndex++;
    if (slideIndex > x.length) { slideIndex = 1 }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " gallery-white";
    setTimeout(slidshow, 5000); // Change image every 2 seconds
}