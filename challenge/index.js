// Array to store shopping list items
let shoppingItems = [];


// DOM elements
const itemInput = document.getElementById('itemInput');
const addItemBtn = document.getElementById('addItemBtn');
const clearListBtn = document.getElementById('clearListBtn');
const markPurchasedBtn = document.getElementById('markPurchasedBtn');
const shoppingList = document.getElementById('shoppingList');


// Function to add item to the list
function addItem() {
    const itemText = itemInput.value.trim();
    if (itemText !== '') {
        shoppingItems.push({ text: itemText, purchased: false });
        renderList();
        itemInput.value = '';
    }
}


// Function to clear the list
function clearList() {
    shoppingItems = [];
    renderList();
}

// Function to mark all items as purchased
function markPurchased() {
    shoppingItems.forEach((item) => {
        if (!item.purchased) {
            item.purchased = true;
        }
    });
    renderList();
}

// Function to render the list
function renderList() {
    shoppingList.innerHTML = '';
    shoppingItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item.text;
        if (item.purchased) {
            li.classList.add('completed');
        }
        li.addEventListener('click', () => toggleComplete(index));
        shoppingList.appendChild(li);
    });
}

// Function to toggle completion status of individual item
function toggleComplete(index) {
    shoppingItems[index].purchased = !shoppingItems[index].purchased;
    renderList();
}

// Event listeners
addItemBtn.addEventListener('click', addItem);
clearListBtn.addEventListener('click', clearList);
markPurchasedBtn.addEventListener('click', markPurchased);

// Optional: Add item on pressing Enter key
itemInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addItem();
    }
});

// Initial render of the list
renderList();
