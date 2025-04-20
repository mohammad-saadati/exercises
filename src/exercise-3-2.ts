export function isEven(num: number) {
  if (num < 0) return false;

  if (num === 0) {
    return true;
  } else if (num === 1) {
    return false;
  }

  return isEven(num - 2);
}

console.log(isEven(75));
