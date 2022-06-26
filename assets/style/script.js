const span1 = document.getElementById("span1");
const span2 = document.getElementById("span2");
const span3 = document.getElementById("span3");
const span4 = document.getElementById("span4");
const toggle = document.querySelector(".box-toggle input");
const listLink = document.querySelector(".nav-item");

toggle.addEventListener("click", () => {
    listLink.classList.toggle("translate");
})

setInterval(() => {
    setTimeout(() => {
        span1.classList.remove("none");
        span1.classList.remove("animation");
    }, 0)

    setTimeout(() => {
        span1.classList.add("none");
        span1.classList.add("animation");
    }, 2000);

    setTimeout(() => {
        span2.classList.remove("none");
        span2.classList.remove("animation");
    }, 2000);
    
    setTimeout(()=>{
        span2.classList.add("none");
        span2.classList.add("animation");
    }, 4000);

    setTimeout(() => {
        span3.classList.remove("none");
        span3.classList.remove("animation");
    }, 4000);

    setTimeout(() => {
        span3.classList.add("none");
        span3.classList.add("animation");
    }, 6000);

    setTimeout(() => {
        span4.classList.remove("none");
        span4.classList.remove("animation");
    }, 6000);

    setTimeout(() => {
        span4.classList.add("none");
        span4.classList.add("animation");
    }, 8000);
}, 8000);
