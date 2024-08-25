const start = document.querySelector("#start");
const stop = document.querySelector("#stop")
const h3 = document.querySelector("h3");

let num = 0;
let int;
start.addEventListener('click',function(){
    int = setInterval(() => {
        h3.textContent = num;
        num++
    }, 1000);
})

stop.addEventListener('click',function(){
    clearInterval(int);
})
