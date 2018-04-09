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
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if (cart.length == 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice} and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  } else if (cart.length > 2) {
    var sentence = `In your cart, you have `
    for (var i=0; i<cart.length-1; i++) {
      if (i==cart.length-2) {
        sentence = sentence + `${cart[i].itemName} at $${cart[i].itemPrice} `
      } else {
      sentence = sentence + `${cart[i].itemName} at $${cart[i].itemPrice}, `
      }
    } 
    sentence = sentence + `and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
    return sentence
  }
    
}

function total() {
  var sum = 0;
  for (var i = 0; i <cart.length; i++) {
    sum = sum + cart[i].itemPrice;
  }
  return sum
}

function removeFromCart(item) {
  var removeIndex = cart.indexOf(item)
  if (removeIndex==-1) {
    return `That item is not in your cart.`
  } else {
    cart.itemName.splice(removeIndex,1)
    cart.itemPrice.splice(removeIndex,1)
    //cart.splice(removeIndex,1)
  }
  
}

function placeOrder(cardNumber) {
  // write your code here
}
