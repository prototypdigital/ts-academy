interface Person {
  firstName: string;
  lastName: string;
}

type AllExceptFirstName = Omit<Person, 'firstName'>;

type CarBrands = 'mazda' | 'audi' | 'bmw' | 'renault';

type OmittingConstructorProperties = Omit<CarBrands, 'anchor'>;

export {};
