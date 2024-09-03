document.addEventListener('DOMContentLoaded', function () {
    const itemsFromStorage = getFromStorage();
    itemList.innerHTML = ''; // Clear the list initially
    itemsFromStorage.forEach(item => addItemToDom(item)); // Add items from local storage to the DOM
    checkUI(); // Initial UI check after loading items from storage
  });
  
  const itemForm = document.querySelector('#item-form');
  const itemInput = document.getElementById('item-input');
  const itemList = document.getElementById('item-list');
  const clrBtn = document.getElementById('clear');
  const itemFilter = document.getElementById('filter');
  
  itemForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let inputValue = itemInput.value;
    if (inputValue === '') {
      alert("Enter valid input");
      return;
    }
  
    addItemToDom(inputValue);
    addItemToStorage(inputValue);
    itemInput.value = '';
    checkUI();
  });
  
  function createButton(classes) {
    const btn = document.createElement('button');
    btn.className = classes;
    const i = createIcon("fa-solid fa-xmark");
    btn.appendChild(i);
    return btn;
  }
  
  function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
  }
  
  function addItemToDom(item) {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(item));
    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);
    li.style.display = 'none'; // Initially hide the list item
    itemList.appendChild(li);
  }
  
  itemList.addEventListener('click', function (e) {
    if (e.target.parentElement.classList.contains('remove-item')) {
      const itemToRemove = e.target.parentElement.parentElement;
      removeItemFromStorage(itemToRemove.firstChild.textContent.trim());
      itemToRemove.remove();
      checkUI();
    }
  });
  
  clrBtn.addEventListener('click', function () {
    while (itemList.firstChild) {
      itemList.firstChild.remove();
    }
    localStorage.removeItem('items');
    checkUI();
  });
  
  itemFilter.addEventListener('input', function (e) {
    const text = e.target.value.toLowerCase();
    const items = itemList.querySelectorAll('li');
  
    items.forEach((item) => {
      const itemName = item.firstChild.textContent.toLowerCase();
      if (itemName.indexOf(text) != -1) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  });
  
  function checkUI() {
    const items = itemList.querySelectorAll('li');
    if (items.length === 0) {
      clrBtn.style.display = "none";
      itemFilter.style.display = "none";
    } else {
      clrBtn.style.display = "block";
      itemFilter.style.display = "block";
      items.forEach(item => item.style.display = 'flex'); // Show items when there are items in the list
    }
  }
  
  function addItemToStorage(item) {
    const itemsFromStorage = getFromStorage();
    itemsFromStorage.push(item);
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
  }
  
  function getFromStorage() {
    let itemsFromStorage;
    if (localStorage.getItem('items') == null) {
      itemsFromStorage = [];
    } else {
      itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }
    return itemsFromStorage;
  }
  
  function removeItemFromStorage(item) {
    let itemsFromStorage = getFromStorage();
    itemsFromStorage = itemsFromStorage.filter(storedItem => storedItem !== item);
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
  }
  
  checkUI(); // Initial UI check
  