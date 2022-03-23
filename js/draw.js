var cameraAngleRadians = 1;
var scaleValue = 1;
/**
 * menggambar objek berdasarkan koordinat
 * arrPosition.length harus kelipatan 6
 * @param {array} arrPosition - array of coordinates [x1, y1, z1, x2, y2, z2, ...]
 * @param {array} arrRotate - rotation array [x, y, z]
 * @param {array} arrTranslation - translation array [x, y, z]
 * @param {array} arrScale - scale array [x, y, z]
 */
function draw (arrPosition, arrRotate, arrTranslation, arrScale, arrCenter, fieldOfView, angleX, angleY) {
    // look up where the vertex data needs to go.
    var positionLocation = gl.getAttribLocation(program, "a_position");
    var colorLocation = gl.getAttribLocation(program, "a_color");

    // lookup uniforms
    // var colorLocation = gl.getUniformLocation(program, "u_color");
    var matrixLocation = gl.getUniformLocation(program, "u_matrix");
    var projectionMatrix = gl.getUniformLocation(program, "u_projection");

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

    resizeCanvasToDisplaySize(gl.canvas);

    // Tell WebGL how to convert from clip space to pixels
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

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

    // var cameraMatrix =  m4.yRotation(degToRad(0));
    // cameraMatrix = m4.translate(cameraMatrix, 0, 0, 400 * 1.5); 
    // var viewMatrix = m4.inverse(cameraMatrix);

    var matrixProjection = m4.identity();
    var aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
    var zNear = 1;
    var zFar = 2000;

    matrixProjection = m4.perspective(fieldOfView, aspect, zNear, zFar);
    
    // Compute the matrices
    var matrix = m4.projection(gl.canvas.clientWidth, gl.canvas.clientHeight, 800);

    //======
    // Use matrix math to compute a position on a circle where
    // the camera is
    var radius = 200;
    var fPosition = [radius, 0, 0];
    var cameraMatrix = m4.yRotation(cameraAngleRadians);
    cameraMatrix = m4.translate(cameraMatrix, 0, 0, radius * 1.5);
    console.log(cameraMatrix);

    // Get the camera's position from the matrix we computed
    var cameraPosition = [
      cameraMatrix[12],
      cameraMatrix[13],
      cameraMatrix[14],
    ];

    var up = [0, 1, 0];

    // Compute the camera's matrix using look at.
    cameraMatrix = m4.lookAt(cameraPosition, fPosition, up);

    // Make a view matrix from the camera matrix
    var viewMatrix = m4.inverse(cameraMatrix);
    viewMatrix = m4.multiply(m4.scaling(scaleValue, scaleValue, scaleValue), viewMatrix)

    // Compute a view projection matrix
    matrix = m4.multiply(matrix, viewMatrix);

    //======
    
    matrix = m4.translate(matrix, translation[0], translation[1], translation[2]);
    matrix = m4.translate(matrix, arrCenter[0], arrCenter[1], arrCenter[2]);
    matrix = m4.scale(matrix, scale[0], scale[1], scale[2]); // harusnya diakhir
    matrix = m4.xRotate(matrix, rotation[0]);
    matrix = m4.yRotate(matrix, rotation[1]);
    matrix = m4.zRotate(matrix, rotation[2]);
    matrix = m4.translate(matrix, -arrCenter[0], -arrCenter[1], -arrCenter[2]);
    // Set the matrix.
    gl.uniformMatrix4fv(matrixLocation, false, matrix);
    gl.uniformMatrix4fv(projectionMatrix, false, matrixProjection);


    const button = document.getElementById("perspectiveOption").value;
    console.log(button);

    if (button === "perspective") {
        matrixProjection = m4.perspective(fieldOfView, aspect, zNear, zFar);
    } else if (button === "orthographic") {
        matrixProjection = m4.orthographic(matrixProjection, -1, 1, -1, 1, zNear, zFar);
    } else if (button === "oblique") {
        matrixProjection = m4.oblique(matrixProjection, -angleX, angleY);
    }
    // var viewProjectionMat = m4.multiply(matrixProjection, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrix, false, matrixProjection);
    
    console.log(matrixProjection);


    // Draw the geometry.
    var primitiveType = gl.TRIANGLES;
    var offset = 0;
    var count = arrPosition.length;  // 6 triangles in the 'F', 3 points per triangle
    gl.drawArrays(primitiveType, offset, count);
}