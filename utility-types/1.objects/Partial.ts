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

const john: PersonWithAddress = {
  firstName: 'John',
  lastName: 'Doe',
  address: {
    addressOne: 'Nigdjezemska 18',
  },
};

const jane: Partial<PersonWithAddress> = {
  firstName: 'Jane',
};

export {};
