interface Settings {
  name: string;
  taxId: number;
}

interface User {
  firstName: string;
  lastName: string;
}

type State<T> = {
  isLoading: boolean;
  data: T;
  error: undefined;
};

export function createState<T>(data: T): State<T> {
  return {
    isLoading: false,
    error: undefined,
    data,
  };
}

const settings: Settings = {
  name: 'PROTOTYP',
  taxId: 69410380024,
};

const user: User = {
  firstName: 'John',
  lastName: 'Doe',
};

const settingsState = createState(settings);
const userState = createState(user);
