// https://www.npmjs.com/package/assert-never

interface AuthError {
  type: 'auth';
  message: {
    code: 100;
    message: string;
  };
}

interface DbError {
  type: 'database';
  shouldEmit: boolean;
  message: {
    code: 101;
    message: string;
  };
}

interface UpdateError {
  type: 'update';
  shouldToast: boolean;
  message: {
    code: 102;
    message: string;
  };
}

type AppError = AuthError | DbError | UpdateError;

function assertNever(stuff: never): never {
  throw new Error(`${stuff} is an unexpected state`);
}

function errorLogger(err: AppError): string {
  switch (err.type) {
    case 'auth':
      return 'You shall not pass!';
    case 'database':
      return 'Database is ignoring you!';
    case 'update':
      return 'ijpdlkahlk';
  }
}

function errorLoggerWithAssertion(err: AppError) {
  switch (err.type) {
    case 'auth':
      return 'You shall not pass!';
    case 'database':
      return 'Database is ignoring you!';
    case 'update':
      return;
    default:
      assertNever(err);
  }
}

export {};
