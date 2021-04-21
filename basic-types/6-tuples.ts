/**
 * Array
 */
const arrayTest = [145, 'godina'];
const [arrayValue, arrayType] = arrayTest;

/**
 * Tuple is a specific array type with strictly defined number of parameters used for scoping array paremeters in order
 */
type TupleTest = [number, string];

/**
 * Tuple
 */
const tupleTest: TupleTest = [145, 'godina'];
const [value, type] = tupleTest;

export {};
