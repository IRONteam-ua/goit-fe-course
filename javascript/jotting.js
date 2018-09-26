// "use strict";


// функции{
//     // функциональным выражением (function expression)

// //        function - выражение

// const add = function (a, b, c) { // a, b, c это параметры 
//     /*используется при объявлении функции, 
//         это те локальные переменные внутри функции,  
//         в которые будут записаны значения аргументов во время вызова функции.*/

//     // тело функции

//     return a + b + c;
// };

// const result = add(1, 2, 3); // 1, 2, 3 это аргументы 
// // (используется при вызове функции, когда мы передаем значения в вызов функции.)


// // объявление функции (function declaration)
// // Особенностью этого синтаксиса является то, что функцию можно вызвать до ее объявления в коде.

// function add(a, b, c) {
//     return a + b + c;
// }


// //   ============================= Область видимости (scope) =================================

// // Лексическое окружение (lexical environment) 
// /*внутренняя, закрытая от прямого доступа структура для хранения имен переменных и их значений в памяти 
// и механизм для извлечения этих значений при обращении по имени.*/

// //  ============================= globalEnvironment = { outerEnv : null }

// const greet = function (name) {
//     // greetEnvironment = {
//     //  name: 'Mango',
//     //  outerEnv: globalEnvironment
//     // }
//     const message = `Good day to you ${name}`;

//     // greetEnvironment = {
//     //  name: 'Mango',
//     //  message: 'Good day to you Mango',
//     //  outerEnv: globalEnvironment
//     // }
//     console.log(message);
// };

// // globalEnvironment = {
// //  greet: f,
// //  outerEnv : null
// // }
// greet('Mango'); // Good day to you Mango

// //  =============================  Function scope

// /*внутреннее, закрытое от прямого доступа свойство функции. Создается в момент определения функции. 
// Ссылается на lexical enviroment в котором данная функция была создана. Никогда не изменяется.*/

// const add = function (num) {
//     const x = 10;
//     return num + x;
// };

// // У нас нет доступа к x снаружи add, x тут не существует
// // console.log вызывается в глобальном окружении,
// // а x не задан в этом глобальном окружении.
// // Поэтому мы получаем Reference Error.
// console.log(x); // ReferenceError: x is not defined

// //  =============================  Перекрытие (shadowing)

// /*Перекрытием называется ситуация, когда во внутреннем окружении создается идентификатор 
// с таким же именем как и во внешнем. Причем не важно что это, аргумент функции, константа или переменная.*/

// let value = 10;

// const fn = function () {
//     let value = 20;
//     console.log(value + 10);
// };

// fn(); // 30

// //  ============================= Функции обратного вызова

// /* функция, которая передается другой функции в качестве аргумента 
// и та, в свою очередь, вызывает переданную функцию.*/

// const map = (arr, callback) => {
//     const resultArr = [];

//     for (const element of arr) {
//         const result = callback(element);
//         resultArr.push(result);
//     }

//     return resultArr;
// };

// const double = val => val * 2;

// const triple = val => val * 3;

// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = map(numbers, double);
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// const tripledNumbers = map(numbers, triple);
// console.log(tripledNumbers); // [3, 6, 9, 12, 15]

// //  ============================= Замыкание (closure) 

// /*  функция, ссылающаяся на независимые переменные. Другими словами, 
//   функция, определённая в замыкании, «запоминает» окружение, в котором она была создана.*/

// const createCounter = () => {
//     // Локальная «свободная» переменная privateCounter,
//     // которая доступна только в замыкании.
//     let privateCounter = 0;

//     const increment = () => {
//         privateCounter += 1;
//         console.log(value);
//     };

//     return increment;
// };

// const counterA = createCounter();
// counterA(); // 1
// counterA(); // 2
// counterA(); // 3

// const counterB = createCounter();
// counterB(); // 1
// counterB(); // 2
// }