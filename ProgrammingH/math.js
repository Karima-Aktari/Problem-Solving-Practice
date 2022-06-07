
const myNumber = -3456.557;

//1. Math.abs() Method;_ Negative/Positive can be anything, return positive;
const outPut1 = Math.abs(myNumber);
console.log(outPut1);

//2. Math.ceil() method return a full highest number;
const outPut2 = Math.ceil(outPut1);
console.log(outPut2);

//3. Math.floor method return a full lowest number;
const outPut3 = Math.floor(outPut1);
console.log(outPut3)

//4. Math.round() method return closest full number without taking the number after decimal(.);
const outPut4 = Math.round(outPut1);
console.log(outPut4);

//5. Math.random() method return multipe number in multiple time between 0 to 1;
const outPut5 = Math.random(outPut1);
const outPut6 = Math.random(outPut1) * 10;
const outPut7 = Math.round(outPut6);
console.log(outPut5);
console.log(outPut6);
console.log(outPut7);



// for (let i = 0; i <= 36; i++) {
//     const outPut5 = Math.random();
//     const outPut6 = Math.random(outPut5) * 10;
//     const outPut7 = Math.round(outPut6);
//     console.log(outPut5);
//     console.log(outPut6);
//     console.log(outPut7);
// }
