const yearsOld = 24;
const lastName = 'Perić';
const dogName = 'Zvijer';

function getLastName() {
  return lastName;
}

/**
 * Template literal // preferred
 */
const fullName = `${firstName} ${lastName}`;
const fullNameAlt = `Pero ${lastName}`;
const fullNameFn = `Pero ${getLastName()}`;

/**
 * Normal string concatenation // Preferred sometimes.
 */
const fullNameConcat = 'Pero ' + lastName;
const concatWithFn = 'Pero ' + getLastName();

/**
 * Multiline
 * @description watch out for spaces in interpolated stuff.
 */
const longStringWithEverything = `
${firstName} ${lastName} is ${yearsOld} years old, 
lives with his mother and has a dog named ${dogName}
`;

const longNormal = firstName + ' ';
lastName +
  ' ' +
  'is ' +
  yearsOld +
  ' years old, lives with his mother and has a dog named ' +
  dogName;
