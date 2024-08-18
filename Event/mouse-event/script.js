const btn = document.querySelector('button');

// btn.addEventListener('click',() => {
//     btn.innerText = "dbl clcik";
//     document.body.style.backgroundColor = "skyblue"
// })

btn.addEventListener('dblclick', () => {
    btn.innerText = "click";
    document.body.style.backgroundColor = 'white'
})

btn.addEventListener('contextmenu', () => {

}) // right click

btn.addEventListener('mouseup', () => {
    btn.innerText = "dbl clcik";
    document.body.style.backgroundColor = "skyblue"
 }) //scroll up 

//  btn.addEventListener('mouseover', () => {
//     btn.innerText = "dbl clcik";
//     document.body.style.backgroundColor = "skyblue"
//  }) // 

 btn.addEventListener('click', function(e) {
    console.log(e.target);
    e.target.style.backgroundColor = 'yellow'
    console.log(e.type);
    console.log(e.timeStamp);
    console.log(e.clientX);
    console.log(e.clientY);
    console.log(e.offsetX);
    console.log(e.offsetY);
    console.log(e.pageX);
    console.log(e.pageY);
 })

 btn.addEventListener('click', (e) => {
    document.querySelector('h1').textContent = `X :${e.clientX} Y :${e.clientY}`;
 })