/**
 * @description Interface types (preferred in most cases)
 */
interface Person {
  firstName: string;
  age: number;
  isActive: boolean;
}

/**
 * @description Type types
 */
type PersonAsType = {
  firstName: string;
  age: number;
  isActive: boolean;
};

/**
 * @description Interface assignment to an object. Assignment is explicit and enforces strictness.
 */
const person: Person = {
  firstName: '',
  age: 12,
  isActive: false,
  admin: true,
};

person.role = 'Developer';
person.age = 16;

/**
 * @description NEVER use casting when defining an object type. Casting is implicit.
 */
const castedPerson = {
  firstName: '',
  age: 45,
  isActive: false,
  admin: true,
} as Person;

castedPerson.role = 'Developer';
person.age = 16;

export {};
