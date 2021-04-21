interface Person {
  firstName: string;
  lastName: string;
}

type CarBrands = 'mazda' | 'audi' | 'bmw' | 'renault';

type CarType = 'sedan' | 'suv' | 'hatchback' | 'sportback' | 'crossover';

type NotMazda = Exclude<CarBrands, 'mazda'>;

type ExtractedCarType = Exclude<Person | CarType, Person>;

export {};
