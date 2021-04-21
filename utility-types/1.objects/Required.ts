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
  age: 18,
  isActive: true,
  address: {
    addressOne: 'Nigdjezemska 18',
  },
};

const janeDoe: Required<PersonWithAddress> = {
  firstName: 'Jane',
  isActive: false,
  age: 25,
  address: {
    addressOne: 'Nigdjezemska 18',
  },
};

export {};
