const textareaEl = document.getElementById("text-area")
const totalCounterEl = document.getElementById("total-counter")
const remainingCounterEl = document.getElementById("remaining-counter")
const testimonialCounterEl = document.getElementById("testimonial-container");
const submitButton = document.getElementById("submit-testimonial");
const usernameInput = document.getElementById("username-input");

let testimonials = [{
    name:"Amy J",
    photoUrl:"https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
    text:"Thanks to their intuitive understanding of my needs, they transformed my financial anxiety into confidence, repairing my leaky vessel and setting a course towards exciting horizons. Each meeting felt less like a consultation and more like a masterclass in wealth creation – their insights are like treasure maps, leading me to opportunities I never realized existed.",
},
{
    name:"Abby I",
    photoUrl:"https://st4.depositphotos.com/12982378/30287/i/450/depositphotos_302876834-stock-photo-beautiful-smiling-girl-isolated-pink.jpg",
    text:"With every goal we've set, I feel myself rising from the depths of uncertainty to the shores of financial empowerment. I can’t recommend them enough; they are the lighthouse illuminating my path in the foggy world of finance!",
},
{
    name:"Tammy R",
    photoUrl:"https://plus.unsplash.com/premium_photo-1693000697180-4e285198d71c?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text:"Navigating the ever-turbulent seas of finance felt like sailing a leaky ship – unpredictable and overwhelming. But then, like an expert captain, my financial services advisor swooped in, charting a clear course with wisdom and precision.",
},
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

function updateTestimonial(){
    const {name,photoUrl, text} = 
    testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;

    idx++;

    if(idx === testimonials.length){
        idx = 0;
    }
    setTimeout(updateTestimonial, 6000);
}
updateTestimonial();

//Dark Mode 
const inputEl = document.querySelector("input");
const bodyEl = document.querySelector("body");
inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody(){
    if (inputEl.checked) {
        bodyEl.style.background = "black";
    } else {
        bodyEl.style.background = "white";
    }
}

inputEl.addEventListener("input", () =>{
    updateBody()
    updateLocalStorage()
});

function updateLocalStorage() {
    localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}

//Button Hover Effect

const btnEl = document.querySelector(".butn");

btnEl.addEventListener("mouseover", (event) => {
    const x = (event.pageX - btnEl.offsetLeft);
    const y = (event.pageY - btnEl.offsetTop);

    btnEl.style.setProperty("--xPos", x + "px");
    btnEl.style.setProperty("--yPos", y + "px");
});

window.onload = function () {
    document.getElementById("loading-spinner").style.display = "none";
};

if (textareaEl) {
    textareaEl.addEventListener("keyup", updateCounter);
    updateCounter();
}


function updateCounter() {
totalCounterEl.innerText = textareaEl.value.length;
remainingCounterEl.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}
