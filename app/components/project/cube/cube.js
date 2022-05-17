import {randomInteger} from "../utils/randomInteger";
import {frazes} from "./frazes";

let state = "start";//состояние для проверки, что вообще происходит
//константы для контейнеров
const cube = document.querySelector('.cube');
const fraze = document.querySelector('.custom-page__fraze');
const cubeZone = document.querySelector('.cube__active-zone');
//константы координат для слушателей
let touchStart;
let touchMove;

document.ondragstart = ()=> {return false;};


if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) { //для touch устройств
    document.addEventListener("touchstart", function (event) {
        const target = event.target.closest(".cube__active-zone");
        if (!target) return;

        (state==="start") ? null : fraze.innerHTML = "бесплатные спины, можешь ещё покрутить";
        cube.classList.remove('cube_rotating');

        const coordStart=event.touches[0];
        touchStart = {x:coordStart.pageX, y:coordStart.pageY};
        cubeZone.ontouchmove = function (event) {
            touchMove = {x:event.touches[0].pageX, y:event.touches[0].pageY};
            const choord = calcRotation(touchStart, touchMove);
            cube.style.transform = `rotateY(${choord.rotY}turn) rotateX(${choord.rotX}turn)`;

        };
        document.addEventListener('touchend', function () {
            cubeZone.ontouchmove=null;
            touchStart = touchMove;
            rotatingWork(randomInteger(1,6));
            document.ontouchend=null;
        });
    });

} else { //для компов
    document.addEventListener("pointerdown", function (event) {
        const target = event.target.closest(".cube__active-zone");
        if (!target) return;

        (state==="start") ? null : fraze.innerHTML = "бесплатные спины, можешь ещё покрутить";
        cube.classList.remove('cube_rotating');

        touchStart = {x:event.clientX, y:event.clientY};
        cubeZone.onpointermove = function (event) {
            touchMove ={x:event.clientX, y:event.clientY};
            const choord = calcRotation(touchStart, touchMove);
            cube.style.transform = `rotateY(${choord.rotY}turn) rotateX(${choord.rotX}turn)`;
        };
        document.onpointerup = function () {
            cubeZone.onpointermove=null;
            touchStart = touchMove;
            rotatingWork(randomInteger(1,6));
            document.onpointerup=null;
            console.log("pointer-up")
        };
    });

}





function calcRotation(startChoord,moveChoord) {
    const rotX = ((-moveChoord.y + startChoord.y)/150).toFixed(2);
    const rotY = ((moveChoord.x - startChoord.x)/150).toFixed(2);
    return {rotX:rotX, rotY:rotY}
}

function rotatingWork(side) {
    console.log("transform", cube.style.transform);
    console.log("side", side)
    setTimeout(()=> {
        cube.classList.add('cube_rotating');
        fraze.innerHTML = frazes[randomInteger(0,frazes.length)];
        switch (side) {
            case 1 :
                cube.style.transform = `rotateY(${-0.01}turn) rotateX(${-0.01}turn)`;
                break;
            case 2 :
                cube.style.transform = `rotateY(${-0.26}turn) rotateX(${0}turn) rotateZ(0.01turn)`;
                break;
            case 3 :
                cube.style.transform = `rotateY(${0.49}turn) rotateX(${0.01}turn)`;
                break;
            case 4 :
                cube.style.transform = `rotateY(${0.24}turn) rotateX(${0}turn) rotateZ(-0.01turn)`;
                break;
            case 5 :
                cube.style.transform = `rotateY(${-0.01}turn) rotateX(${-0.26}turn)`;
                break;
            case 6 :
                cube.style.transform = `rotateY(${-0.49}turn) rotateX(${-0.24}turn)`;
                break;
        }
        state = "rotated";
    },2010);
}
