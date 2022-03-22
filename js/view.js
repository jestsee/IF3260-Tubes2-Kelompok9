/* fungsi-fungsi untuk handle camera angle, zoom, dan view */
// function cameraAngle() {
//     var pi = Math.PI;
//     let value = document.getElementById('cameraAngle').value;
//     value = degToRad(value);

//     let move = value - oldValueMove;

//     matrix = multiply(yRotation(move), matrix);
//     for(var i = 0; i<objects.length; i++){
//         draw(objects[i].projMatrix, objects[i].modelMatrix, objects[i].offset, objects[i].end);  
//     }

//     oldValueMove = value;
// }

// function zoomIn() {
//     matrix = multiply(scale(1.1, 1.1, 1.1), matrix);
//     for(var i = 0; i<objects.length; i++){
//         draw(objects[i].projMatrix, objects[i].modelMatrix, objects[i].offset, objects[i].end);  
//     }
// }

// function zoomOut() {
//     view_matrix = multiply(scale(0.9, 0.9, 0.9), view_matrix);
//     for(var i = 0; i<objects.length; i++){
//         draw(objects[i].projMatrix, objects[i].modelMatrix, objects[i].offset, objects[i].end);  
//     }
// }

function resetView(){
    console.log(states.objects);
    for (let i=0; i < states.objects.length; i++) {
        console.log(states.objects[i].name);
        if (states.objects[i].name == "CUBE") {
            console.log("cube");
            states.objects[i].position = states.objects[i].backupArrPosition;
            states.objects[i].center = [400, 80, 80];
            states.objects[i].rotate = [30, 0, 0];
            states.objects[i].translation = [150, 200, 100];
            states.objects[i].scale = [1,1,1];
        } else if (states.objects[i].name == "CUBEOCTAHEDRON") {
            console.log("cubehedron");
            states.objects[i].position = states.objects[i].backupArrPosition;
            states.objects[i].center = [80, 60, 0];
            states.objects[i].rotate = [90, 0, 0];
            states.objects[i].translation = [300, 300, 100];
            states.objects[i].scale = [1,1,1];   
        } else if (states.objects[i].name == "PYRAMID") {
            console.log("piramid");
            states.objects[i].position = states.objects[i].backupArrPosition;
            states.objects[i].center = [80, 60, 160/3];
            states.objects[i].rotate = [90, 0, 0];
            states.objects[i].translation = [150, 200, 100];
            states.objects[i].scale = [1,1,1];   
        }
    }

    states.drawAll();
}