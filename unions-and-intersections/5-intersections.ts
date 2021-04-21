type Robert = 'person' | 'pm';
type Sebastijan = 'person' | 'developer';

interface Person {
  firstName: string;
  lastName: string;
}

type SebaRobertion = Robert & Sebastijan;

interface Loggable {
  log: (message: string) => void;
  message: string;
}

interface Queryable {
  search: (query: string) => void;
  query: string;
}

interface Listable<T> {
  items: T[];
}

type ProposalState<T> = Loggable & Queryable & Listable<T>;

const state: ProposalState<Person> = {};

export {};
