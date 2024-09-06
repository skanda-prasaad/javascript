function evenNumber(value, delay){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            if(value % 2 == 0){
                resolve(value);
            }
            else{
                reject(new Error ("Value is not even"));
            }
        },delay);
    })
}

evenNumber(6,2000).then(function(result) {
    console.log("Reult with even number : ", result);
    return evenNumber(7, 2000);
}).then(function(result){
    console.log("Result with value : ", result);
}).catch(function(error) {
    console.log("error : ", error);
})