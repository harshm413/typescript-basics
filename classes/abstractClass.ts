abstract class Vehicle {
    public brand: string = '';
    protected model: string = '';
    private year: number = 0;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    public abstract startEngine(): void;

    public getInfo(): string {
        return this.brand + ' ' + this.model + ' ' + this.year;
    }
}

class Car extends Vehicle {
    private numberOfDoors: number;
    constructor(
        brand: string,
        model: string,
        year: number,
        numberOfDoors: number
    ) {
        super(brand, model, year);
        this.numberOfDoors = numberOfDoors;
    }

    public startEngine() {
        console.log('Car engine started.');
    }
    public getModel() {
        console.log(this.model);
    }
}

let myCar = new Car('Toyota', 'Camry', 2022, 4);
myCar.getModel();
console.log(myCar.brand);
console.log(myCar.getInfo());
myCar.startEngine();
