function getDateAsUnixTimestamp(date: Date) {
  return +date;
}

type GetDateAsUnixTimestampFn = (date: Date) => number;

type ExtractPropsReturnTypeFromFn = ReturnType<typeof getDateAsUnixTimestamp>;
type ExtractPropsReturnTypeFromFnType = ReturnType<GetDateAsUnixTimestampFn>;

export {};
