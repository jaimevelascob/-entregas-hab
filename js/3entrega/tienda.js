"use strict";
const itemNames = ["Camisa", "Pantalon", "Calcetines"];
const itemPrices = [13, 27, 100];

class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  // Metodo estatico que genera nuevos items a partir de un nombre
  // y un precio
  static getInventory(names, prices) {
    return names.map((name, index) => {
      return new Item(name, prices[index]);
    });
  }
}

// ### C l a s s   C a r t I t e m ###
class CartItem {
  unit = 1;
  constructor(item) {
    this.item = item;
  }
  // Sumar una unidad al articulo
  increase() {
    this.unit++;
  }
}

// ### C l a s s   U s e r ###
class User {
  cart = [];
  constructor(name) {
    this.name = name;
  }
  // Agrega nuevos items al carrito de la compra.
  addToCart(item) {
    const itemInCart = this.cart.find(i => i.item.name === item.name);

    if (itemInCart) {
      itemInCart.increase();
    } else {
      this.cart.push(new CartItem(item));
    }
  }
  fillCart(limit, catalogue) {
    for (let i = 0; i < limit; i++) {
      const itemIndex = Math.floor(Math.random() * catalogue.length);
      this.addToCart(catalogue[itemIndex]);
    }
  }
  pay(shop) {
    shop.checkout(this.cart);
  }
}
class Shop {
  checkout(cart) {
    for (const cartItem of cart) {
    }
  }
}
// Mi lista de items
const myCatalogue = Item.getInventory(itemNames, itemPrices);

// Instanciamos un usuario
const myUser = new User(`klk`);

// Llamamos al metodo del usuario que se encarga de agregar items al
// carrito del usuario.
myUser.fillCart(5, myCatalogue);
console.log(myUser.cart);
// Comprobamos si se han agregado los items al carrito del usuario
