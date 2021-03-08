type AllExceptFirstName = Omit<Person, 'firstName'>;

type OmittingConstructorProperties = Omit<CarBrands, 'anchor'>;
