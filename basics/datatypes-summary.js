// ***** Primitive 

// 7 types :- strings , Number , boolean , null , undefined , Symbol , BigInt

const score = 100 
const isLoggedIn = true (boolean)
const outsideTemp = null (null)
let userEmail;


// ***** Reference ( non Primitive) :-

Array , Objects , Functions


const heroes =["spiderman", "batman"] (Array);

let myObj = {
    name:"skanda",
    age: 18,
}

let myFunction = function(){
    console.log("Hello World");
}

console.log(typeof (score));



//// ************ memory **********

// Stack (Primitive) , Heap (Non - Primitive) 


//eg for stack

let myName = "skanda"
let anotherName = myName
anotherName = "prasad"

console.log(myName);
console.log(anotherName);

//eg for heap 

let userone = {
    email:"useronegoogle.com",
    upi:"user.ybl"
}

let usertwo = userone

usertwo.email = "google.com"

console.log(usertwo.email);
console.log(userone.email);