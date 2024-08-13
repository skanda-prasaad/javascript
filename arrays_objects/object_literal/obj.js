let x;

const person = {
    fname : "Alex",
    age : 20,
    address : {
        street : '12421',
        city : "Blr",
    },
    hobbies : ["Dance", " Music" , "Gaming"],
};

// Accesing :- 

x = person.fname; // can use '.'
x = person["age"]; // can use [" "]
x = person.address.city;
x = person.hobbies[0];

person.fname = "New Name"; // can change value of element;

person.school = "blr school" // can add new element;

delete person.school; // can delete element

console.log(x);
