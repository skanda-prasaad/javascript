const usernameInput = document.querySelector('#username');
const paragraph = document.querySelector('p');


// let inputValue
// usernameInput.addEventListener('input', (e) =>{
//     paragraph.innerText = e.target.value;
//     console.log(e.target.value);
//     inputValue = e.target.value;
//     // console.log("input click");   
// } )

usernameInput.addEventListener('change', (e) => {
    console.log(e.target.value);
})