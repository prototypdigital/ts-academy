const readonlyJane: Readonly<PersonWithAddress> = {
  firstName: 'Jane',
  isActive: false,
  age: 18,
  address: {
    addressOne: 'Nigdjezemska 18',
  },
};

const readonlyPartialJane: Readonly<Partial<PersonWithAddress>> = {
  firstName: 'Jane',
  address: {
    addressOne: 'Nigdjezemska 18',
  },
};

readonlyJane.firstName = 'John';
