// create new states
var states = new States();

// create pyramid object
var pyramid = new Pyramid();
var cubeOH = new CubeOctahedron();

// add pyramid object to states
states.addObject(cubeOH);
states.addObject(pyramid);

// select first object as default selected object
states.selectedObj = states.objects[0]

// draw all object
states.drawAll();

window.onload = function() {
    states.showSelectableObjects();
    var currentObj = states.selectedObj;
    currentObj.setInitialSliderValue();

    // display initial slider value
    xRotation(); yRotation(); zRotation();
    xTranslation(); yTranslation(); zTranslation();
    xScale(); yScale(); zScale();
}