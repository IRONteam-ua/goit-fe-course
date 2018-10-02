"use strict";

const string = "May the force be with you";
let longestWord;

let array = string.split(" ");

let longestLetterWord = 0;

// for (let i = 0, max = array.length; i < max; i += 1) {

//   if (array[i].length > longestLetterWord) {
//     longestLetterWord = array[i].length
//   }
// }

array.forEach(element => {
    
if (element.length > longestLetterWord){
    longestLetterWord = element.length
}

  if (longestLetterWord === element.length) {
    longestWord = element;
  }

}); 

// for (let i = 0, max = array.length; i < max; i += 1) {
//   if (longestLetterWord === array[i].length) {
//     longestWord = array[i];
//   }
// }

console.log (longestLetterWord)
console.log (longestWord)