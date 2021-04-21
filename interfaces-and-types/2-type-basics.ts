type CarType = 'sedan' | 'suv' | 'hatchback' | 'sportback' | 'crossover';

/**
 * Base type
 */
type CarAsType = {
  id: number;
  type: CarType;
  brand: string;
  model: string;
  year: number;
};

/**
 * Extended
 */
type RetailCarAsType = CarAsType & { sold: boolean };

export {};
