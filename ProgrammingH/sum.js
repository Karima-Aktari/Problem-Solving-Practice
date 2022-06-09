function numTotal(elements) {
    let total = 0;
    for (let i = 0; i < elements.length; i++) {
        let numbers = elements[i];
        total = total + numbers;
        // console.log(total);  //Loop kore total return kore
    }
    return total; //total return kore
}

const numArray = [23, 12, 56, 43, 24,];
const totalNumber = numTotal(numArray);
console.log(totalNumber);