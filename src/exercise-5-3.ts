export function everyVersion1<T>(
  array: T[],
  test: (val: T) => boolean
): boolean {
  return !array.some((element) => !test(element));
}

console.log(everyVersion1([1, 3, 5], (n) => n < 10));

export function everyVersion2<T>(
  array: T[],
  test: (val: T) => boolean
): boolean {
  for (let item of array) {
    if (!test(item)) {
      return false;
    }
  }
  return true;
}

console.log(everyVersion2([2, 4, 16], n => n < 10));
console.log(everyVersion2([], n => n < 10));
