/**
 * Pyramid class
 */
 class CubeOctahedron{
    constructor(
        rotate = null, 
        translation = null, 
        scale = null,

    ) {
        this.name = "CUBEOCTAHEDRON";
        this.center = [80, 60, 0];
        this.position = this.generatePosition();
        this.fieldOfView = degToRad(60);
        this.angleX = -45;
        this.angleY = 45; 
        this.backupArrPosition = this.position.slice();
        this.shading = false;
        
        (!rotate) ? this.rotate = [90, 0, 0]: this.rotate = rotate;
        (!translation) ? this.translation = [0, 0, -800]: this.translation = translation;
        (!scale) ? this.scale = [1,1,1]: this.scale = scale;
    }

    /**
     * 
     * @returns {array}
     * array yang menyimpan semua koordinat untuk pyramid
     */
    generatePosition() {
        var arrPosition = generateBlock(
            0,0,0,
            160,0,0,
            8);
        
        arrPosition.push(...generateBlock(
            0,-8,0,
            0,128,0,
            8
        ))
        
        arrPosition.push(...generateBlock(
            160,-8,0,
            160,128,0,
            8
        ))
        
        arrPosition.push(...generateBlock(
            0,120,0,
            160,120,0,
            8
        ))
        
        
        arrPosition.push(...generateBlock(
            80,60,160,
            0,-8,0,
            8
        ))
        
        arrPosition.push(...generateBlock(
            80,60,160,
            160,-8,0,
            8
        ))
        
        arrPosition.push(...generateBlock(
            80,60,160,
            0,128,0,
            8
        ))
        
        arrPosition.push(...generateBlock(
            80,60,160,
            160,128,0,
            8
        ))

        arrPosition.push(...generateBlock(
            80,60,-160,
            160,-8,0,
            8
        ))

        arrPosition.push(...generateBlock(
            80,60,-160,
            0,-8,0,
            8
        ))

        arrPosition.push(...generateBlock(
            80,60,-160,
            160,128,0,
            8
        ))
        
        arrPosition.push(...generateBlock(
            80,60,-160,
            0,128,0,
            8
        ))

        arrPosition.push(...generateBlock(
            0,-8,0,
            160,128,0,
            8
        ))

        arrPosition.push(...generateBlock(
            160,-8,0,
            0,128,0,
            8
        ))

        arrPosition.push(...generateBlock(
            80,-8,0,
            80,128,0,
            8
        ))

        arrPosition.push(...generateBlock(
            160,0,160,
            160,0,0,
            8
        ))

        arrPosition.push(...generateBlock(
            0,0,160,
            0,0,0,
            8
        ))

        arrPosition.push(...generateBlock(
            0,120,160,
            0,120,0,
            8
        ))
        
        arrPosition.push(...generateBlock(
            160,120,160,
            160,120,0,
            8
        ))

        arrPosition.push(...generateBlock(
            160,0,-160,
            160,0,0,
            8
        ))

        arrPosition.push(...generateBlock(
            0,0,-160,
            0,0,0,
            8
        ))

        arrPosition.push(...generateBlock(
            0,120,-160,
            0,120,0,
            8
        ))
        
        arrPosition.push(...generateBlock(
            160,120,-160,
            160,120,0,
            8
        ))

        arrPosition.push(...generateBlock(
            160,-8,160,
            160,128,160,
            8
        ))

        arrPosition.push(...generateBlock(
            0,-8,160,
            0,128,160,
            8
        ))

        arrPosition.push(...generateBlock(
            -8,0,160,
            160,0,160,
            8
        ))

        arrPosition.push(...generateBlock(
            160,-8,160,
            0,128,160,
            8
        ))

        arrPosition.push(...generateBlock(
            0,-8,160,
            160,128,160,
            8
        ))

        arrPosition.push(...generateBlock(
            0,120,160,
            160,120,160,
            8
        ))

        arrPosition.push(...generateBlock(
            160,-8,-160,
            160,128,-160,
            8
        ))

        arrPosition.push(...generateBlock(
            0,-8,-160,
            0,128,-160,
            8
        ))

        arrPosition.push(...generateBlock(
            -8,0,-160,
            160,0,-160,
            8
        ))

        arrPosition.push(...generateBlock(
            160,-8,-160,
            0,128,-160,
            8
        ))

        arrPosition.push(...generateBlock(
            0,-8,-160,
            160,128,-160,
            8
        ))

        arrPosition.push(...generateBlock(
            -8,120,-160,
            168,120,-160,
            8
        ))


        return arrPosition
    }


    /**
     * menggambar model pyramid berdasarkan atribut array posisi, rotasi
     * translasi dan scale
     */
    drawObj() {
        draw(this.position, this.rotate, this.translation, this.scale, this.center, this.fieldOfView, this.angleX, this.angleY, this.shading);
    }

    /**
     * 
     * @param {number} n - n yang diperoleh dari slider 
     */
    xRotate(n) {
        this.rotate[0] = n
    }

    yRotate(n) {
        this.rotate[1] = n
    }

    zRotate(n) {
        this.rotate[2] = n
    }

    xTranslation(n) {
        this.translation[0] = n
    }

    yTranslation(n) {
        this.translation[1] = n
    }

    setFov(n) {
        this.fieldOfView = n
    }

    setAngleX(n) {
        this.angleX = n
    }

    setShading(n) {
        this.shading = n
    }

    setAngleY(n) {
        this.angleY = n
    }

    zTranslation(n) {
        this.translation[2] = n
    }

    xScale(n) {
        this.scale[0] = n
    }

    yScale(n) {
        this.scale[1] = n
    }

    zScale(n) {
        this.scale[2] = n
    }

    setInitialSliderValue() {
        var rx = document.getElementById('xrotation')
        rx.value = this.rotate[0]

        var ry = document.getElementById('yrotation')
        ry.value = this.rotate[1]

        var rz = document.getElementById('zrotation')
        rz.value = this.rotate[2]

        var tx = document.getElementById('xtranslation')
        tx.value = this.translation[0]

        var ty = document.getElementById('ytranslation')
        ty.value = this.translation[1]

        var tz = document.getElementById('ztranslation')
        tz.value = this.translation[2]

        var sx = document.getElementById('xscale')
        sx.value = this.scale[0] * 100

        var sy = document.getElementById('yscale')
        sy.value = this.scale[1] * 100

        var sz = document.getElementById('zscale')
        sz.value = this.scale[2] * 100
    }
}