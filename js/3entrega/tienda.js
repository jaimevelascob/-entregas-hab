'use strict';
const names = ['Camisa', 'Pantalon', 'Calcetines'];
const prices = [13, 27, 100];
class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  static createList(itemNames, itemPrices) {
    return itemNames.map((value, index) => {
      return new Item(value, itemPrices[index]);
    });
  }
}
class cartItems {
  units = 1;
  constructor(item) {
    this.item = item;
  }
  increase() {
    this.units++;
  }
  /*if este item = item del create list
   (metelo en el user)
   */
}
let myItem = Item.createList(names, prices);
console.log(myItem);
