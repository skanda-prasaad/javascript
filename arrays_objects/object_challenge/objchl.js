// Step 1 :-

const library = [{
    title : "Book1",
    author : "Sandy1",
    status : {
        own : true,
        reading : false,
        read : false,
    }
},
{
    title : "Book2",
    author : "Sandy2",
    status : {
        own : true,
        reading : false,
        read : false,
    }
},
{
    title : "Book3",
    author : "Sandy3",
    status : {
        own : true,
        reading : false,
        read : false,
    }
}]

// Step :- 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library);

// Step :- 3

const {title : firstBook} = library[0];

console.log(firstBook);

// Step :- 4

const str = JSON.stringify(library);
console.log(str);
