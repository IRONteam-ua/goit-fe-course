'use strict';

/*
  Создайте объект кассира, который получает список продуктов и деньги, 
  подсчитывает общую стоимость продуктов, и в зависимости от того
  хватает денег или нет, уведомляет покупателя о результате.
*/


/*
  Есть заранее известная база данных товаров, 
  в формате "имя-товара":"цена за одну единицу"
*/
const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  pork: 80,
  cheese: 60,
  tea: 20,
  candy: 25
};

const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1
};

function Cashier(name, products) {

  this.name = name; // name - строка, имя, передается при вызове конструктора
  this.products = products; // products - объект база данных продуктов, передается при вызове конструктора
  this.totalPrice = 0; // totalPrice - число, общая стоимость покупок текущего покупателя, всегда начинается с 0 
  this.customerMoney = 0; // customerMoney - число, сумма введенная пользователем в prompt при запросе денег, всегда начинается с 0 
  this.changeAmount = 0; // changeAmount - число, сдача, всегда начинается с 0

  this.countTotalPrice = function (order) { // метод, получает список покупок, считает общую сумму исходя из поля products

    for (let key in order) {

      this.totalPrice += order[key] * this.products[key];
    }
    return this.totalPrice;
  };

  this.countChange = function () { // метод, считает сдачу, разницу между общей суммой покупок и деньгами покупателя.

    return this.changeAmount = this.customerMoney - this.totalPrice;
  };

  this.reset = function () { // метод, сбрасывает поля totalPrice, customerMoney и changeAmount в 0.

    this.totalPrice = 0;
    this.customerMoney = 0;
    this.changeAmount = 0;
  }

  this.getCustomerMoney = function () { // метод, при вызове показывает prompt, в котором указана общая сумма покупок из поля totalPrice. 

    do {

      this.customerMoney = prompt(`Общая сума покупок ${this.totalPrice}, введите ровную сумму или больше:`);

      let inNumner = Number(this.customerMoney);

      if (this.customerMoney === null) { //Если пользователь нажмет Cancel, то функция возвращает null.

        return null;
      }

    } while (this.customerMoney < this.totalPrice || Number.isNaN(this.customerMoney));

  }

  this.serve = function (order) { // метод, вызывается при обслуживании пользователя.

    this.countTotalPrice(order);

    if (this.getCustomerMoney() === null) {

      alert('Очень жаль, что-то пошло не так, приходите еще');
      return this.reset();
    }

    if (this.countChange()) {

      alert(`Спасибо за покупку, ваша сдача ${this.changeAmount}`);
      return this.reset();

    }
  };
}


const cashier = new Cashier('Mango', products);
cashier.serve(order);


console.log(this.totalPrice)
console.log(this.customerMoney)
console.log(this.countTotalPrice)
console.log(this.totalPrice)
console.log(this.customerMoney)
console.log(this.order)