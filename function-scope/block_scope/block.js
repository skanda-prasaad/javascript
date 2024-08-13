const x = 100;

if (true) {
    const  y = 20;
    console.log(x+y);
}
// console.log(x+y) is not possible.

// diff between var and let :-
 
// var is not block scope, but it's a function scope.
// var is added to window objects.

if (true) {
    const x = 10;
    let y = 20;
    var z = 30;
}

console.log(x); // error
console.log(x); // error
console.log(z); // 30
