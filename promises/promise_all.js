// case 1 :-
// f1 -> resolve
// f2 -> resolve
// f3 -> resolve

const f1 = () => {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            const data = [1,2,3,4,5];
            resolve(data);
        },2000);
    })
}

const f2 = () => {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            const data = [6,7,8,9];
            resolve(data);
        },2000);
    })
}

const f3 = () => {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            const data = [11,12,34];
            resolve(data);
        },2000);
    })
}

Promise.all([
    f1(),
    f2(),
    f3(),
])
.then((result)=>{
    console.log(result);
})

// Case - 2 :-

// f4 -> resolve
// f5 -> reject 

const f4 = () => {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            const data = [6,7,8,9];
            resolve(data);
        },2000);
    })
}

const f5 = () => {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            reject("Data not found");
        },2000);
    })
}

Promise.all([
    f4(),
    f5(),
])
.then((reuslt) => {
    console.log(reuslt);
})
.catch((err) => {
    console.log("ERROR  : ", err);
})

////////////////// Promise.all works only if all promise are resolved.