// Menu.js
const menuItems = [
  {
    name: 'Grilled Chicken Sandwich',
    description: 'A tender grilled chicken breast served on a toasted bun with lettuce, tomato, pickles, cheese and our secret sauce! Also comes with a side of fresh fries.',
    price: 6.99,
    image: '../img/grilled_chicken_sandwich.jpg' 
  },
  {
    name: '2 Topping 12-inch Pizza',
    description: 'Enjoy a 12-inch gourmet pizza with a crispy crust, topped with fresh toppings of your choosing, baked to perfection for a delightful, mouthwatering experience.',
    price: 7.99,
    image: '../IMG/12inchpizza.jpg'
  },
  {
    name: 'Vegetable Stir-Fry',
    description: 'A flavorful mix of stir-fried vegetables, such as bell peppers, broccoli, carrots, and snap peas, tossed in a savory soy sauce, served over steamed rice.',
    price: 5.99,
    image: '../IMG/Veg_stir_fry.jpg'
  }
];

// Function generate the menu items
function generateMenu() {
  const menuContainer = document.getElementById('menu-container');
  menuContainer.innerHTML = '';

  // Use menuItems array and create HTML for each item, Used Youtube to help me construct this
  menuItems.forEach((item, index) => {
    const menuItemElement = document.createElement('div');
    menuItemElement.className = 'menu-item';

    menuItemElement.innerHTML = `
      <div class="menu-item-details">
        <h3><em>${item.name} - $${item.price.toFixed(2)}</em></h3>
        <p>${item.description}</p>
      </div>
      <div class="menu-item-order">
        <input type="number" id="quantity-${index}" name="quantity" min="1" max="10" placeholder="Qty" class="menu-quantity" required>
        <button onclick="handleAddToCart('${item.name}', ${index})">Add to Cart</button>
      </div>
      <img src="${item.image}" alt="${item.name}" class="menu-image">
    `;

    menuContainer.appendChild(menuItemElement);
  });

  // More Food Options Coming Soon message
  const comingSoonElement = document.createElement('div');
  comingSoonElement.className = 'menu-item coming-soon';
  comingSoonElement.innerHTML = '<h3>More Food Options Coming Soon!</h3>';
  menuContainer.appendChild(comingSoonElement);
}

// function to generate the menu
document.addEventListener('DOMContentLoaded', generateMenu);

// function to handle 'Add to Cart' click, also used Youtube
function handleAddToCart(itemName, index) {
  const quantityInput = document.getElementById(`quantity-${index}`);
  const quantity = parseInt(quantityInput.value, 10);

  if (!isNaN(quantity) && quantity > 0 && quantity <= 10) {
    console.log(`Added ${quantity} of ${itemName} to the cart.`);
    quantityInput.value = '';
  } else {
    // Alert user input is invalid
    alert('Please enter a valid quantity (1-10).');
  }
}
