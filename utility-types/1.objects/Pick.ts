type CarBrands = 'mazda' | 'audi' | 'bmw' | 'renault';

type FirstName = Pick<Person, 'firstName'>;

type PickingConstructorProperties = Pick<CarBrands, 'anchor'>;
