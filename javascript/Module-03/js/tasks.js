"use strict";

const additionalTasks = confirm ('Показать дополнительные задания?')

if (additionalTasks){


// ================== task 1 ================== 

/*
  Напишите функцию checkNumberType(num)
  
  Функция получает число num как аргумент и возвращает 
  строку "Even" если число четное и строку "Odd" если не четное.
*/

const checkNumberType = (num) => num % 2 ? "odd" : "even";

// Вызовы функции для проверки
console.log( checkNumberType(2) ); // 'Even'

console.log( checkNumberType(46) ); // 'Even'

console.log( checkNumberType(3) ); // 'Odd'

console.log( checkNumberType(17) ); // 'Odd'


// ================== task 2 ================== 



// ================== task 3 ================== 



// ================== task 4 ================== 



// ================== task 5 ================== 



// ================== task 6 ================== 



// ================== task 7 ================== 




// ================== task 8 ================== 



// ================== task 9 ================== 



// ================== task 10 ================== 






}else{
    alert ('Ну нет, так нет')
}