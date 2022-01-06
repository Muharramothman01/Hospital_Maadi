let nav = document.querySelector(".navbar-nav");
let item = document.querySelectorAll(".nav-item");
let about = document.querySelector("#about");
let dr = document.querySelector("#dr");
let gallry = document.querySelector("#gal");
let contact = document.querySelector("#contact");

window.addEventListener("scroll",()=>
{

    if(window.pageYOffset >= 0 && window.pageYOffset <= about.offsetTop-200)
        item[0].id = "active";
    else
        item[0].id = "";

    if(window.pageYOffset >= about.offsetTop-200 && window.pageYOffset <=dr.offsetTop-200)
        item[1].id = "active";
    else
        item[1].id = "";

    if(window.pageYOffset >= dr.offsetTop-200 && window.pageYOffset <= gallry.offsetTop-200)
        item[2].id = "active";
    else
        item[2].id = "";

    if(window.pageYOffset >= gallry.offsetTop-200 && window.pageYOffset <= contact.offsetTop-200)
        item[3].id = "active";
    else
        item[3].id = "";

    if(window.pageYOffset >= contact.offsetTop-200)
        item[4].id = "active";
    else
        item[4].id = "";
});

// slideshow 


let slideIndex = 0;
function plusDivs(n)
{
    showDivs(slideIndex +=n);
}
carousel();

function carousel() {
  let i;
  let x = document.querySelectorAll(".mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 5500); // Change image every 5.5 seconds
}

function showDivs(n) {
    var i;
    var x = document.querySelectorAll(".mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
  }
