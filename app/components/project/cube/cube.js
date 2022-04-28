const cube = document.querySelector('.cube');

let X = 0;
let Y = 0;
document.addEventListener("keydown", rotate);

function rotate(event) {
    console.log("target.key", event.key);
    console.log("target.code", event.code);
    if (event.key==="ArrowUp") {
        X+=3;
    }
    if (event.key==="ArrowDown") {
        X-=3;
    }
    if (event.key==="ArrowLeft") {
        Y-=3;
    }
    if (event.key==="ArrowRight") {
        Y+=3;
    }
    cube.style.transform = `rotateX(${X}deg) rotateY(${Y}deg)`;

}