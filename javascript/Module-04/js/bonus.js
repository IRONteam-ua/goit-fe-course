'use strict';

// ======================tassk 1 =================

/*  
Напишите код, который, для объекта user, последовательно: 
- добавляет поле mood со значением 'happy'
- заменяет значение hobby на 'javascript'
- удаляет свойство premium
- выводит содержимое объекта user 
циклом в формате ключ: значение
*/

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};

user.mood = "happy";
user.hobby = "javascript";
delete user.premium;
console.log(user);

// ======================tassk 2 =================

/*  
Создайте функцию isObjectEmpty(obj), которая получает 
единственный аргумент obj - объект, и проверяет
пуст ли он (есть ли в нем свойства).
  
Возвращает true если объект пустой, false если не пустой.
*/

function isObjectEmpty(obj) {

  for (let key in obj) {

    return false;
  }
  return true;
}


// Вызовы функции для проверки
console.log(
  isObjectEmpty({})
); // true

console.log(
  isObjectEmpty({
    a: 1
  })
); // false

// ======================tassk 3 =================

/*  
Напишите функцию countOwnProps(obj),
считающую кол-во сообственных свойств в объекте.
Функция возвращает количество свойств.
*/

// function countOwnProps(obj) {

let objProperty = 0;

for (let key in obj) {

  objProperty += 1;

  if (objProperty < key) {

    console.log(objProperty);
    return objProperty;
  }
}

return objProperty;

}

// Вызовы функции для проверки
console.log(
  countOwnProps({})
); // 0

console.log(
    countOwnProps({
      a: 1,
      b: 3,
      c: 'hello'
    })
    // ); // 3

    // ======================tassk 4 =================

    /*  
    Напишите функцию countTotalSalary(salaries),
    считающую общую сумму запрплаты работников.

    Каждое поле объекта передаваемого в функцию, 
    имеет вид "имя":"зарплата"

    Функция возвращает общую сумму зарплаты.
    */

    function countTotalSalary(salaries) {

      let countSalary = 0;

      for (let key in salaries) {

        countSalary += salaries[key];

        if (countSalary < salaries[key])

          return countSalary;
      }
      return countSalary;

    }

    // Вызовы функции для проверки
    console.log(
      countTotalSalary({})
    ); // 0

    console.log(
      countTotalSalary({
        mango: 100,
        poly: 150,
        alfred: 80
      })
    ); // 330

    // ======================tassk 5 =================

    /*  
    Напишите функцию getAllPropValues(prop), 
    которая берет массив объектов и 
    возвращает массив значений определенного поля prop
    */

    const users = [{
        name: 'Poly',
        age: 7,
        mood: 'happy'
      },
      {
        name: 'Mango',
        age: 4,
        mood: 'blissful'
      },
      {
        name: 'Ajax',
        age: 3,
        mood: 'tired'
      }
    ];

    function getAllPropValues(prop) {

      let newArr = [];

      for (let item of users) {

        newArr.push(item[prop]);

      }

      return newArr;

    }



    // Вызовы функции для проверки
    console.log(
      getAllPropValues('name')
    ); // ['Poly', 'Mango', 'Ajax']

    console.log(
      getAllPropValues('mood')
    ); // ['happy', 'blissful', 'tired']

    console.log(
      getAllPropValues('active')
    ); // []

    // ======================tassk 6 =================

    /*  
    Напишите код, который бы  с помощью 
    функции-конструкора User, позволял создавать 
    объекты пользователя со следующим свойствами:
    - name - строка (имя)
    - isActive - буль (активен)
    - age - число (возраст)
    - friends - число (кол-во друзей)

    Имя, активность, возраст и друзей, 
    необходимо передать как аргументы 
    при вызове конструктора.

    Добавить метод getUserInfo(), которая, выводит строку:
    `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

    Создать несколько объектов пользователя User и с помощью 
    функции getUserInfo вывести строку в консоль.
    */


    function User(name, isActive, age, friends) {

      this.name = name;
      this.isActive = isActive;
      this.age = age;
      this.friends = friends;




      this.getUserInfo = function () {
        console.log(`
    name: ${this.name}, 
    isActive: ${this.isActive}, 
    age: ${this.age}
    friends: ${this.friends}
    `);
      }

    }


    const poly = new User('Poly', true, 18, 5);
    const max = new User('Max', false, 41, 37);

    console.log(poly); poly.getUserInfo();

    console.log(max); max.getUserInfo();



    // ======================tassk 6 =================

    /*  
      Расставьте отсутствующие this 
      в методах объекта store
    */

    const store = {
      products: ['bread', 'cheese', 'milk', 'apples'],
      managers: ['poly', 'mango', 'ajax'],

      addManager(manager) {
        this.managers.push(this.manager);

        console.log(this.managers);
      },
      removeManager(manager) {
        const idx = this.managers.indexOf(this.manager);

        this.managers.splice(idx, 1);

        console.log(this.managers);
      },
      getProducts() {
        console.log(this.products);

        return this.products;
      }
    }

    store.addManager('chelsey'); // ['poly', 'mango', 'ajax', 'chelsey']

    store.removeManager('mango'); // ['poly', ajax', 'chelsey']

    store.getProducts(); // ['bread', 'cheese', 'milk', 'apples']


    // ======================tassk 8 =================

    /*  
      Расставьте отсутствующие this в конструкторе объектов Account
    */

    function Account({
      login,
      password,
      type = 'regular'
    }) {
      this.login = login;
      this.password = password;
      this.type = type;

      this.changePassword = function (newPassword) {
        this.password = newPassword;

        console.log(password);
      };

      this.getAccountInfo = function () {
        console.log(`
      Login: ${this.login}, 
      Pass: ${this.password}, 
      Type: ${this.type}
    `);
      };
    };

    const account = new Account({
      login: 'Mango',
      password: 'qwe123',
      type: 'premium'
    });

    console.log(account.login); // 'Mango'
    console.log(account.password); // 'qwe123'
    console.log(account.type); // 'premium'

    console.log(account.changePassword('asdzxc')); // 'asdzxc'

    console.log(
      account.getAccountInfo()
    ); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'