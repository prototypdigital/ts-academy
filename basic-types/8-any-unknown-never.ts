/**
 * Any
 */
const any: any = { x: 12 };
const y: string = any;
const { x } = any;

/**
 * Unknown
 */
const unknown: unknown = { x: 12 };
const z: string = unknown;
const { x } = unknown;

/**
 * Never
 */
const never: never = null;

function assertNever(day: never): never {
  throw new Error(`${day} is Invalid`);
}

type Day =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';

function getDayMessage(day: Day) {
  switch (day) {
    case 'Monday':
      return 'I really hate it!';
    case 'Tuesday':
      return 'Week is still shitty!';
    case 'Wednesday':
      return 'Halfway there!';
    case 'Thursday':
      return `C'mon baby!`;
    case 'Friday':
      return 'Playstation here I come!';
    case 'Saturday':
      return 'Playstation here I come!';
    case 'Sunday':
      return 'Playstation here I come!';
    default:
      return assertNever(day);
  }
}
