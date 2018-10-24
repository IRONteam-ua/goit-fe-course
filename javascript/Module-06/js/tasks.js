"use strict";

const additionalTasks = confirm("Показать дополнительные задания?");

if (additionalTasks) {

  { // ================== task 1 ==================
    /*
  Создать функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email и friendsCount. 
  
  В prototype функции-конструктора добавить метод getAccountInfo(), 
  который выводит в консоль значения полей login, email и friendsCount. 
  
  Обратите внимание, метод будет всего один, в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
  
  Создать несколько экземпляров с разными значениями свойств, вывести их в консоль.
*/

    function Account(login, email, friendsCount) {
      this.login = login;
      this.email = email;
      this.friendsCount = friendsCount;
    };


    Account.prototype.getAccountInfo = function () {
      console.log(`Your account login - ${this.login},
             email - ${this.email},  
             friendsCount - ${this.friendsCount}`);
    };


    const mango = new Account("Mango", "mango@blabla.com", 12);
    const poly = new Account("Poly", "poly_24@qweqwe.net", 24);
    const ajax = new Account("Ajax", "admin@ajax.info", 8);

    console.log(mango);
    console.log(poly);
    console.log(ajax);

    mango.getAccountInfo();
    poly.getAccountInfo();
    ajax.getAccountInfo();
  }

  { // ================== task 2 ==================
    /*
  Напишите функцию-конструктор StringBuilder.
  
  На вход она получает один параметр string - строку.
  
  Добавьте следующие методы в prototype функции-конструктора.
  
    - getValue() - выводит в консоль текущее значение поля value
  
    - append(str) - получает парметр str - строку и добавляет 
      ее в конец значения поля value
    
    - prepend(str) - получает парметр str - строку и добавляет 
      ее в начало значения поля value
  
    - pad(str) - получает парметр str - строку и добавляет 
      ее в начало и в конец значения поля value
*/
    function StringBuilder(string = "") {
      this.value = string;



      // this.showValue = function (){
      //     console.log (this.value)}
    }

    // this.append.prototype = function (){
    //     console.log (this.value)
    // }

    // this.prepend = function (){
    //     console.log (this.value)
    // }

    // this.pad = function (){
    //     console.log (this.value)
    // }



    StringBuilder.prototype.showValue = function () {
      return this.value;
    };

    StringBuilder.prototype.append = function (str) {
      return this.value = this.value + str;
    };
    StringBuilder.prototype.prepend = function (str) {
      return this.value = str + this.value;
    };
    StringBuilder.prototype.pad = function (str) {
      return this.value = str + this.value + str;
    };

    const myString = new StringBuilder('.');

    myString.append('^');
    console.log(myString.showValue()); // '.^'

    myString.prepend('^');
    console.log(myString.showValue()); // '^.^'

    myString.pad('=');
    console.log(myString.showValue()); // '=^.^='
  }

  { // ================== task 3 ==================
    /*
  Создайте класс Car с указанными полями и методами.
*/

    class Car {
      constructor(maxSpeed) {
        /*
      Добавьте свойства:
        - speed - для отслеживания текущей скорости, изначально 0.
        
        - maxSpeed - для хранения максимальной скорости 
        
        - running - для отслеживания заведен ли автомобиль, 
          возможные значения true или false. Изначально false.
          
        - distance - содержит общий киллометраж, изначально с 0
    */
      }

      turnOn() {
        // Добавьте код для того чтобы завести автомобиль
        // Просто записывает в свойство running значание true
      }

      turnOff() {
        // Добавьте код для того чтобы заглушить автомобиль
        // Просто записывает в свойство running значание false
      }

      accelerate(spd) {
        // Записывает в поле speed полученное значение, при условии что
        // оно не больше чем значение свойства maxSpeed
      }

      decelerate(spd) {
        // Записывает в поле speed полученное значение, при условии что
        // оно не больше чем значение свойства maxSpeed и не меньше нуля
      }

      drive(hours) {
        // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
        // но только в том случае если машина заведена!
      }
    }
  }

  { // ================== task 4 ==================
    /*
  Добавьте к классу Car из предыдущего задания статический
  метод getSpecs, который получает объект-машину как аргумент
  и выводит в консоль значения полей maxSpeed, running и distance.
  
  Использование будет выглядеть следующим образом:
  
  const someCar = new Car(100);
  someCar.turnOn();
  someCar.drive(2);
  
  Car.getSpecs(someCar); // maxSpeed: 100, running: true, distance: 200
*/
  }

  { // ================== task 5 ==================
    /*
  Добавьте классу Car свойство value - цена автомобиля.
  
  Добавьте классу Car использование геттеров и сеттеров для свойства value.
  
  Геттер вернет текущей значение поля this._value
  Сеттер запишет в поле this._value то что ему присвоят
  
  PS: имя геттера и сеттера не может совпадать с полем, поэтому используйте
    не this.value а this._value
    
  Использование выглядит следующим образом:
  
  const myCar = new Car(50, 2000);
  
  myCar.value; // 2000
  myCar.value = 4000;
  myCar.value; // 4000
*/

    class Car {
      constructor(maxSpeed, value) {
        // ... код
        this._value = value;
      }
      // ... код
    }
  }

  { // ================== task 6 ==================
  }

  { // ================== task 7 ==================
  }

  { // ================== task 8 ==================
  }

  { // ================== task 9 ==================
  }

  { // ================== task 10 ==================
  }
}