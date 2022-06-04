const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

const result = (person.fullName());
const result1 = person.id;
console.log(result, 'is', result1);
