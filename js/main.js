// create new states
var states = new States();

// // create pyramid object
// var pyramid = new Pyramid()

// // add pyramid object to states
// states.addObject(pyramid);

// create cube object
var cube = new Cube()

// add pyramid object to states
states.addObject(cube);

// select first object as default selected object
states.selectedObj = states.objects[0]

// draw all object
states.drawAll();