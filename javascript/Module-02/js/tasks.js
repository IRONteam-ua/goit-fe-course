"use strict";

const additionalTasks = confirm('Показать дополнительные задания?')

if (additionalTasks) {


  // ================== task 1 ================== 

  /*
    Есть массив имен пользователей.
    В первом console.log вывести длину массива.
    
    В последующих console.log дополнить конструкцию
    так, чтобы в консоль вывелись указаные в комментариях 
    элементы массива.
  */

  const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

  console.log(users.length); // 4

  console.log(users[1]); // Poly
  console.log(users[3]); // Chelsey
  console.log(users[0]); // Mango
  console.log(users[2]); // Ajax


  // ================== task 2 ================== 

  /* Есть массив имен пользователей */

  const users2 = ["Mango", "Poly", "Ajax", "Chelsey"];

  /* Используя методы массива, последовательно выполнить следующие операции */

  // Удалить из начала массива нулевой элемент
  console.log(users2.shift(0)); // ["Poly", "Ajax", "Chelsey"]

  // Удалить из конца массив последний элемент
  console.log(users2.pop()); // ["Poly", "Ajax"]

  // Добавить в начало массива любое имя
  console.log(users2.unshift("Lazy")); // ["добавленое имя", "Poly", "Ajax"]

  // Добавить в конец массива два любых имени за одну операцию
  console.log(users2.push("Crazy", "Sany")); //  ["добавленое ранее имя", "Poly", "Ajax", "имя 1", "имя 2"]

  console.log(users2);

  // ================== task 3 ================== 

  /*
    Попросить пользователя ввести произвольную строку
    и записать ее в переменную string
    
    PS: для перебора массива используте цикл for или for...of
  */

  let string;
  let arr;

  string = prompt('Введитк произвольную строку')

  // Разбить строку в массив, пусть разделителем будет пробел, и записать в переменную arr
  console.log(arr = string.split(""))
  // Вывести в консоли общую длину массива arr
  console.log(arr.length);

  // Используя цикл, вывести в консоль все индексы массива arr
  for (let i = 0; i < arr.length; i += 1)
    console.log(i);

  // Используя цикл, вывести в консоль все элементы массива arr
  for (let i = 0; i < arr.length; i += 1)
    console.log(arr[i]);

  // Используя цикл, bывести в консоли все пары индекс:значение массива arr
  for (let i = 0; i < arr.length; i += 1)
    console.log(i, arr[i]);


  // ================== task 4 ================== 

  /*
    Напишите цикл, который предлагает, через prompt, ввести число больше 100. 
    
    Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

    Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, 
    либо не нажмёт кнопку Cancel.
    
    Предполагается, что посетитель вводит только числа, обрабатывать невалидный ввод 
    вроде строк 'qweqwe' в этой задаче необязательно.
    
    PS: используйте цикл do...while
  */


  let input = 0;

  do {
    input = Number(prompt('Введите число больше 100', ''));
  } while (input < 100 && input === null);

  // ================== task 5 ================== 

  /*
    Напишите скрипт, который выводит через console.log все 
    числа от min до max, с двумя исключениями: 
      
      - Для чисел, нацело делящихся на 3, вместо числа выводится строка 'Fizz'
      
      - Для чисел, нацело делящихся на 5, но не на 3, вместо числа выводится строка 'Buzz'
      
    PS: используйте цикл for
  */

  const min = 1;
  const max = 100;
  let Fizz;
  let Buzz;
  let result;
  let arrray = [];

  console.log(Fizz);
  console.log(Buzz);



  // ================== task 6 ================== 

  /*
    Напишите скрипт, который выбирает из массива numbers 
    все числа, которые больше чем значение переменной num, 
    записывая эти числа в массив newArray.
        
    В результате в массиве newArray будут все подходяшие числа.
        
    PS: используйте цикл for или for...of и оператор ветвления if
  */

  const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
  const num = 10;
  const newArray = [];


  for (let item of numbers) {
    if (item > num) {

      newArray.push(item);
    }
  }
  console.log(newArray);


  // ================== task 7 ================== 


  /*
    Напишите скрипт, который проверяет произвольную строку 
    в переменной string и находит в ней самое длинное слово,
    записывая его в переменную longestWord.
  */

  const string2 = "May the force be with you";
  let longestWord;

  let array = string2.split(" ");

  let longestLetterWord = 0;

  for (let i = 0, max = array.length; i < max; i += 1) {

    if (array[i].length > longestLetterWord) {
      longestLetterWord = array[i].length
    }
  }

  for (let i = 0, max = array.length; i < max; i += 1) {
    if (longestLetterWord === array[i].length) {
      longestWord = array[i];
    }
  }


  console.log(longestWord); // 'force'

  // ================== task 8 ================== 

  /*
    Напишите скрипт который:
    
    - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
      Используйте do...while.
    
    - Заканчивает запрашивать числа, как только посетитель введёт не число 
      или нажмёт Cancel. При этом ноль 0 не должен заканчивать ввод, 
      это разрешённое число.
    
    - После того как ввод был завершен, если массив не пустой, 
      скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
      Используйте цикл for...of
  */

  let userInput;
  let number;
  let userChoiseList = [];
  let sumOfList = 0;

  do {
    userInput = prompt('Введите число', '');

    number = Number(userInput);
    userChoiseList.push(number);

  } while (userInput === null && userInput !== Number.isNaN(number) && userInput === ''); 
  console.log(userChoiseList);

  for (let item of userChoiseList) {
    sumOfList += item;
  }
  console.log(sumOfList);
  // ================== task 9 ================== 

  /*
    ***ЗАДАНИЕ ПОВЫШЕНОЙ СЛОЖНОСТИ***
    
    Создайте игру угадай число.
    
    Есть массив чисел numbers, содержащий "верные" числа.
    Числа в массиве всегда идут по возрастанию, 1-5, 20-40, 2-100 и т.п.
    
    Просим пользователя ввести цифру от самого маленького,
    до самого большого элемента массива. Эти значения необходимо
    сохранить в переменные min и max. Учтите что массив произвольный,
    но элементы всегда идут по возрастанию.
    
    Пусть prompt говорит "Введите цифру между x и y", где x и y 
    соотвественно самый маленький и самый большой элемент массива.
    
    Но пользователь может ввести что угодно, необходимо проверить 
    что было введено. Преобразовать input в числовой тип и проверить 
    число ли это.
    
      - Если не число - выводим alert с сообщением о том, что было 
        введено не число.
      - Если число - проверить содержит ли в себе массив numbers это число.
      - Если содержит - выводим alert с сообщением 'Поздравляем, Вы угадали!'.
      - Есл не содержит - выводим alert с сообщением 'Сожалеем, Вы не угадали!'.
  */

  const playNumbers = [12, 15, 25, 37, 41];
  let minNum = 1;
  let maxNum = 50;
  let winNum;

  const playerChoise = prompt(`Введите цифру между ${minNum} и ${maxNum}`, '');
  const integer = Number(playerChoise);
  const inRange = playerChoise >= min && playerChoise <= max;
  const trueEnter = integer && !Number.isNaN(playerChoise) && playerChoise !== null && inRange;


  if (!trueEnter) {
    alert('было введено не число')
  }
  if (!inRange) {
    alert(`Введите цифру между ${minNum} и ${maxNum}`)
  } else {

    let playerNum = playNumbers.includes(integer);

    if (playerNum) {

      alert('Поздравляем, Вы угадали!')


    } else {
      alert('Сожалеем, Вы не угадали!')

    }

  }










} else {
  alert('Ну нет, так нет')
}