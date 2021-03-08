type NotMazda = Exclude<CarBrands, 'mazda'>;

type ExtractedCarType = Exclude<Person | CarType, Person>;
