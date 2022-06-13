//Remove Duplicate
function removeDuplicate(element) {
    let unique = [];
    for (let i = 0; i < element.length; i++) {
        let item = element[i];

        if (unique.indexOf(item) == -1) {
            unique.push(item);
            // console.log(duplicate);
        }

    }
    return unique;
}

const data = [12, 13, 14, 12, 14, 36, 678, 36];
console.log(removeDuplicate(data));

//Find Duplicate

function findDuplicate(data) {
    let main = [];
    let duplicate = [];
    for (let i = 0; i < data.length; i++) {
        let element = data[i];
        // console.log(element);
        if (main.indexOf(element) == -1) {
            main.push(element);
        }
        else {
            duplicate.push(element);
        }
    }
    return {
        main,
        duplicate
    };
}

const array = [12, 13, 14, 12, 14, 36, 678, 36];
console.log(findDuplicate(array));