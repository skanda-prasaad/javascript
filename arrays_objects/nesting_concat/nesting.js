let x;

const fruits = ["Apple", "kiwi" , "Orange"];

const veg = ["Tomato", "Carrot", "potato"];

// Nesting Arrays :-

// fruits.push(veg); // Nesiting of veg in fruits . i .e [ 'Apple', 'kiwi', 'Orange', [ 'Tomato', 'Carrot', 'potato' ] ]

const all = [fruits, veg] // Creating new varaible and nesting both arrays into it. i.e [
//     [ 'Apple', 'kiwi', 'Orange', [ 'Tomato', 'Carrot', 'potato' ] ],
//     [ 'Tomato', 'Carrot', 'potato' ]
//   ]

x = fruits.concat(veg) // concat two arrays. 

// flat() - Flatten an array
const arr = [1, 2, [3, 4, 5], 6, [7, 8]];
x = arr.flat();


// isArray() - Check is is an array
x = Array.isArray(fruits);

// from() - Create an array from an array like value
x = Array.from('12345');


// of() - Create an array from a set of values
const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c)


console.log(x);
