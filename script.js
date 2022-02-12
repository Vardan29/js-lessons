class Car {
    #motor = 3.6;
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    static getClassName() {
        this.name = 'Varujan';
    }
    initName() {
        this.ownName = this.name;
    }
    get motor() {
        return `${this.#motor}`;
    }

    set motor(x) {
        this.#motor += x;
    }
}

