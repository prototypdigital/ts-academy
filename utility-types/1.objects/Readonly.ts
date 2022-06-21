interface Person {
  firstName: string;
  lastName: string;
}

interface PersonWithAddress extends Person {
  address: {
    addressOne: string;
    addressTwo?: string;
  };
}

const readonlyJane: Readonly<PersonWithAddress> = {
  firstName: 'Jane',
  lastName: 'Doe',
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

export {};
