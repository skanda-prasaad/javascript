const randomNum = new Promise(function(resolve, reject){
    setTimeout(function(){
        const random = Math.random();
        if(random > 0.5){
            resolve(random);
        }
        else{
            reject("value is too samll");
        }
    }, 2000);
})

randomNum
.then(function(result){
    console.log("promise is fulfilled, the value is : " , result);
})
.catch(function(error){
    console.log("promise is rejected");
})