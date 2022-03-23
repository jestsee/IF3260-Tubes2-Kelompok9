/* fungsi-fungsi untuk handle camera angle, zoom, dan view */
function cameraAngle() {
    var cameraAngle = document.getElementById("cameraAngle");
    cameraAngleRadians = degToRad(cameraAngle.value);
    states.drawAll();
}

function zoomOut() {
    // var sliderX = document.getElementById("xscale");
    // var valX = document.getElementById("x-val-scale");
    // var sliderY = document.getElementById("yscale");
    // var valY = document.getElementById("y-val-scale");
    // var sliderZ = document.getElementById("zscale");
    // var valZ = document.getElementById("z-val-scale");
    // valX.innerHTML = sliderX.value/100;
    // valY.innerHTML = sliderY.value/100;
    // valZ.innerHTML = sliderZ.value/100;
    // for (let i=0; i < states.objects.length; i++) {
    //     console.log(states.objects[i].name);
    //     sliderX.value *= 1.1
    //     sliderY.value *= 1.1
    //     sliderZ.value *= 1.1
    //     states.objects[i].xScale(sliderX.value/100);
    //     states.objects[i].yScale(sliderX.value/100);
    //     states.objects[i].zScale(sliderX.value/100);
    // }
    // cameraAngleRadians = multiply(0.9, cameraAngleRadians);
    // cameraMatrix = multiply(scale(0.9, 0.9, 0.9), cameraMatrix);
    scaleValue = scaleValue * 0.9;
    states.drawAll();
}

function zoomIn() {
    // var sliderX = document.getElementById("xscale");
    // var valX = document.getElementById("x-val-scale");
    // var sliderY = document.getElementById("yscale");
    // var valY = document.getElementById("y-val-scale");
    // var sliderZ = document.getElementById("zscale");
    // var valZ = document.getElementById("z-val-scale");
    // valX.innerHTML = sliderX.value/100;
    // valY.innerHTML = sliderY.value/100;
    // valZ.innerHTML = sliderZ.value/100;
    // for (let i=0; i < states.objects.length; i++) {
    //     console.log(states.objects[i].name);
    //     sliderX.value *= 0.9
    //     sliderY.value *= 0.9
    //     sliderZ.value *= 0.9
    //     states.objects[i].xScale(sliderX.value/100);
    //     states.objects[i].yScale(sliderX.value/100);
    //     states.objects[i].zScale(sliderX.value/100);
    // }
    // cameraAngleRadians = multiply(1.1, cameraAngleRadians);
    // cameraMatrix = multiply(scale(1.1, 1,1, 1.1), cameraMatrix);
    scaleValue = scaleValue * 1.1;
    states.drawAll();
}

function resetView(){
    cameraAngleRadians = 1;
    for (let i=0; i < states.objects.length; i++) {
        if (states.objects[i].name == "CUBE") {
            states.objects[i].position = states.objects[i].backupArrPosition;
            states.objects[i].center = [400, 80, 80];
            states.objects[i].rotate = [30, 0, 0];
            states.objects[i].translation = [150, 200, -828];
            states.objects[i].scale = [1,1,1];
        } else if (states.objects[i].name == "CUBEOCTAHEDRON") {
            states.objects[i].position = states.objects[i].backupArrPosition;
            states.objects[i].center = [80, 60, 0];
            states.objects[i].rotate = [90, 0, 0];
            states.objects[i].translation = [300, 300, -828];
            states.objects[i].scale = [1,1,1];   
        } else if (states.objects[i].name == "PYRAMID") {
            states.objects[i].position = states.objects[i].backupArrPosition;
            states.objects[i].center = [80, 60, 160/3];
            states.objects[i].rotate = [90, 0, 0];
            states.objects[i].translation = [150, 200, -828];
            states.objects[i].scale = [1,1,1];
        }
    }

    states.drawAll();
}