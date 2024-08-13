// Challenge 1 :-

function getCelcius(temp){
    cel = (temp - 32) * 5 / 9;
    return cel
}

// console.log(`The temperature is ${getCelcius(32)} \xB0C`);


//  Challenge 2 :-

function minMax(arr){
    const min = Math.min(...arr);
    const max = Math.max(...arr)
    
    return {
        min,
        max,
    }
}

console.log(minMax([1,3,2]))