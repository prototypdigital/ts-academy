function extractProps(name: string, options: Record<string, unknown>) {
  return options[name];
}

type ExtractPropsFn = (
  name: string,
  options: Record<string, unknown>,
) => unknown;

type ExtractPropsFromFunction = Parameters<typeof extractProps>;
type ExtractPropsFromType = Parameters<ExtractPropsFn>;
