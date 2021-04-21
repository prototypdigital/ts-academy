type CarBrands = 'mazda' | 'audi' | 'bmw' | 'renault';

type CarResponse = CarBrands | undefined | null;

type NonNullableCarResponse = NonNullable<CarResponse>;

export {};
