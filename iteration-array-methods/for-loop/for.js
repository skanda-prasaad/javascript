// for(let i = 0; i <= 10; i++){
//     if(i == 6){
//         console.log("Yoo it's six"); 
//     }
//     else {
//         console.log(i);
//     } 
// }

// Nested loops :-

// for(let i = 1 ; i <= 10; i++){
//     console.log('Number '+i);
//     for(let j = 1 ; j <= i; j++){
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }

// Loop through array :-

const names = ["Alex" , "John" , "Noob", "Pro"];

for(let i = 0 ; i <= names.length - 1; i++){
    if(names[i] == "Pro"){
        console.log("He is god");
    }
    else {
        console.log(names[i]);
    }
}