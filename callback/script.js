// allowed to call one function.

function sum(num1,num2,funToCall){
    result = num1 + num2;
    funToCall(result);
}

function displayResult(data){
    console.log("The sum is "+ data);
}

sum(1,2,displayResult);

// Second eg:-

