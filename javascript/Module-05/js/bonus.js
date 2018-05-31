"use strict";


// ========================== task 1 ==========================

/*
    1. Используя метод map, составьте массив 
       значений поля name гостей, в результате
       получится ['Mango', 'Poly', 'Ajax', 'Chelsey']
       
    2. Напишите функию getPropValues(arr, prop), принимающую 
      параметры arr - массив, и prop - имя ключа в объекте. 
      Функция должна возвращать массив всех значений этого ключа из arr.
*/

const guests = [
  {name: 'Mango', age: 20, isActive: true},
  {name: 'Poly', age: 18, isActive: false},
  {name: 'Ajax', age: 30, isActive: true},
  {name: 'Chelsey', age: 45, isActive: false}
];


const getPropValues = (arr, prop) => {return guests.map (arr => arr[prop])};


// Вызовы функции для проверки
console.log(
  getPropValues(guests, 'name')
); // ['Mango', 'Poly', 'Ajax', 'Chelsey']

console.log(
  getPropValues(guests, 'age')
); // [20, 18, 30, 45]

console.log(
  getPropValues(guests, 'isActive')
); // [true, false, true, false]


// ========================== task 2 ==========================

/*  1. Используя метод map, пройдите по массиву guests, 
    и составьте новый массив, заменив значение 
    поля isActive на противоположное.
         
    2. Напишите функцию setGuestState(guests, period), где
    guests - массив гостей, period - кол-во дней после
    которого считается что гость не активен.
    
    Если значение поля inactiveDays болше чем period,
    поставить для isActive значение false (если там еще не false)
    
    Если же значение inactiveDays меньше чем period,
    поставить для isActive значение true (если там еще не true)
*/

const setGuestState = (guests, period) => {return users.map (users => 
{if (users.inactiveDays >period){

  return{
    ...users,
    isActive: false,
  };
}else{

  return {
    ...users,
    isActive: true,

  };

}
})}

const users = [
  {name: 'Mango', inactiveDays: 15, isActive: true},
  {name: 'Poly', inactiveDays: 8, isActive: false},
  {name: 'Ajax', inactiveDays: 32, isActive: false},
  {name: 'Chelsey', inactiveDays: 85, isActive: true}
];

// Вызовы функции для проверки
console.log(
  setGuestState(users, 10)
); // Объекты Mango, Ajax, Chelsey получит isActive false, а Poly наоборот true

console.log(
  setGuestState(users, 20)
); // Объекты Ajax, Chelsey получит isActive false, а Mango и Poly наоборот true

console.log(
  setGuestState(users, 50)
); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true   


// ========================== task 3 ==========================

/*
    1. Используя метод filter, пройдите по массиву guests
      и составьте массив только тех гостей, поле isActive
      которых true.
       
    2. Напишите функию getActiveGuests(guests), принимающую 
      один параметр guests - массив объектов гостей. 
      Функция должна возвращать массив объектов гостей,
      значение поля isActive которых true.
       
    3. Напишите функцию getGuestsOlderThan(guests, age), где 
      guests - массив объектов гостей, age - предел возраста 
      для сортировки. Функция возвращает массив объектов значение
      свойства age которых больше чем параметр age.
*/

const guests2 = [
  {name: 'Mango', age: 20, isActive: true},
  {name: 'Poly', age: 18, isActive: false},
  {name: 'Ajax', age: 30, isActive: true},
  {name: 'Chelsey', age: 45, isActive: false}
];

const getActiveGuests = guests => {return guests2.filter ( guests2 => guests2.isActive)};
const getGuestsOlderThan = (guests, age) => {return guests2.filter ( guests2 => guests2.age > age ) }

// Вызовы функции для проверки
console.log(
  getActiveGuests(guests)
); // массив из 2-х объектов Mango и Ajax

console.log(
  getGuestsOlderThan(guests, 25)
); // массив из 2-х объектов Ajax и Chelsey

console.log(
  getGuestsOlderThan(guests, 35)
); // [{name: 'Chelsey', age: 45, isActive: false}]

console.log(
  getGuestsOlderThan(guests, 55)
); // []

// ========================== task 4 ==========================

/*
    1. Используя метод find, пройдите по массиву guests
      и найдите гостя с id равным 3.
      Результат будет {id: 3, name: 'Ajax', age: 30}
       
    2. Напишите функию getGuestById(guests, id), принимающую 
      guests - массив объектов гостей, id - идентификатор (число). 
      Функция должна возвращать объект гостя с совпадающим id.
*/

const guests3 = [
  {id: 1, name: 'Mango', age: 20},
  {id: 2, name: 'Poly', age: 18},
  {id: 3, name: 'Ajax', age: 30},
  {id: 4, name: 'Chelsey', age: 45}
];

const getGuestById = (guests, id) => {return guests3.find (guests3 => guests3.id === id )}

// Вызовы функции для проверки
console.log(
  getGuestById(guests, 3)
); // {id: 3, name: 'Ajax', age: 30}

console.log(
  getGuestById(guests, 1)
); // {id: 1, name: 'Mango', age: 20}

console.log(
  getGuestById(guests, 5)
); // undefined

// ========================== task 5 ==========================

/*
  Используя метод reduce, посчитайте сумму 
  всех значений свойств объекта order.
*/ 


const getSum = obj => {

const values = Object.values (obj);

const result = values.reduce ((sum, current) => sum + current, 0);

return result;
}

const order4 = {
  bread: 10,
  apples: 25,
  chicken: 60,
  milk: 15,
  cheese: 40
};

console.log(getSum(order4)); // 150


// ========================== task 6 ==========================

/*
  Напишите функцию getTotalPrice(products, order), где 
  products - объект со свойствами "имя продукта":"цена за единицу"
  order - объект со свойствами "имя продукта":"количество единиц".
  
  Функция возвращает общую сумму стоимости всех продуктов заказа.
  
  Используя метод reduce, посчитайте 
  общую сумму стоимости всех продуктов заказа.
*/ 


const isInRange = (products, order) => {};

const getTotalPrice = (products, order) => {};


const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  cheese: 30,
  chicken: 40,
};

const orderA = {
  bread: 2,
  apples: 4,
  chicken: 1,
};

const orderB = {
  bread: 1,
  milk: 2,
  cheese: 3
};


// Вызовы функции для проверки
console.log(
  getTotalPrice(products, orderA)
); // 140

console.log(
  getTotalPrice(products, orderB)
); // 130


// ========================== task 7 ==========================

/*     
    1. Напишите функию allGuestsActive(guests), принимающую 
      один параметр guests - массив объектов гостей. 
      Функция должна возвращать true если значение 
      поля isActive всех объектов true, в противном случае false.
*/

// const allGuestsActive = guests => {return guests.find (guests => 
//   {
//     if (guests.isActive === true ){
// return true;

//     }else{

//       return false;
//     }



//   }
// )}


// const guestsA = [
//   {name: 'Mango', isActive: true},
//   {name: 'Poly', isActive: false},
//   {name: 'Ajax', isActive: true},
// ];

// const guestsB = [
//   {name: 'Mango', isActive: true},
//   {name: 'Poly', isActive: true},
//   {name: 'Ajax', isActive: true},
// ];

// // Вызовы функции для проверки
// console.log(
//   allGuestsActive(guestsA)
// ); // false

// console.log(
//   allGuestsActive(guestsB)
// ); // true
