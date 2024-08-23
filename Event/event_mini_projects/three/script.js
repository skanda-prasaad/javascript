const form = document.querySelector('form');

const inps = document.querySelectorAll('input[type="text"]');

form.addEventListener("submit",function(e){
    e.preventDefault();
    inps.forEach(function(elem) {
        if(elem.value === ''){
            alert('error !!')
        }
    })
})