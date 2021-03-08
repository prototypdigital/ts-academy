interface Bird {
  (data: { species: string }): Bird;
  fly: (x: number, y: number) => void;
  readonly species: string;
  canFly: boolean;
}

type BirdConstructorParams = Parameters<Bird>;
