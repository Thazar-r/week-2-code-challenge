// Array to store shopping list items
let shoppingItems = [];

// DOM elements
const itemInput = document.getElementById('itemInput');
const addItemBtn = document.getElementById('addItemBtn');
const clearListBtn = document.getElementById('clearListBtn');
const shoppingList = document.getElementById('shoppingList');

// Function to add item to the list
function addItem() {
    const itemText = itemInput.value.trim();
    if (itemText !== '') {
        shoppingItems.push(itemText);
        renderList();
        itemInput.value = '';
    }
}

// Function to clear the list
function clearList() {
    shoppingItems = [];
    renderList();
}

// Function to render the list
function renderList() {
    shoppingList.innerHTML = '';
    shoppingItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;
        li.addEventListener('click', () => toggleComplete(index));
        shoppingList.appendChild(li);
    });
}

// Function to toggle completion status
function toggleComplete(index) {
    const item = shoppingList.children[index];
    item.classList.toggle('completed');
}

// Event listeners
addItemBtn.addEventListener('click', addItem);
clearListBtn.addEventListener('click', clearList);

// Optional: Add item on pressing Enter key
itemInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addItem();
    }
});
