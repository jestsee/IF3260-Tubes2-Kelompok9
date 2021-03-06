var cameraAngleRadians = 1;
var scaleValue = 1;
var target = [0, 0, 20];
var center = [0, 0, 0];
var up = [0, 1, 0];

/**
 * menggambar objek berdasarkan koordinat
 * arrPosition.length harus kelipatan 6
 * @param {array} arrPosition - array of coordinates [x1, y1, z1, x2, y2, z2, ...]
 * @param {array} arrRotate - rotation array [x, y, z]
 * @param {array} arrTranslation - translation array [x, y, z]
 * @param {array} arrScale - scale array [x, y, z]
 */

function turnOnShading() {
    shading = true;
}

function draw (arrPosition, arrRotate, arrTranslation, arrScale, arrCenter, fieldOfView, angleX, angleY, shadingA) {
    // look up where the vertex data needs to go.
    var positionLocation = gl.getAttribLocation(program, "a_position");
    var colorLocation = gl.getAttribLocation(program, "a_color");
    var normalLocation = gl.getAttribLocation(program, "a_normal");

    // lookup uniforms
    // var colorLocation = gl.getUniformLocation(program, "u_color");
    var matrixLocation = gl.getUniformLocation(program, "u_matrix");
    var projectionMatrix = gl.getUniformLocation(program, "u_projection");
    var normalMatrixLocation = gl.getUniformLocation(program, "u_normal");
    var shadingBool = gl.getUniformLocation(program, "u_shading");

    // default color
    var arrColor = generateColor(arrPosition.length/(6*18));
    // console.log(arrColor);

    var positionBuffer = gl.createBuffer();
    // Bind it to ARRAY_BUFFER (think of it as ARRAY_BUFFER = positionBuffer)
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    // Put geometry data into buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(arrPosition), gl.STATIC_DRAW);

    // translation, rotation, scaling
    var translation = arrTranslation;
    var rotation = [degToRad(arrRotate[0]), degToRad(arrRotate[1]), degToRad(arrRotate[2])];
    var scale = arrScale;
    // var color = [Math.random(), Math.random(), Math.random(), 1];

    // Set up the normals for the vertices, so that we can compute lighting.
    var normalBuffer = this.gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);

    resizeCanvasToDisplaySize(gl.canvas);

    // Tell WebGL how to convert from clip space to pixels
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    var vertexNormals = getVectorNormals(arrPosition);
    gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(vertexNormals),
                        this.gl.STATIC_DRAW);

    // Turn on culling. By default backfacing triangles
    // will be culled.
    gl.enable(gl.CULL_FACE);

    // Enable the depth buffer
    gl.enable(gl.DEPTH_TEST);

    // Tell it to use our program (pair of shaders)
    gl.useProgram(program);

    // Turn on the attribute
    gl.enableVertexAttribArray(positionLocation);

    // Bind the position buffer.
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
    var size = 3;          // 3 components per iteration
    var type = gl.FLOAT;   // the data is 32bit floats
    var normalize = false; // don't normalize the data
    var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
    var offset = 0;        // start at the beginning of the buffer
    gl.vertexAttribPointer(
        positionLocation, size, type, normalize, stride, offset);

    // Create a buffer for colors.
    var colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    // Put the colors in the buffer.
    gl.bufferData(gl.ARRAY_BUFFER, new Uint8Array(arrColor), gl.STATIC_DRAW);

    // Turn on the color attribute
    gl.enableVertexAttribArray(colorLocation);

    // Bind the color buffer.
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);

    // Tell the attribute how to get data out of colorBuffer (ARRAY_BUFFER)
    var size = 3;                 // 3 components per iteration
    var type = gl.UNSIGNED_BYTE;  // the data is 8bit unsigned values
    var normalize = true;         // normalize the data (convert from 0-255 to 0-1)
    var stride = 0;               // 0 = move forward size * sizeof(type) each iteration to get the next position
    var offset = 0;               // start at the beginning of the buffer
    gl.vertexAttribPointer(
        colorLocation, size, type, normalize, stride, offset);
    
    var size = 3;                 // 3 components per iteration
    var type = gl.FLOAT;  // the data is 8bit unsigned values
    var normalize = false;         // normalize the data (convert from 0-255 to 0-1)
    var stride = 0;               // 0 = move forward size * sizeof(type) each iteration to get the next position
    var offset = 0;               // start at the beginning of the buffer
    gl.bindBuffer(this.gl.ARRAY_BUFFER, normalBuffer);
    gl.vertexAttribPointer(
        normalLocation, size, type, normalize, stride, offset);
    gl.enableVertexAttribArray(normalLocation);

    var cameraMatrix = m4.identity();
    cameraMatrix = m4.lookAt(target, center, up);
    var viewMatrix = m4.inverse(cameraMatrix);

    viewMatrix = m4.xRotate(viewMatrix, 0);
    viewMatrix = m4.yRotate(viewMatrix, 0);
    viewMatrix = m4.zRotate(viewMatrix, 0);
    
    var matrix = m4.identity();
    matrix = m4.translate(matrix, translation[0], translation[1], translation[2]);
    matrix = m4.translate(matrix, arrCenter[0], arrCenter[1], arrCenter[2]);
    matrix = m4.scale(matrix, scale[0], scale[1], scale[2]); // harusnya diakhir
    matrix = m4.xRotate(matrix, rotation[0]);
    matrix = m4.yRotate(matrix, rotation[1]);
    matrix = m4.zRotate(matrix, rotation[2]);
    matrix = m4.translate(matrix, -arrCenter[0], -arrCenter[1], -arrCenter[2]);
    var modelViewMatrix = m4.multiply(viewMatrix, matrix);

    var normalMatrix = m4.inverse(modelViewMatrix);
        normalMatrix = m4.transpose(normalMatrix);

    console.log(normalMatrix);

    var matrixProjection = m4.identity();
    var aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
    var zNear = 1;
    var zFar = 2000;

    matrixProjection = m4.perspective(fieldOfView, aspect, zNear, zFar);
    
    const button = document.getElementById("perspectiveOption").value;
    const shade = document.getElementById("shadingOption").value;
    console.log(button);


    if (button === "perspective") {
        matrixProjection = m4.perspective(fieldOfView, aspect, zNear, zFar);
    } else if (button === "orthographic") {
        matrixProjection = m4.orthographic(matrixProjection, -1, 1, -1, 1, zNear, zFar);
    } else if (button === "oblique") {
        matrixProjection = m4.oblique(matrixProjection, -angleX, angleY);
    }
    gl.uniformMatrix4fv(projectionMatrix, false, matrixProjection);

    if (shade === "true") {
        shadingA = true;
    } else {
        shadingA = false;
    }
    // var viewProjectionMat = m4.multiply(matrixProjection, viewMatrix);
    gl.uniformMatrix4fv(matrixLocation, false, modelViewMatrix);
    gl.uniformMatrix4fv(projectionMatrix, false, matrixProjection);
    gl.uniformMatrix4fv(normalMatrixLocation, false, normalMatrix);
    gl.uniform1i(shadingBool, shadingA);
    
    // console.log(matrixProjection);
    // console.log(shade);


    // Draw the geometry.
    var primitiveType = gl.TRIANGLES;
    var offset = 0;
    var count = arrPosition.length;  // 6 triangles in the 'F', 3 points per triangle
    gl.drawArrays(primitiveType, offset, count);
}

function getVectorNormals(vPosition) {
    const n = vPosition.length;
    var vNormals = [];
    for (let i = 0; i < n; i += 12){
      const p1 = [vPosition[i], vPosition[i+1], vPosition[i+2]];
      const p2 = [vPosition[i+3], vPosition[i+4], vPosition[i+5]];
      const p3 = [vPosition[i+6], vPosition[i+7], vPosition[i+8]];
      const vec1 = subtractVectors(p2, p1);
      const vec2 = subtractVectors(p3, p1);
      const normalDirection = cross(vec1, vec2);
      const vecNormal  = normalize(normalDirection);
      for (let j = 0; j < 4; j++){
        vNormals = vNormals.concat(vecNormal);
      }
    }
    return vNormals;
  }
  