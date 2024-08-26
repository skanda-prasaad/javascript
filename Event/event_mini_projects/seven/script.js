let prog = document.querySelector('#progress');
let h3 = document.querySelector('h3');
let count = 0;

let int = setInterval(function(){
    if(count === 100){
        h3.style.opacity = 1;
        clearInterval(int);
    }
    count++;
    prog.style.width = count +'%';
},30);