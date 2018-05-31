'use strict';

/*
  Создайте менеджер управления данными аккаунтов пользователей соцсети SocialBook.
  
  ОБЯЗАТЕЛЬНО ПРИ ВЫПОЛНЕНИИ: 
    - написать функцию-конструктор создающую объект со свойствами и методами
    - при работе с коллекциями данных использовать функциональные методы массивов, никаких for и т. п.
  
  Для создания объекта используйте функцию-конструктор, принимающую следующие параметры:
    - users - массив пользователей. Каждый пользователь это объект с полями:
        id - уникальный идентификатор
        login - почта
        password - пароль
        isActive - статус активности
    - posts - объект с ключами равными id пользователя соцсети SocialBook. Значениями свойств 
      являются массивы постов пользователя. Каждый пост состоит из:
        id - уникальный идентификатор
        text - текст поста
        likes - количество лайков поста
*/

/*
  Используйте следующий массив пользователей при создании экземпляра SocialBook
*/
const initialUsers = [{
    id: "-s19a6hqce",
    login: "mangozedog@mail.com",
    password: "qwe123zv",
    isActive: true
  },
  {
    id: "-qkpzenjxe",
    login: "polysweet@skynet.ze",
    password: "123zxc78",
    isActive: true
  },
  {
    id: "-e51cpd4di",
    login: "ajax2k@change.ua",
    password: "ert234qw",
    isActive: false
  }
];

/*
  Используйте следующий объект постов пользователей при создании экземпляра SocialBook
*/
const initialPosts = {
  "-s19a6hqce": [{
      id: "-5sgljaskg",
      text: "post #1",
      likes: 3
    },
    {
      id: "-199hb6igr",
      text: "post #2",
      likes: 5
    },
    {
      id: "-hy0eyw5qo",
      text: "post #3",
      likes: 13
    }
  ],
  "-qkpzenjxe": [{
      id: "-5tu69g5rf",
      text: "post #1",
      likes: 8
    },
    {
      id: "-bje766393",
      text: "post #2",
      likes: 15
    }
  ],
  "-e51cpd4di": [{
      id: "-9y6nkmlj4",
      text: "post #1",
      likes: 18
    },
    {
      id: "-i03pbhy3s",
      text: "post #2",
      likes: 45
    }
  ],
};



function SocialBook(users = [], posts = {}) {

  this.users = users;
  this.posts = posts;

  this.getId = () => "-" + Math.random().toString(36).substr(2, 9);
  this.getAllUsers = () => {
    return this.users.map(user => user)
  };
  this.getUserByLogin = login => this.users.find(user => user.login === login);
  this.getUserStatus = function (userId) {
    return this.users.find(users => users.id === userId).isActive ? 'active' : 'inactive';
  };
  this.addUser = user => {

    let check = this.users.find(users => this.users.login === user.login);
    if (!check) {
      user.id = this.getId();
      user.isActive = false;
      this.users.push(user);
    }

  }
  this.removeUserById = userId => {
    this.users = this.users.filter(users => users.id !== userId);
  };
  this.getUserCount = () => {
    return this.users.length
  };

}

const socialBook = new SocialBook(initialUsers, initialPosts);


/*
  Для создания уникального идентификатора для поля id, используйте 
  вспомогательную функцию getId(), возвращающую уникальную строку.
  
  К примеру: const user = { id: getId(), name: 'Mango' };
*/


/*
  Добавьте в SocialBook следующие методы для работы с пользователями:
    - getAllUsers() - возвращает массив всех пользователей
    
    - getUserByLogin(login) - ищет и возвращает объект пользователя с совпадающим логином
    
    - getUserStatus(userId) - ищет пользователя по id и возвращает 'active' 
      если isActive true, в противном случае возвращает 'inactive'.
      
    - addUser(user) - принимает объект user с полями email и password и добавляет 
      ему поля id(используя функцию getId) и isActive (false). Затем добавляет пользователя в 
      свойство users самого экземпляра.
          
    - removeUserById(userId) - удаляет пользователя из массива пользователей по полю id
    
    - getUsersCount() - возвращает общее количество пользователей
*/