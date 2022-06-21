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

const johnDoe: PersonWithAddress = {
  firstName: 'John',
  lastName: 'Doe',
  address: {
    addressOne: 'Nigdjezemska 18',
  },
};

const janeDoe: Required<PersonWithAddress> = {
  firstName: 'Jane',
  lastName: 'Doe',
  address: {
    addressOne: 'Nigdjezemska 18',
  },
};

export {};
