//First
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.push("Lemon"); //Logic-1
console.log(fruits);

fruits[fruits.length] = "Papaya"; //Logic-2
console.log(fruits);

fruits[6] = "Lichi";//Logic-3
console.log(fruits);

console.log(fruits.length);

const type = typeof fruits;
console.log(type);

//concat() method;

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const person = arr1.concat(arr2, arr3);
console.log(person);

// const max = Math.max(fruits.length);
// console.log(max);

const arr = [1, 2, 3];
const max = Math.max(...arr);
console.log(max);
