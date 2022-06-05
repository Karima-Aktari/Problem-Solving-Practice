//1. toString();
let x = 594;
const y = x.toString();
// console.log(y);

const z = typeof (y);
// console.log(z);

//2. toExponential();
let a = 45.54;

let b = a.toExponential(1);
// console.log(b);

//3. toFixed();
let e = 9.76432;
const f = e.toFixed();
console.log(typeof (f));
// console.log(e.toFixed(2));
// console.log(e.toFixed(5));


//4. toPrecision();
const g = e.toPrecision(2);
// console.log(g);
// console.log(typeof (g));

// 5. Number ();

let h = (true);
let h1 = (false);
let h2 = ("25");
let h3 = ("24.678");
console.log(Number(h));
console.log(Number(h1));
console.log(Number(h2));
console.log(Number(h3));

let h4 = new Date("2017-09-30");
console.log(Number(h4));
console.log(h4);
