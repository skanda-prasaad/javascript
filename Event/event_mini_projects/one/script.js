const btn = document.querySelector('button');

const para = document.querySelector('p');

btn.addEventListener('click',function() {
    para.textContent = "Changed";
})