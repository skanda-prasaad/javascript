const firstName = "Alex";
const lastName = "John";
const age = 20;

const person = {
    firstName,
    lastName,
    age,
}; /// There is no need to reasign the values if elements have same name i.e firstName = firstName.


// Destructuing :- 

const todo = {
    id : 1,
    title : "Destruct",
}

// const id = todo.id; // which is not required if we want to create id.
// we can use this instead :- 

const {
    id,
    title,
} = todo

// console.log(id , title);

// Destrucure of arrays :-

const numbers = [21,65,39,56,45];

// const [first,second] = numbers; /// gives first and second vlaues of the arrays.
const [first,second, ...rest] = numbers;

console.log(first , second ,...rest);
