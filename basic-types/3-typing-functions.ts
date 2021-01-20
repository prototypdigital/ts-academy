/**
 * @description Implementation of simple functions don't necessarily need a return type declaration
 */
function getPerson() {
  return person;
}

/**
 * @description When a result of a function is assigned to a dynamic variable, enforce the return type. Even if function changes, it will make sure that the app doesn't get broken or produce results that are notx expected.
 */
const currentPerson: Person = getPerson();
