type Mazda = Extract<CarBrands, 'mazda'>;

type ExtractedPerson = Exclude<Person | CarType, Person>;
