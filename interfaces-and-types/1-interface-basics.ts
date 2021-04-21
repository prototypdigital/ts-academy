/**
 * Base interface
 */
interface Car {
  id: string;
  type: 'sedan' | 'suv' | 'hatchback' | 'sportback' | 'crossover';
  brand: string;
  model: string;
  year: number;
}

interface RetailCar extends Car {
  sold: boolean;
}

// const car: RetailCar = {};

/**
 * Declaration merging
 */
class Car {
  constructor(data: Car) {
    this.type = data.type;
    this.brand = data.brand;
    this.model = data.model;
    this.year = data.year;
  }
}

const typedObject: Car = {
  id: 'jasamuuid',
  brand: 'mazda',
  model: '3',
  type: 'sedan',
  year: 2020,
};

const classObject = new Car(typedObject);

console.log([typedObject]);
console.log([classObject]);

export {};
