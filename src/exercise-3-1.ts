export function mimicMathMinFunction(a: number, b: number) {
    return a < b ? a : b;
}

const res = mimicMathMinFunction(10, 20)

console.log(res)