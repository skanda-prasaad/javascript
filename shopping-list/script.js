const itemForm = document.querySelector('#item-form');

const itemInput = document.getElementById('item-input');

const itemList = document.getElementById('item-list');

itemForm.addEventListener('submit',function(e){
    e.preventDefault();
    let inputValue = itemInput.value;
    if(inputValue === ''){
        alert("Enter valid input");
        return;
    }
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(inputValue));

    const button = createButton('remove-item btn-link text-red');

    li.appendChild(button);
    itemList.appendChild(li);
})

function createButton(classes) {
    const btn = document.createElement('button');
    btn.className = classes;
    const i = createIcon("fa-solid fa-xmark");
    btn.appendChild(i);
    return btn;
}

function createIcon(classes){
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}