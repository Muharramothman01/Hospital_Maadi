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

