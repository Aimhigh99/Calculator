
// Windows 11 Calculator with Dark Mode, Slide-in Menu and Click to Copy - HTML, CSS & JavaScript
// Follow me on;
// Twitter: https://twitter.com/ericaimhigh
// Instagram: https://instagram.com/@ericaimhigh_
// Threads: https://threads.net/@ericaimhigh_



//Dark Mode Switch
let themeBtn = document.querySelector(".theme");

const body = document.querySelector("body");

themeBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
})



let menuToggle = document.querySelector('.menuBtn');
let menuToggle2 = document.querySelector('.menuBtn2');

let menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
})

menuToggle2.addEventListener("click", () => {
    menu.classList.toggle("active");
})



let copyBtn = document.querySelector(".fa-copy");

let copyText = document.querySelector(".display");

copyText.select();
copyText.setSelectionRange(0, 99999);



copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(copyText.value);
    alert("Answer copied")
});

