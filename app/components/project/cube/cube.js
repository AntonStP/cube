// const cube = document.querySelector('.cube');
//
// let X = 0;
// let Y = 0;
// let pressed = {"ArrowUp": false,"ArrowRight": false,"ArrowDown": false,"ArrowLeft": false,};
// document.addEventListener("keydown", rotate);
//
// function rotate(event) {
//     pressed.hasOwnProperty(event.code) ?  pressed[event.code] = true : null;
//     for (let prop in pressed) {
//         if(pressed["ArrowUp"]) X+=1;
//         if(pressed["ArrowDown"]) X-=1;
//         if(pressed["ArrowLeft"]) Y-=1;
//         if(pressed["ArrowRight"]) Y+=1;
//         console.log(`${prop} -> 1`, pressed[prop]);
//     }
//     cube.style.transform = `rotateX(${X}deg) rotateY(${Y}deg)`;
//
//     document.addEventListener('keyup', function () {
//         for (let prop in pressed) {
//             pressed[prop] = false;
//         }
//     })
// }

const cube = document.querySelector('.cube');

document.ondragstart = function() {
    return false;
};

document.addEventListener("pointerdown", function (event) {
    const touchStart = {x:event.clientX, y:event.clientY};
    document.onpointermove = function (event) {
        let touchMove = {x:event.clientX, y:event.clientY};
        cube.style.transform = `rotateY(${(touchMove.x - touchStart.x)*7}deg) rotateX(${(-touchMove.y+touchStart.y)*7}deg)`;
    };
});

document.addEventListener('pointerup', function () {
    document.onpointermove=null;
    console.log("jo2")
});