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
            // consoleTransform(rotY,rotX);
        };
        document.addEventListener('pointerup', function () {
            cubeZone.onpointermove=null;
            touchStart = touchMove;
        });
    });

}

// function consoleTransform(rotY,rotX) {
//     console.log("transform", cube.style.transform)
//     if((+rotY>-0.125 && +rotY<0.125) && (+rotX>-0.125 && +rotX<0.125)) console.log("1");
//     if((+rotY>-0.125 && +rotY<0.125) && (+rotX>-0.125 && +rotX<0.125)) console.log("1");
// }