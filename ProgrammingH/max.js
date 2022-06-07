// Question: Find largest element.
// Question: Find smallest element.

//1.
const person1 = 2343;
const person2 = 1233;
const person3 = 1265;
const person4 = 7486;

const max = Math.max(person1, person2, person3, person4);
console.log(max);

//2. 
// function findLargest(p1, p2, p3, p4) {
//     if (p1 > p2 && p2 > p3) {
//         return p1;
//     }
//     else {
//         return p4;
//     }
// }

// const largest = findLargest(23, 15, 13, 45);
// console.log(largest);

//3. 
// function findLargest(maxi) {
//     const result = Math.max(...maxi);
//     console.log(result);

// }

// const largest = [12, 13, 42, 23, 43, 23, 15, 13, 45];
// findLargest(largest);

// console.log(largest);

//4.Smallest
function findLargest(mini) {
    const result = Math.min(...mini);
    console.log(result);

}

const smallest = [12, 13, 42, 23, 43, 23, 15, 13, 45];
findLargest(smallest);