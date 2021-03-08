type StringUnion = 'a' | 'b';
type StringUnionFail = string | StringUnion;

const stringUnion: StringUnion = 'a';
