interface Person {
  firstName: string;
  lastName: string;
}

type FirstName = Pick<Person, 'firstName'>;

type CarBrands = 'mazda' | 'audi' | 'bmw' | 'renault';

type PickingConstructorProperties = Pick<CarBrands, ''>;

export {};
