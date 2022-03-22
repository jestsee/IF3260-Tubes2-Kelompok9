/**
 * State class
 * menyimpan semua objek yang ada dalam array of object
 * menyimpan objek yang sedang dipilih
 */
class States {

    constructor() {
        this.objects = []; // simpan array of object vertices
        this.selectedObj = null;
    }

    /**
     * menggambar semua objek yang tersimpan
     * objek yang tersimpan memiliki method
     * drawObj untuk dipanggil
     */
    drawAll() {
        for (let i=0; i < this.objects.length; i++) {
            this.objects[i].drawObj()
        }
    }

    /**
     * 
     * @param {object} object - menyimpan objek baru
     * menambahkan objek baru ke array of object 
     */
    addObject(object) {
        this.objects.push(object);
    }

    showSelectableObjects() {
        var select = document.getElementById('object-list')
        for (let i=0; i<this.objects.length; i++) {
            var opt = document.createElement('option');
            opt.value = i;
            opt.innerHTML = this.objects[i].name.toLowerCase();
            select.appendChild(opt);
        }
    }
}