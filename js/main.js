// create new states
var states = new States();

// create pyramid object
var pyramid = new Pyramid();
var cubeOH = new CubeOctahedron();
var cube = new Cube();

// add pyramid object to states
states.addObject(cubeOH);
states.addObject(pyramid);
states.addObject(cube);

// select first object as default selected object
states.selectedObj = states.objects[0]

// draw all object
states.drawAll();

window.onload = function() {
    states.showSelectableObjects();
    var currentObj = states.selectedObj;
    currentObj.setInitialSliderValue();
}

// const oblique = document.getElementById("perspectiveOption").value;
// if (oblique === "oblique") {
//     document.getElementsByClassName("field").style.display = "block";
// }