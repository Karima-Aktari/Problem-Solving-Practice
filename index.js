const arrr = [23, 44, 53, 21, 22, 87, 10];
let sum = 0;
for (let i = 0; i < arrr.length; i++) {

  sum = sum + arrr[i];
}
// console.log(sum);

function getAnArraySum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}
const funcArray = [234, 516, 17, 450, 560, 178];
const sumArray = getAnArraySum(funcArray);
// console.log(sumArray);


// Sum of two array
function towArraySum(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < arr1.length && arr2.length; i++) {
    sum = arr1[i] + arr2[i];
    // console.log(sum);
  }
}

const a = [34, 56, 7, 7];
const b = [10, 20, 30, 40, 88];
towArraySum(a, b);

// Leap year
function isLeapYear(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return console.log(year, "this is leap year");
  } else {
    return console.log(year, "this is not leap year");
  }
}

isLeapYear(2012);

const array = [12, 32, 10, 13, 54, 12, 33, 54, 33];
let removeDup = [];
let duplicate = [];
for (let i = 0; i < array.length; i++) {
  if (removeDup.indexOf(array[i]) === -1) {
    removeDup.push(array[i]);
  } else {
    duplicate.push(array[i]);
    // console.log("duplicate number is", duplicate);
  }
}
// console.log(removeDup);

// Code by MD YEAMIN

// const arr = [
//   103, "this", 49, "is", 33, "a", 19, "javascript", 54, "language of", 87, "programs"
// ];
// let str = [""];
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "number") {
//     continue;
//   } else {
//     str = str + arr[i] + " ";
//   }
//   console.log(arr[i]);
// }
// console.log(str);

const arr = [
  103,
  "this",
  49,
  "is",
  33,
  "a",
  19,
  "javascript",
  54,
  87,
  "programs"
];
let str = [""];
let num = [];
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
    num.push(arr[i]);
  } else {
    str = str + arr[i] + " ";
  }
}
// console.log(num);
// console.log(str);


// global scope
const myGlobal = 10;

const oppsGlobal = 7;
function func() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += " Global is " + myGlobal;
  }
  if (typeof oppsGlobal != "undefined") {
    output += " oppsGlobal is " + oppsGlobal;
  }
  // console.log(output);
}


func();

//
function travelingDistanceCostCalculate(kilometer) {
  let totalCost = 0;
  let discount = 0;

  const first90Kilo = 15;
  const next120Kilo = 12;
  const afterKilo = 8;

  const costingForFirst90Kilos = 90 * first90Kilo;
  const costingForNext120Kilos = 120 * next120Kilo;
  const costingFor210Kilo = costingForFirst90Kilos + costingForNext120Kilos;


  if (kilometer <= 90 && kilometer > 0) {
    totalCost = costingForFirst90Kilos;
  }

  else if (kilometer <= 120 && kilometer > 0) {
    totalCost = (kilometer - 90) * next120Kilo + costingForFirst90Kilos;

  }

  else {
    totalCost = (kilometer - 210) * afterKilo + costingFor210Kilo;
    if (kilometer > 500) {
      discount = ((3 / 100) * totalCost)
      totalCost = totalCost - discount;
      console.log("you give discount", Math.round(discount));
    }
  }
  return Math.round(totalCost);
}

const travelingArea = travelingDistanceCostCalculate(550);

console.log(`${travelingArea} you give discount`);

