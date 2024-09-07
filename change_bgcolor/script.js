const randomClr = function(){
    let hex = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        color = color + hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

let intervalId;
let displayColor;
const startChangeColor = function(){
    intervalId = setInterval(randomColorGen, 1500);
    function randomColorGen(){
        displayColor = randomClr();
        document.body.style.backgroundColor = displayColor;
    }
}

const stopChangeColor = function(){
    clearInterval(intervalId);
    alert('The current color is : '+ displayColor);
}

document.querySelector('#btn1').addEventListener('click', startChangeColor);

document.querySelector('#btn2').addEventListener('click', stopChangeColor);

