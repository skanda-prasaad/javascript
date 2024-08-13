const x = 100;

console.log(x , "in global");

function run(){
    console.log(x , "in function");  
} // x can be used in fuunction.

if(true){
    console.log(x , "in block");
}

function add () {
    const x = 10;
    const y = 20;
    console.log(x+y);
}// x which is inside add is overshadowing global scope