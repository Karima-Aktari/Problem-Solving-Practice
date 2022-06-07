
let first = [12, 21, 23, 11, 24, 45];

for (let i = 0; i < first.length; i++) {
    let result = first[i];
    console.log(result); //element
    console.log(i); //index
}

//2.

function loop(element) {

    for (let i = 0; i < element.length; i++) {
        let result1 = fruits[i];
        console.log(result1);

    }

}
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const outPut = loop(fruits);


//5. Math.random() method return multipe number in multiple time between 0 to 1;
for (let i = 0; i <= 36; i++) {
    const outPut5 = Math.random();
    const outPut6 = Math.random(outPut5) * 10;
    const outPut7 = Math.round(outPut6);
    console.log(outPut5);
    console.log(outPut6);
    console.log(outPut7);
}
