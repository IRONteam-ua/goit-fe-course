"use strict";

const additionalTasks = confirm('Показать дополнительные задания?')

if (additionalTasks) {


  // ================== task 1 ================== 

  /*
    Напишите функцию checkNumberType(num)
    
    Функция получает число num как аргумент и возвращает 
    строку "Even" если число четное и строку "Odd" если не четное.
  */

  const checkNumberType = (num) => num % 2 ? "odd" : "even";

  // Вызовы функции для проверки
  console.log(checkNumberType(2)); // 'Even'

  console.log(checkNumberType(46)); // 'Even'

  console.log(checkNumberType(3)); // 'Odd'

  console.log(checkNumberType(17)); // 'Odd'


  // ================== task 2 ================== 

  /*
    Напишите функцию formatString(str)
    
    - Функия принимает на вход строку str
    - Если длина строки не превышает 40 символов, функция возвращает ее. 
    - Если длина больше 40 символов, то функция обрезает строку до 40-ти
      символов и добавляет в конец строки троеточие '...', после чего 
      возвращает укороченную версию.
  */

  function formatString(str) {

    let arrFormatString;
    let lengthString = 40;

    arrFormatString = str.split("");


    for (let i = 0, max = arrFormatString.length; i < max; i += 1) {
      if (arrFormatString.length < lengthString) {
        return arrFormatString.join(" ");
      } else {
        arrFormatString.splice(40)
        return (arrFormatString.join(" ") + "...");
      }
    }

  }




  // Вызовы функции для проверки
  console.log(
    formatString("Curabitur ligula sapien, tincidunt non.")
  ); // вернется оригинальная строка

  console.log(
    formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
  ); // вернется форматированная строка

  console.log(
    formatString("Curabitur ligula sapien.")
  ); // вернется оригинальная строка

  console.log(
    formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
  ); // вернется форматированная строка

  // console.log (formatString)

  // ================== task 3 ================== 

  /*
  Напишите функцию checkForSpam(str)
  
  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale
  
  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false
  
  PS: слова могут быть в произвольном регистре
*/

  function checkForSpam(str) {

    let checkForSpam = [];

    checkForSpam = str.split(" ");

    for (let items of checkForSpam) {

      let spam = checkForSpam.includes('[SPAM]');
      let sale = checkForSpam.includes('sale');


      // console.log (spam);
      // console.log (sale);


      if (spam === true || sale === true) {
        checkForSpam.join(" ");
        return true;
      } else {

        return false;

      }
    }


  }

  // Вызовы функции для проверки
  console.log(checkForSpam('Latest technology news')); // false

  console.log(checkForSpam('JavaScript weekly newsletter')); // false

  console.log(checkForSpam('Get best sale offers now!')); // true

  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true



  // ================== task 4 ================== 

  /*  
    Написать функцию, getPx(str) 

    Функция getPx должна получать строку вида '10px',
    проверять была ли передана строка, если да, 
    возвращать только числовую составляющую, к примеру 10.
      
    Если была передана не строка, функция возвращает null.
  */

  const getPx = str => typeof (str) === 'string' ? Number.parseFloat(str) : null;


  // Вызовы функции для проверки
  console.log(getPx("10px") === 10); // должно быть:  true
  console.log(getPx("10.5") === 10.5); // должно быть:  true
  console.log(getPx("0") === 0); // должно быть:  true
  console.log(getPx(-1)); // должно быть:  null
  console.log(getPx(10)); // должно быть:  null

  // ================== task 5 ================== 

  /*  
    Создайте фукнцию findLongestWord(str),
    которая получает аргументом произвольную строку и
    возвращает самое длинное слово в этой строке.   
    
    Важное условие - в строке могут быть только пробелы
    и символы букв и цифр!
  */


  function findLongestWord(str) {

    let findLongestWordArr = [];
    let longestWord;

    findLongestWordArr = str.split(' ');

    let longestLetterWord = 0;

    for (let i = 0, max = findLongestWordArr.length; i < max; i += 1) {

      if (findLongestWordArr[i].length > longestLetterWord) {
        longestLetterWord = findLongestWordArr[i].length;
      }

    }


    for (let i = 0, max = findLongestWordArr.length; i < max; i += 1) {

      if (longestLetterWord === findLongestWordArr[i].length) {

        longestWord = findLongestWordArr[i]
      }

    }

    return longestWord

  }

  // Вызовы функции для проверки
  console.log(
    findLongestWord("The quick brown fox jumped over the lazy dog")
  ); // вернет 'jumped'

  console.log(
    findLongestWord("Google do a roll")
  ); // вернет 'Google'

  console.log(
    findLongestWord("May the force be with you")
  ); // вернет 'force'

  // ================== task 6 ================== 

/*  
  Создайте функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/



function findLargestNumber(numbers){

let bigNumber = 0;

for (let items of numbers){

  if (items > bigNumber){

    bigNumber = items;
  }
}

return bigNumber;
}


// Вызовы функции для проверки
console.log(
  findLargestNumber([1, 2, 3])
); // вернет 3

console.log(
  findLargestNumber([27, 12, 18, 5])
); // вернет 27

console.log(
  findLargestNumber([31, 128, 14, 74])
); // вернет 128


  // ================== task 7 ================== 

/*  
  Есть массив уникальных чисел uniqueNumbers.
  
  Написать функцию, addUniqueNumbers(...), 
  которая получает произвольное кол-во чисел как аргументы, 
  и добавляет в массив uniqueNumbers только уникальные,
  а те которые в массиве уже есть игнорирует.
*/

const uniqueNumbers  = [2, 1, 4, 9];

function addUniqueNumbers(... args){

  for (let item of arguments){

    if (!uniqueNumbers. includes (item)){

      uniqueNumbers.push (item)
    }
  }

  return uniqueNumbers;
}


// Вызовы функции для проверки
addUniqueNumbers(1, 2, 3);
console.log(
  uniqueNumbers
); // [2, 1, 4, 9, 3]

addUniqueNumbers(12, 2, 3, 19);
console.log(
  uniqueNumbers
); // [2, 1, 4, 9, 3, 12, 19]

addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
console.log(
  uniqueNumbers
); // [2, 1, 4, 9, 3, 12, 19, 5, 8]


  // ================== task 8 ================== 

/*
  Создайте функцию removeFromArray(arr), 
  которая получает 1 параметр, исходный массив arr.
  
  При вызове функции, первым аргументом всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел. 
  
  Удалите все элементы из исходного массива, 
  которые имеют такое же значение, что и аргументы.
*/

function removeFromArray(arr, ...numbers) {

let indexArr = [];
let additionalArr = Array.from(numbers);
for(let item of arr){
  if(!additionalArr.includes(item)){
    indexArr.push(item);
  }
}
return indexArr;

}


// Вызовы функции для проверки
console.log(
  removeFromArray([1, 2, 3, 4, 5], 2, 4)
); // [1, 3, 5]

console.log(
  removeFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
); // [12, 8, 17]

  // ================== task 9 ================== 



  // ================== task 10 ================== 






}