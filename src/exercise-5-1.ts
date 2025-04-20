export function flattenArrays<T>(arrays: T[][]): T[] {
  return arrays.reduce((result, current) => result.concat(current), []);
}

console.log(flattenArrays([[1, 2, 3], [4, 5], [6]]));
console.log(flattenArrays([['1', '2', 3], [4, 5], [6]]));
