function selectObject() {
    var i = document.getElementById('object-list').value
    states.selectedObj = states.objects[i]
    states.selectedObj.setInitialSliderValue()
    console.log(states.selectedObj.name);
}

function save() {
    states.saveState()
}

function load() {
    var file = document.getElementById('myfile').files[0];
    if(file == null) {
        window.confirm("File untuk diunggah belum dipilih!")
        return
    }

    // create new state
    states = new States(); 
    var reader = new FileReader()
    reader.onload = function() {
        var fileContent = JSON.parse(reader.result);
  
        for(let i=0; i<fileContent.length; i++) {
            model = fileContent[i]
            if(model.name == "PYRAMID") {
                states.addObject(new Pyramid(model.rotate, model.translation, model.xScale))
            } else if(model.name == "CUBEOCTAHEDRON") {
                states.addObject(new CubeOctahedron(model.rotate, model.translation, model.xScale))
            } else if(model.name == "CUBE") {
                states.addObject(new Cube(model.rotate, model.translation, model.xScale))
            }
        }
        states.drawAll();
    };
    reader.readAsText(file);
}

/* fungsi-fungsi untuk handle rotasi, translasi dan scale */
function xRotation() {
    var slider = document.getElementById("xrotation");
    var val = document.getElementById("x-val-rot");
    val.innerHTML = slider.value;
    states.selectedObj.xRotate(slider.value);
    states.drawAll()
}

function yRotation() {
    var slider = document.getElementById("yrotation");
    var val = document.getElementById("y-val-rot");
    val.innerHTML = slider.value;
    states.selectedObj.yRotate(slider.value);
    states.drawAll()
}

function zRotation() {
    var slider = document.getElementById("zrotation");
    var val = document.getElementById("z-val-rot");
    val.innerHTML = slider.value;
    states.selectedObj.zRotate(slider.value);
    states.drawAll()
}

function fov() {
    var slider = document.getElementById("fov");
    states.selectedObj.setFov(degToRad(slider.value));
    states.drawAll()
}

function horizonAngle() {
    var slider = document.getElementById("horizon");
    states.selectedObj.setAngleX(slider.value);
    states.drawAll();
}

function verticalAngle() {
    var slider = document.getElementById("vertical");
    states.selectedObj.setAngleY(slider.value);
    states.drawAll();
}

function xTranslation() {
    var slider = document.getElementById("xtranslation");
    var val = document.getElementById("x-val-trans");
    val.innerHTML = slider.value;
    states.selectedObj.xTranslation(slider.value);
    states.drawAll()
}

function yTranslation() {
    var slider = document.getElementById("ytranslation");
    var val = document.getElementById("y-val-trans");
    val.innerHTML = slider.value;
    states.selectedObj.yTranslation(slider.value);
    states.drawAll()
}

function zTranslation() {
    var slider = document.getElementById("ztranslation");
    var val = document.getElementById("z-val-trans");
    val.innerHTML = slider.value;
    states.selectedObj.zTranslation(slider.value);
    states.drawAll()
}

function xScale() {
    var slider = document.getElementById("xscale");
    var val = document.getElementById("x-val-scale");
    val.innerHTML = slider.value/100;
    states.selectedObj.xScale(slider.value/100);
    states.drawAll()
}

function yScale() {
    var slider = document.getElementById("yscale");
    var val = document.getElementById("y-val-scale");
    val.innerHTML = slider.value/100;
    states.selectedObj.yScale(slider.value/100);
    states.drawAll()
}

function zScale() {
    var slider = document.getElementById("zscale");
    var val = document.getElementById("z-val-scale");
    val.innerHTML = slider.value/100;
    states.selectedObj.zScale(slider.value/100);
    states.drawAll()
}