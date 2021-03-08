interface Human {
  walk(): void;
  run(): void;
  drive(): void;
}

interface Dog {
  walk(): void;
  run(): void;
}

type Mammal = Human | Dog;

const mammal: Mammal = {
  walk: () => ({ type: 'run' }),
  run: () => ({ type: 'walk' }),
  drive: () => ({ type: 'drive' }),
};

mammal.drive();
