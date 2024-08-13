let x;

const arr = [21,59,68,64];

arr.push(200); // Add value at end

arr.pop(); // remove value from end

arr.unshift(52)// Add value at [0]

arr.shift()// Remove value at [0]

// arr.reverse() // to reverse the array

x = arr.includes(68) // true if exists

x = arr.indexOf(59); // gives the index value

x = arr.indexOf(9999) // gives -1 if it's not there

// x = arr.slice(1,3) // includes the first term and doesn't include last term.    It does not change original array

// x = arr.splice(1,3) // includes last  term and changes original array

console.log(x);
