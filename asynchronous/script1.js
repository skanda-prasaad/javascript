function Findsum(n){
    let sum = 0;
    for(i=0;i<n;i++){
        sum += i;
    }
    return sum;
}

function findSumOf100(){
    console.log(Findsum(100));
}

setTimeout(findSumOf100,1000);
console.log("Hello World");


