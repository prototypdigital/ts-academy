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

const authError: AppError = {
  type: 'auth',
  message: { code: 100, message: 'Could not authenticate users' },
};

const dbError: AppError = {
  type: 'database',
  shouldEmit: true,
  message: { code: 101, message: 'Could not save the item' },
};

const updateError: AppError = {
  type: 'update',
  shouldToast: true,
  message: {
    code: 102,
    message: 'jpalfbaiokjlfs',
  },
};

export {};
