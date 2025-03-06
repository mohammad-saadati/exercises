function generateStarTriangle(iterations: number) {
  let str:string = '';

  // for(let i = 1; i <= 7; i++) {
  //   console.log('*'.repeat(i));
  // }

  for(let i = 1; i <= iterations; i++) {
    str += '*';
    console.log(str);
  }
}

generateStarTriangle(7)

export { generateStarTriangle };