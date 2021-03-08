interface PersonWithAddress extends Person {
  address: {
    addressOne: string;
    addressTwo?: string;
  };
}

const john: PersonWithAddress = {
  firstName: 'John',
  age: 18,
  isActive: true,
  address: {
    addressOne: 'Nigdjezemska 18',
  },
};

const jane: Partial<PersonWithAddress> = {
  firstName: 'Jane',
  isActive: false,
};
