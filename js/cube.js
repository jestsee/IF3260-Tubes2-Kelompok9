 class Cube {
    constructor() {
        this.name = "CUBE"
        this.center = [80, 60, 160/3]
        this.position = this.generatePosition()
        this.rotate = [90, 0, 0]
        this.translation = [150, 200, 100]
        this.scale = [1,1,1]
    }

    /**
     * 
     * @returns {array}
     * array yang menyimpan semua koordinat untuk pyramid
     */
    generatePosition() {
        // buat bikin cube
        var arrPosition = generateBlock(
            0,285,0,
            300,285,0,
            15);
        arrPosition.push(...generateBlock(
            0,0,0,
            300,0,0,
            15));
        arrPosition.push(...generateBlock(
            15,0,0,
            15,300,0,
            15));
        arrPosition.push(...generateBlock(
            285,0,0,
            285,300,0,
            15));
        arrPosition.push(...generateBlock(
            0,285,300,
            300,285,300,
            15))
        arrPosition.push(...generateBlock(
            0,0,300,
            300,0,300,
            15));
        arrPosition.push(...generateBlock(
            15,0,300,
            15,300,300,
            15));
        arrPosition.push(...generateBlock(
            285,0,300,
            285,300,300,
            15));

        arrPosition.push(...generateBlock(
            15,285,300,
            15,285,0,
            15
        ))
        arrPosition.push(...generateBlock(
            285,285,300,
            285,285,0,
            15
        ))
        arrPosition.push(...generateBlock(
            15,0,300,
            15,0,0,
            15
        ))
        arrPosition.push(...generateBlock(
            285,0,300,
            285,0,0,
            15
        ))

        return arrPosition;
    }

    /**
     * menggambar model pyramid berdasarkan atribut array posisi, rotasi
     * translasi dan scale
     */
    drawObj() {
        draw(this.position, this.rotate, this.translation, this.scale, this.center)
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