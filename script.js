/* ==========================================
   PREMIUM LANDING PAGE V2
========================================== */

const OFFER_URL = "https://singingfiles.com/show.php?l=0&u=2535160&id=69083";

document.getElementById("offerButton").href=OFFER_URL;
document.getElementById("offerButton2").href=OFFER_URL;

/* ==============================
Mouse Glow
============================== */

const glow=document.querySelector(".mouse-glow");

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

/* ==========================================
   SCROLL REVEAL
========================================== */

const reveals = document.querySelectorAll(

".benefit-card,.review-card,.faq-item,.trust-item"

);

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},{

threshold:.15

});

reveals.forEach(item=>{

item.classList.add("reveal");

observer.observe(item);

});
/*=========================================
LIVE COUNTER
=========================================*/

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute("data-target");

const current=+counter.innerText;

const increment=target/100;

if(current<target){

counter.innerText=Math.ceil(current+increment);

setTimeout(update,20);

}else{

counter.innerText=target;

}

}

update();

});
/*=========================================
BUTTON HOVER GLOW
=========================================*/

document.querySelectorAll(".cta-button").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

document.querySelector(".mouse-glow").style.transform="translate(-50%,-50%) scale(1.5)";

});

btn.addEventListener("mouseleave",()=>{

document.querySelector(".mouse-glow").style.transform="translate(-50%,-50%) scale(1)";

});

});
/*=========================================
NAVBAR
=========================================*/

const navButton = document.getElementById("navButton");

if(navButton){

navButton.href = OFFER_URL;

}

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>40){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}

});
// ======================
// FAQ ACCORDION
// ======================
document.querySelectorAll(".faq-question").forEach(button=>{

button.addEventListener("click",function(){

const item=this.closest(".faq-item");

const answer=item.querySelector(".faq-answer");

const icon=this.querySelector("i");

document.querySelectorAll(".faq-item").forEach(faq=>{

if(faq!==item){

faq.querySelector(".faq-answer").style.maxHeight=null;

faq.querySelector("i").classList.remove("fa-xmark");

faq.querySelector("i").classList.add("fa-plus");

}

});

if (answer.style.maxHeight && answer.style.maxHeight !== "0px") {

    // Close
    answer.style.maxHeight = "0px";
   icon.classList.remove("fa-xmark");
    icon.classList.add("fa-plus");
} else {

    // Close all other FAQ
    document.querySelectorAll(".faq-item").forEach(faq => {

        faq.querySelector(".faq-answer").style.maxHeight = "0px";

        const otherIcon = faq.querySelector("i");
        otherIcon.classList.remove("fa-xmark");
        otherIcon.classList.add("fa-plus");

    });

    // Open current FAQ
    answer.style.maxHeight = answer.scrollHeight + "px";

    icon.classList.remove("fa-plus");
    icon.classList.add("fa-xmark");

}

});

});