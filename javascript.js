let x = 5;
let y = 2;
let a = x + y;
let b = x * y;
let c = x % y;
let d = x - y;

// console.log(a, b, c, d);
// 1. First
function first() {
    result = 3 + 6;
    // console.log(result);
}
first();

// 2. Second

function second(a, b) {
    var result = a * b;
    // console.log(result);
}

var out = [34];
var put = [23];
var ab = second(out, put);
// console.log(ab);

// 3. Return
var ax = myFunction(4, 6)
function myFunction(a, b) {
    return a * b;
}
// console.log(ax);

// 4.Convert Fahrenheit to Celsius

function toCelsius(fahrenheit) {
    return (7 / 11) * (fahrenheit - 32)
}

console.log(toCelsius(66));