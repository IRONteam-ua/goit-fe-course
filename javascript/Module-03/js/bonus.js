'use strict';


/*  
  Создайте функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/


function findLargestNumber(numbers) {


let bigNumber = 0;

for (let item of numbers){

  if (item > bigNumber){

    bigNumber = item;
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




// /*
//   Создайте функцию titleCase(str), которая 
//   получает строку и возвращает предоставленную строку 
//   с первой буквой каждого слова, заглавными. 
//   Остальные буквы слова должны быть не заглавными.
// */

// function titleCase(str){

//   let addLowerStr = str.toLowerCase();
//   let finalString = "";

//   let arr = addLowerStr.split (' ');

//   for (let item of arr){

//     let newWord = item[0].toUpperCase()+item.slice(1);
//     finalString +=newWord + " ";

//   }
//   return finalString;

// }


// // Вызовы функции для проверки
// console.log( 
//   titleCase("I'm a little tea pot")
// ); // вернет "I'm A Little Tea Pot"

// console.log(
//   titleCase("sHoRt AnD sToUt")
// ); // вернет "Short And Stout".

// console.log(
//   titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")
// ); // вернет "Here Is My Handle Here Is My Spout".





// /*  
//   Создайте фукнцию findLongestWord(str),
//   которая получает аргументом произвольную строку и
//   возвращает самое длинное слово в этой строке.   
//   Важное условие - в строке могут быть только пробелы
//   и символы букв и цифр!
// */

// function findLongestWord (str){

//   let arr = str.split (' ');
//   let maxItem;
//   let maxWords = 0;


//   for (let item of arr){


//     if (item.length > maxWords){

//         maxWords = item.legth;
//         maxItem = item

//     }


//   }
//     return maxItem;

// }


//   // Вызовы функции для проверки
//   console.log(
//     findLongestWord("The quick brown fox jumped over the lazy dog")
//   ); // вернет 'jumped'

//   console.log(
//     findLongestWord("Google do a roll")
//   ); // вернет 'Google'

//   console.log(
//     findLongestWord("May the force be with you")
//   ); // вернет 'force'




  // /*  
  //   Написать функцию, getPx(str) 

  //   Функция getPx должна получать строку вида '10px',
  //   проверять была ли передана строка, если да, 
  //   возвращать только числовую составляющую, к примеру 10.

  //   Если была передана не строка, функция возвращает null.
  // */

  //  function getPx(px){


  //   let result;

  // if (typeof px === 'string'){
  // result = Number.parseFloat(px);
  // }
  // else{
  // result = null;
  // }
  // return result;
  // }

  // // Вызовы функции для проверки
  // console.log( getPx("10px") === 10 ); // должно быть:  true
  // console.log( getPx("10.5") === 10.5 ); // должно быть:  true
  // console.log( getPx("0") === 0 ); // должно быть:  true
  // console.log( getPx(-1) ); // должно быть:  null
  // console.log( getPx(10) ); // должно быть:  null