/**
 * Cube class
 */
 class Cube {
    constructor(
        rotate = null, 
        translation = null, 
        scale = null,
    ) {
        this.name = "CUBE";
        this.center = [400, 80, 80];
        this.position = this.generatePosition();
        this.fieldOfView = degToRad(60);
        this.angleX = -45;
        this.angleY = 45;
        this.backupArrPosition = this.position.slice();
        this.shading = false;

        (!rotate) ? this.rotate = [30, 0, 0]: this.rotate = rotate;
        (!translation) ? this.translation = [-600, 0, -800]: this.translation = translation;
        (!scale) ? this.scale = [1,1,1]: this.scale = scale;
    }

    /**
     * 
     * @returns {array}
     * array yang menyimpan semua koordinat untuk cube
     */
    generatePosition() {

        // Bottom
        var arrPosition = generateBlock(
            480,0,0,
            320,0,0,
            8);
        
        arrPosition.push(...generateBlock(
            320,-8,0,
            320,168,0,
            8
        ))
        
        arrPosition.push(...generateBlock(
            480,-8,0,
            480,168,0,
            8
        ))
        
        arrPosition.push(...generateBlock(
            320,160,0,
            480,160,0,
            8
        ))

        // Tiang
        
        arrPosition.push(...generateBlock(
            320,0,0,
            320,0,160,
            8
        ))
        
        arrPosition.push(...generateBlock(
            480,0,0,
            480,0,160,
            8
        ))
        
        arrPosition.push(...generateBlock(
            480,160,0,
            480,160,160,
            8
        ))
        
        arrPosition.push(...generateBlock(
            320,160,0,
            320,160,160,
            8
        ))

        // Above
        arrPosition.push(...generateBlock(
            320,0,160,
            480,0,160,
            8
        ))
        
        arrPosition.push(...generateBlock(
            320,160,160,
            480,160,160,
            8
        ))
        
        arrPosition.push(...generateBlock(
            320,-8,160,
            320,168,160,
            8
        ))
        
        arrPosition.push(...generateBlock(
            480,-8,160,
            480,168,160,
            8
        ))


        return arrPosition;
    }

    /**
     * menggambar model cube berdasarkan atribut array posisi, rotasi
     * translasi dan scale
     */
    drawObj() {
        draw(this.position, this.rotate, this.translation, this.scale, this.center, this.fieldOfView, this.angleX, this.angleY, this.shading)
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

    zTranslation(n) {
        this.translation[2] = n
    }

    xScale(n) {
        this.scale[0] = n
    }

    setFov(n) {
        this.fieldOfView = n
    }

    setShading(n) {
        this.shading = n
    }

    setAngleX(n) {
        this.angleX = n
    }

    setAngleY(n) {
        this.angleY = n
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
        sx.value = this.scale[0]

        var sy = document.getElementById('yscale')
        sy.value = this.scale[1]

        var sz = document.getElementById('zscale')
        sz.value = this.scale[2]
    }
}