type Movement = 'walking' | 'running' | 'driving' | 'swimming';

function geCurrentStatesForPerson<Name extends string>(
  name: Name,
): `${Name} is ${Movement}` {
  return `${name} is driving` as const;
}

const zoki = geCurrentStatesForPerson('Zoran');

export {};
