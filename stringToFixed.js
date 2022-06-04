
let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(4)}`;
// const total1 = typeOf(total);
console.log(total);