// Implement a cart feature:
// 1. Add item to cart
// 2. Add 3% tax to item in cart
// 3. Buy Item: cart --> purchases
// 4. Empty cart

const user = {
  name: 'Kim',
  active: true,
  cart: [],
  purchases: []
};

const compose = (f, g) => (...args) => f(g(...args));
//  const pipe = (f, g) => (...args) => g(f(...args));

const purchaseItem = (...fns) => fns.reduce(compose);

function addItemToCart(user, item) {
  const updatedCart = [...user.cart, item];
  return { ...user, cart: updatedCart };
}

function applyTaxToItems(user) {
  const { cart } = user;
  const taxRate = 1.03;
  const updatedCart = cart.map(item => ({
    name: item.name,
    price: item.price * taxRate
  }));
  return { ...user, cart: updatedCart };
}

function BuyItem(user) {
  return { ...user, purchases: user.cart };
}

function emptyCart(user) {
  return { ...user, cart: [] };
}

console.log(
  purchaseItem(
    emptyCart,
    BuyItem,
    applyTaxToItems,
    addItemToCart
  )(user, { name: 'laptop', price: 200 })
);
