var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var newItem = { itemName:item, itemPrice: Math.floor(Math.random()*100+1) }
 
 cart.push(newItem)
 
 return `${newItem.itemName} has been added to your cart.`
}

function viewCart() {
  if (cart.length == 0) {
    return 'Your shopping cart is empty.'
  } else if (cart.length == 1) {
    return `In your cart, you have ${cart.[1].itemName} at $${cart[1].itemprice
  }
    
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
