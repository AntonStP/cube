import {randomInteger} from "../utils/randomInteger";

const cube = document.querySelector('.cube');
const cubeZone = document.querySelector('.cube__active-zone');
document.ondragstart = ()=> {return false;};


if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) { //для touch устройств
    // document.addEventListener("touchstart", function (event) {
    //     const target = event.target.closest(".cube__active-zone");
    //     if (!target) return;
    //     const coordStart=event.touches[0];
    //     let touchStart = {x:coordStart.pageX, y:coordStart.pageY};
    //     let touchMove;
    //     cubeZone.ontouchmove = function (event) {
    //         touchMove = {x:event.touches[0].pageX, y:event.touches[0].pageY};
    //         let rotY = ((touchMove.x - touchStart.x)/360).toFixed(2);
    //         let rotX = ((-touchMove.y + touchStart.y)/360).toFixed(2);
    //         cube.style.transform = `rotateY(${rotY}turn) rotateX(${rotX}turn)`;
    //     };
    //     document.addEventListener('touchend', function () {
    //         cubeZone.touchmove=null;
    //         touchStart = touchMove;
    //         consoleTransform(randomInteger(1,6));
    //         document.onpointerup=null;
    //     });
    // });

} else { //для компов
    document.addEventListener("pointerdown", function (event) {
        const target = event.target.closest(".cube__active-zone");
        if (!target) return;
        let touchStart = {x:event.clientX, y:event.clientY};
        let touchMove;
        cubeZone.onpointermove = function (event) {
            touchMove ={x:event.clientX, y:event.clientY};
            let rotY = ((touchMove.x - touchStart.x)/360).toFixed(2);
            let rotX = ((-touchMove.y + touchStart.y)/360).toFixed(2);
            cube.style.transform = `rotateY(${rotY}turn) rotateX(${rotX}turn)`;
        };
        document.onpointerup = function () {
            cubeZone.onpointermove=null;
            touchStart = touchMove;
            consoleTransform(randomInteger(1,6));
            document.onpointerup=null;
        };
    });

}

function consoleTransform(side) {
    console.log("transform", cube.style.transform);
    console.log("side", side)
    setTimeout(()=> {
        switch (side) {
            case 1 :
                cube.style.transform = `rotateY(${0}turn) rotateX(${0}turn)`;
                break;
            case 2 :
                cube.style.transform = `rotateY(${-0.25}turn) rotateX(${0}turn)`;
                break;
            case 3 :
                cube.style.transform = `rotateY(${0.5}turn) rotateX(${0}turn)`;
                break;
            case 4 :
                cube.style.transform = `rotateY(${0.25}turn) rotateX(${0}turn)`;
                break;
            case 5 :
                cube.style.transform = `rotateY(${0}turn) rotateX(${-0.25}turn)`;
                break;
            case 6 :
                cube.style.transform = `rotateY(${-0.5}turn) rotateX(${-0.25}turn)`;
                break;
        }
    },510)
}