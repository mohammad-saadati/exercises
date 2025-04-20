const test = 100;
function scopeTest() {
    console.log(test)
}

// scopeTest()

// hoisted()

// function hoisted() {
//     console.log('funciton is hoisted')
// }


// function chicken(): Function {
//     return egg();
// }
// function egg() {
//     return chicken();
// }
// console.log(chicken() + " came first.");


function calc(a, b) {
    console.log( a + b )
}

calc(2)