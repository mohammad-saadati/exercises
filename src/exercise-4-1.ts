export function sum(arr: number[]): number {
  let sum = 0;

  for (let num of arr) sum += num;

  return sum;
}

console.log("sum: ", sum([1, -1, 0, 4]));
export function range(start: number, end: number, step: number = 1): number[] {
  let temp = [];

  let curr = start;

  if (start > end) {
    while (curr >= end) {
      temp.push(curr);
      curr += step;
    }
  } else {
    while (curr <= end) {
      temp.push(curr);
      curr += step;
    }
  }

  return temp;
}

console.log("range: ", range(5, 2, -1));
console.log("range: ", range(1, 10));
console.log("range: ", range(1, 10, 2));

console.log(sum(range(1, 10)));
