interface TheInterface {
  firstName: string;
  middleName: string | undefined; // Razlika između middleName?: string i ovoga?
  lastName: string;
  readonly dateOfBirth: Date;
  run(): void;
  walk: () => void;
}

const theInterface: TheInterface = {
  dateOfBirth: new Date(),
  firstName: 'Anonimni',
  middleName: undefined,
  lastName: 'Anonimus',
  run(),
  walk: () => {
    console.log('hodam');
  },
};

theInterface.dateOfBirth = new Date();

theInterface.walk()
theInterface.run()
