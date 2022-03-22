/* fungsi-fungsi untuk handle camera angle, zoom, dan view */
function cameraAngle() {
    var pi = Math.PI;
    let value = document.getElementById('cameraAngle').value;
    value = degToRad(value);

    let move = value - oldValueMove;

    matrix = multiply(yRotation(move), matrix);
    for(var i = 0; i<objects.length; i++){
        draw(objects[i].projMatrix, objects[i].modelMatrix, objects[i].offset, objects[i].end);  
    }

    oldValueMove = value;
}

function zoomIn() {
    matrix = multiply(scale(1.1, 1.1, 1.1), matrix);
    for(var i = 0; i<objects.length; i++){
        draw(objects[i].projMatrix, objects[i].modelMatrix, objects[i].offset, objects[i].end);  
    }
}

function zoomOut() {
    view_matrix = multiply(scale(0.9, 0.9, 0.9), view_matrix);
    for(var i = 0; i<objects.length; i++){
        draw(objects[i].projMatrix, objects[i].modelMatrix, objects[i].offset, objects[i].end);  
    }
}

function resetView(){

}