export class MultiplicatorUnitFailure extends Error {
  constructor(message: string) {
    super(message);
    this.name = "MultiplicatorUnitFailure";
  }
}

export function primitiveMultiply(a: number, b: number): number {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

export function reliableMultiply(a: number, b: number): number {
  while (true) {
    try {
      return primitiveMultiply(a, b);
    } catch (e) {
      if (e instanceof MultiplicatorUnitFailure) {
        continue;
      }
      throw e;
    }
  }
}
