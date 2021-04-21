interface Person {
  firstName: string;
  lastName: string;
}

type CarBrands = 'mazda' | 'audi' | 'bmw' | 'renault';

type CarType = 'sedan' | 'suv' | 'hatchback' | 'sportback' | 'crossover';

type Mazda = Extract<CarBrands, 'mazda'>;

type ExtractedPerson = Exclude<Person | CarType, Person>;

export {};
