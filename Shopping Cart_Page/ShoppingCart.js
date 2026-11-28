// CartItems Dummy Data
const CartItems = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
    name: "Classic Beef Burger",
    basePrice: 120.0,
    quantity: 2,
    size: "Large",
    addons: [
      {
        AddonId: 101,
        name: "Extra Cheddar Cheese",
        price: 15.0,
        quantity: 1,
      },
      {
        AddonId: 102,
        name: "Smoked Beef Bacon",
        price: 25.0,
        quantity: 1,
      },
    ],
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80",
    name: "Margherita Pizza",
    basePrice: 110.0,
    quantity: 1,
    size: "Medium",
    addons: [
      {
        AddonId: 103,
        name: "Stuffed Crust",
        price: 30.0,
        quantity: 1,
      },
    ],
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80",
    name: "Chicken Ranch Pizza",
    basePrice: 165.0,
    quantity: 1,
    size: "Large",
    addons: [
      {
        AddonId: 104,
        name: "Jalapeno Slices",
        price: 10.0,
        quantity: 2,
      },
      {
        AddonId: 105,
        name: "Extra Ranch Drizzle",
        price: 12.0,
        quantity: 1,
      },
    ],
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&q=80",
    name: "Crispy Chicken Sandwich",
    basePrice: 95.0,
    quantity: 3,
    size: "Regular",
    addons: [],
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=400&q=80",
    name: "Chicken Fettuccine Alfredo",
    basePrice: 140.0,
    quantity: 1,
    size: "Medium",
    addons: [
      {
        AddonId: 106,
        name: "Grilled Mushrooms",
        price: 18.0,
        quantity: 1,
      },
    ],
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80",
    name: "Loaded Cheese Fries",
    basePrice: 55.0,
    quantity: 2,
    size: "Large",
    addons: [
      {
        AddonId: 107,
        name: "Crispy Onions",
        price: 8.0,
        quantity: 1,
      },
      {
        AddonId: 108,
        name: "BBQ Sauce",
        price: 10.0,
        quantity: 1,
      },
    ],
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400&q=80",
    name: "Chicken Caesar Salad",
    basePrice: 85.0,
    quantity: 1,
    size: "Regular",
    addons: [
      {
        AddonId: 109,
        name: "Extra Parmesan",
        price: 15.0,
        quantity: 1,
      },
    ],
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&q=80",
    name: "BBQ Chicken Wings",
    basePrice: 90.0,
    quantity: 2,
    size: "12 Pcs",
    addons: [],
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&q=80",
    name: "Chocolate Lava Cake",
    basePrice: 65.0,
    quantity: 2,
    size: "Regular",
    addons: [
      {
        AddonId: 110,
        name: "Vanilla Ice Cream Scoop",
        price: 20.0,
        quantity: 1,
      },
    ],
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&q=80",
    name: "Fresh Strawberry Mojito",
    basePrice: 45.0,
    quantity: 1,
    size: "Large",
    addons: [],
  },
];
document.addEventListener("DOMContentLoaded", () => {
  render();
});
const cartItemsList = document.getElementById("cart-items-list");
const totalItemsElement = document.getElementById("total-items");
const totalPriceElement = document.getElementById("total-price");
function render() {
  // Clear the current list
  cartItemsList.innerHTML = "";

  let totalItems = 0;
  let totalPrice = 0;

  CartItems.forEach((item) => {
    const itemTotalPrice =
      item.basePrice * item.quantity +
      item.addons.reduce((sum, addon) => sum + addon.price * addon.quantity, 0);

    totalItems += item.quantity;
    totalPrice += itemTotalPrice;

    const listItem = document.createElement("li");
    listItem.className = "cart-item";

    listItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="cart-item-image" />
      <div class="cart-item-details">
        <h3>${item.name}</h3>
        <p>Size: ${item.size}</p>
        <p>Quantity: ${item.quantity}</p>
        <p>Base Price: $${item.basePrice.toFixed(2)}</p>
        ${
          item.addons.length > 0
            ? `<ul class="addons-list">
                
                ${item.addons
                  .map(
                    (addon) =>
                      `<li>${addon.name} - $${addon.price.toFixed(
                        2,
                      )} x ${addon.quantity}</li>`,
                  )
                  .join("")}
              </ul>`
            : ""
        }
        <p>Total Price: $${itemTotalPrice.toFixed(2)}</p>
      </div>
      <div class="cart-item-actions">
        
        <button class="remove-item-button" data-id="${item.id}">X</button>
        
        <div class="quantity-controls">
        <button class="plus-item-button" data-id="${item.id}">+</button>
        <input type="number" class="quantity-input" data-id="${item.id}" value="${item.quantity}" min="1" />
        <button class="minus-item-button" data-id="${item.id}">-</button>
        </div>
      </div>
    `;

    cartItemsList.appendChild(listItem);
  });

  totalItemsElement.textContent = totalItems;
  totalPriceElement.textContent = totalPrice.toFixed(2);
}
