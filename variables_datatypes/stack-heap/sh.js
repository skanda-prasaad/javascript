// Values are stored in stack.
const name = "John";
const age = "20";

// Refrence values are stored in heap.
const person = {
    firstName : "Alex",
    age : 22,
};
console.log(person);

let newName = name;
newName = "Noob";

let newPerson = person;
newPerson.firstName = "Changed"

console.log(name, newName);
console.log(person, newPerson);

