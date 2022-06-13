//Requirement-4:-Perfect Friend, 5 digit of first word
const friends = ['Alia', 'Malia', 'Anamika', 'Salia', 'Sagorika', 'Dalia', 'Oni'];

function perfectFriend(friends) {
    let name = friends[0];
    for (let i = 0; i < friends.length; i++) {
        const element = friends[i];
        if (element.length == 5) {
            name = element;
            break
        };
    }
    return name;
}
const friendInput = perfectFriend(friends);
console.log(friendInput);

////Problem-Find the longest string
//Logic-1
var arr = [
    'first item',
    'second item is longer than the third one',
    'third longish item'
];

var lgth = 0;
var longest;

for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > lgth) {
        var lgth = arr[i].length;
        longest = arr[i];
    }
}

console.log(longest);

//Logic-2
function findLongestWord(array) {
    var longestWord = "";

    array.forEach(function (word) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });

    return longestWord;
}

var word = findLongestWord(["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]);
console.log(word); // result is "jumped"