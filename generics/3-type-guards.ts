interface Person {
  firstName: string;
  lastName: string;
}

interface Error {
  message: string;
}

function isPerson(data: Person | Error): data is Person {
  return Boolean((data as Person).firstName);
}

function test(data: Error | Person) {
  if (isPerson(data)) {
    data.firstName;
    return;
  }
}

const eerr: Error = { message: '' };
test(eerr);

export {};
