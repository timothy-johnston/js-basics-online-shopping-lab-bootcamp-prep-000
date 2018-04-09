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
  if (cart.length === 0) {
    return 'Your shopping cart is empty.'
  } else if (cart.length == 1) {
    return `In your cart, you have ${cart[1].itemName} at $${cart[1].itemprice}.`
  } else if (cart.length == 2) {
    return `In your cart, you have ${cart[1].itemName} at $${cart[1].itemprice} and ${cart[2].itemName} at $${cart[2].itemprice}.`
  } else if (cart.length > 2) {
    var sentence = `In your cart, you have `
    for (var i=0; i<cart.length-1; i++) {
      sentence = sentence + `${cart[i].itemName} at ${cart[i].itemPrice}, `
    } 
    sentence = sentence + `, and ${cart[cart.length-1].itemName} at ${cart[cart.length-1].itemPrice}.`
    return sentence
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
