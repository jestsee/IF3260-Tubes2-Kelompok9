/**
 * Pyramid class
 */
 class CubeOctahedron{
    constructor() {
        this.name = "CUBEOCTAHEDRON"
        this.position = this.generatePosition()
        this.rotate = [0, 0, 0]
        this.translation = [150, 200, 100]
        this.scale = [1,1,1]
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