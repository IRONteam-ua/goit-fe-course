﻿"use strict";

/*
1. Создайте скрипт турагенства, продающего поездки в 3-х группах: sharm, hurgada и taba.
2. Кол-во мест в группах ограничено: sharm - 15, hurgada - 25, taba - 6.
3. Когда пользователь посещает страницу, ему необходимо предложить ввести число необходимых мест,
результат сохранить в переменную.
4. Необходимо проверить является ли введенные данные целым положительным числом. 
Вывести alert с текстом "Ошибка ввода" в случае ошибочного ввода и прекратить выполнение скрипта.
5. В случае валидного ввода, последовательно проверить кол-во мест в группах, 
и кол-во необходимых мест введенных пользователем.
Подсказка: начните с самой маленькой группы!
4. Если была найдена группа в которой количество мест больше либо равно необходимому, 
вывести пользователю сообщение через confirm, что есть место в группе такой-то, 
согласен ли пользоваетель быть в этой группе?
5. Если ответ да, уменьшаем число свободных мест на число участников группы и выводим alert с текстом,
'Приятного путешествия в группе <имя группы>'.
6. Если ответ нет, выводим alert с текстом "Нам очень жаль, приходите еще!".
7. Если мест нигде нет, выводим alert с сообщением 'Извините, мест нет.'
*/


/****Задание повышеной сложности, выполнять по желанию***

Если была найдена группа в которой количество мест больше либо равно необходимому, 
вывести пользователю сообщение через confirm, что есть место в группе такой-то, 
согласен ли пользоваетель быть в этой группе?

Если ответ да, уменьшаем число свободных мест на число участников группы и выводим alert с текстом,
'Приятного путешествия в группе <имя группы>'.

Если ответ нет, проверяем дальше и предлагаем следующую группу со свободными местами, 
если таковая будет найдена. Проверяем до тех пор, пока не проверим все 3 воможные группы.

Если мест нигде нет, выводим alert с сообщением 'Извините, мест нет.'  */


// создаем группы и количество мест

let taba = 6;
let hurgada = 15;
let sharm = 25;

// Пользователь вводит число необходимых мест;
const userInput =  prompt('Введите число необходимых мест:', );
const userMembers = Number(userInput);

// проверям  является ли введенные данные целым положительным числом;

const isValidInput = userMembers !== null && !Number.isNaN(userMembers);
console.log (isValidInput);

let userChoise;
let groupMembers;

if(isValidInput === true){
  // В случае валидного ввода, последовательно проверить кол-во мест в группах
  // Если была найдена группа в которой количество мест больше либо равно необходимому,

    if(userMembers <= taba){
    //  Выводим сообщение пользователю что есть место в группе
      userChoise = confirm('Есть места в группе \'taba\'. Вы согласны быть в группе?'); 
        if(userChoise === true){
          alert( 'Приятного путешествия в группе \'taba\'');
          // уменьшаем число свободных мест на число участников группы
          taba = taba - userMembers;
        }
         if(userChoise === false){
              alert( 'Нам очень жаль, приходите еще!')
            }
        }

        if(userMembers<=hurgada){
              //  Выводим сообщение пользователю что есть место в группе
          userChoise = confirm('Есть места в группе \'hurgada\'. Вы согласны быть в группе?');
            if(userChoise === true){
              alert( 'Приятного путешествия в группе \'hurgada\'');
               // уменьшаем число свободных мест на число участников группы
              taba = hurgada - userMembers;
            }
              if(userChoise === false){
                alert( 'Нам очень жаль, приходите еще!')
              }
          }
            if(userMembers<=sharm){
                  //  Выводим сообщение пользователю что есть место в группе
              userChoise = confirm('Есть места в группе \'sharm\'. Вы согласны быть в группе?');
                if(userChoise === true){
                  alert( 'Приятного путешествия в группе \'sharm\'');
                   // уменьшаем число свободных мест на число участников группы
                  taba = sharm - userMembers;
                }
                if(userChoise === false){
                  alert( 'Нам очень жаль, приходите еще!')
                }
            }
                else{
                  // Если мест нигде нет
                alert('Извините, мест нет.');  
              }}
              
              else {
                alert("Ошибка ввода!");
            }
          
    
            console.log(`Sharm - ${sharm}`);
            console.log(`Taba - ${taba}`);
            console.log(`Hurgada - ${hurgada}`);

