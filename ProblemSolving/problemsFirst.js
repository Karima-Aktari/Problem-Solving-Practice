
// problem task requirement bellow

/* 
write a function -
1 I need a function where traveling will have a calculation
2 This calculation will depend on the distance
3 15 rupees per kilometer for the first 90 kilometers
4 and 12 rupees per kilometer for the next 120 kilometers
5 and 8 rupees per kilometer for the next kilometers
6 (optional) if traveling more than 500 kilometers you give a discount of 3% 
*/
//Problem-1
function travelling(km) {
    const cost1 = (90 * 15);
    const cost2 = (120 * 12);
    const cost3 = (km - (90 + 120)) * 8;
    let totalCost = cost1 + cost2 + cost3;
    console.log(totalCost);

    if (km > 500) {
        totalCost = totalCost - (totalCost * .03);
    }
    return Math.round(totalCost);

}

const kilometers = travelling(550);
console.log(kilometers);