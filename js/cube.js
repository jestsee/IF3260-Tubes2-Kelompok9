/**
 * Cube class
 */
 class Cube {
    constructor() {
        this.name = "CUBE"
        this.position = this.generatePosition()
        this.rotate = [0, 0, 0]
        this.translation = [150, 200, 100]
        this.scale = [1,1,1]
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
            320,0,0,
            320,160,0,
            8
        ))
        
        arrPosition.push(...generateBlock(
            480,0,0,
            480,160,0,
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
            320,0,160,
            320,160,160,
            8
        ))
        
        arrPosition.push(...generateBlock(
            480,0,160,
            480,160,160,
            8
        ))

        return arrPosition;
    }

    /**
     * menggambar model cube berdasarkan atribut array posisi, rotasi
     * translasi dan scale
     */
    drawObj() {
        draw(this.position, this.rotate, this.translation, this.scale)
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

    yScale(n) {
        this.scale[1] = n
    }

    zScale(n) {
        this.scale[2] = n
    }
}