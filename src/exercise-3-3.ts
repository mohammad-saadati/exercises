export function countChar(str: string, char: string) {
  let count = 0;
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }

  return count;
}

console.log(countChar("template to be Tested", "T"));
