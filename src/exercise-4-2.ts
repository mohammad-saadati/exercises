export function reverseArray<T>(arr: T[]): T[] {
  const reversedArray = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }

  return reversedArray;
}

console.log('reverseArray: ', reverseArray([1, "b", true, null]));
export function reverseArrayInPlace<T>(arr: T[]): T[] {
  for(let i = 0; i < Math.floor(arr.length / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }

  return arr;
}


console.log('reverseArrayInPlace: ', reverseArrayInPlace([1, "b", true, null]));
