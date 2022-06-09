const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

// const result = (person.fullName());
// const result1 = person.id;
// console.log(result, 'is', result1);

const result = person.fullName() + " " + "is " + person.id;
console.log(result);

//Logic-1
const st = {
    name: "bla",
    birthYear: 1990,
    job: "stupid",

    age: function () {
        return 2022 - this.birthYear
    }
}

console.log(st.age());

//Logic-2
const person1 = {
    firstName: 'Karima',
    lastName: 'Aktari',
    birthYear: 1941,
    job: 'coding-student',

    callAge: function () {
        this.age = 2545 - this.birthYear;
        return this.age;
    }
}

person1.callAge()
console.log(person1.age);
console.log(person1.callAge());