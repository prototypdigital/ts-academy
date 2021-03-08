// https://www.npmjs.com/package/assert-never

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

function assertNever(stuff: never): never {
  throw new Error(`${stuff} is an unexpected state`);
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
