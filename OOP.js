//=========================================================Лекція====================================================
class Human {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }

    greeting() {
        console.log(`Hey, my name is ${this.name}, I'm ${this.age} old`);
    }

    getName(newName) {
        this.name = newName;
    }
}

let xxx = new Human("Mykhailo", "male", 28);
let yyy = new Human("Ira", "female", 34);

// xxx.greeting();
// yyy.greeting();

class Delevoper extends Human {
    constructor(name, gender, age, skill, reward) {
        super(name, gender, age);
        this.skill = skill;
        this.reward = reward;
    }

    work(hours) {
        console.log(`I'm codding ${this.skill} every day ${hours} hour per day `);
    }

    reiseReward(money) {
        const maxReward = this.reward * 1.1;

        if (money > maxReward) {
            throw new Error("Find new job");
        } else {
            this.reward = money;
        }
    }
}

let roman = new Delevoper("romko", "male", 29, "CSS", 1000);

roman.reiseReward(1100);

//=========================================!!===function class==!!==prototype====!!============================
function Looser(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;

    //   this.greeting = () => {
    //     console.log(`hello my name is ${this.name}`);
    //   };
}

Looser.prototype.greeting = function () {
    console.log(`hello my name is ${this.name}`);
};

let loo = new Looser("ivan", "male", 2);

//loo.greeting();

function Dev(name, gender, age, skill) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.skill = skill;
}

//Dev.prototype = Looser.prototype;
Dev.prototype = Object.create(Looser.prototype);
//Dev.prototype.__proto__ = Looser.prototype;

Dev.prototype.work = function (hours) {
    console.log(`I am coding ${this.skill} ${hours} hour per day`);
};

let moo = new Dev("Devan", "male", 10, "HTML");
//console.log(moo);
//moo.greeting();
//moo.work(4);

//======================================================================

function Hamster(name) {
    this.name = name;
    this.stomach = [];
}

//Hamster.prototype.stomach = []; for all Hamsters

Hamster.prototype.findFood = function (food) {
    this.stomach.push(food);
};

let morison = new Hamster("morison");
let ivoko = new Hamster("ivoko");

morison.findFood("apply");
morison.findFood("bread");
morison.findFood("beer");
ivoko.findFood("Grape");

//console.log(morison.stomach);
//console.log(ivoko.stomach);

//======================================================Homework=================================

// 1.создать класс которы описывает машину. класс должен содержать 5-6 полей и функцию info()
// которая выводит инфрмацию про экземпляр класса (объект который вы создали)
// создать 10 различных экземпляров
// 2. Унаследовать класс Car в классе SuperCar. Добавить 3 новых поля.
// создать 10 различных экземпляров

//----------------------------------------

// взять за основу класс юзера из задания про классы добавить при помощи prototype 4 любых метода.

// Взять библиотечный класс Array и добавить ему новый метод который
// - при вызове выводит на консоль текущий массив
// - выводит только парные елементы
// - выводит только элементы с парными индексами
class Cars {
    constructor(models, power, maxSpeed, price, year) {
        this.models = models;
        this.power = power;
        this.maxSpeed = maxSpeed;
        this.price = price;
        this.year = year;
    }

    info() {
        console.log(
            `information about car: models: ${this.models}, horse power: ${this.power} , max speen on roads: ${this.maxSpeed}, price for this car: ${this.price} and year: ${this.year}`
        );
    }
}

let car1 = new Cars("bmw", 20, 300, "200k", 2019);
let car2 = new Cars("opel", 10, 200, "20k", 1998);
let car3 = new Cars("volvo", 15, 350, "250k", 2020);
let car4 = new Cars("tazik", 5, 30, "100k", 1990);
let car5 = new Cars("yazik", 12, 80, "150k", 2000);
let car6 = new Cars("drindik", 15, 90, "500k", 2007);
let car7 = new Cars("velik", 7, 220, "170k", 2009);
let car8 = new Cars("porshe", 10, 120, "80k", 1993);
let car9 = new Cars("mercedes", 29, 310, "40k", 1991);
let car10 = new Cars("olen", 22, 100, "50k", 2018);

class SuperCar extends Cars {
    constructor(models, power, maxSpeed, price, year, location, color, discount) {
        super(models, power, maxSpeed, price, year);
        this.location = location;
        this.color = color;
        this.discount = discount;
    }
}

let superCar1 = new SuperCar(
    "ChortCar",
    100,
    666,
    "666k",
    666,
    "hell",
    "black",
    "66.6%"
);
let superCar2 = new SuperCar(
    "bimbatazik",
    2,
    60,
    "20k",
    2001,
    "lviv",
    "purple",
    "10%"
);
let superCar3 = new SuperCar(
    "dichtarataika",
    40,
    120,
    "100k",
    2004,
    "odessa",
    "gray",
    "20%"
);
let superCar4 = new SuperCar(
    "zxtazik",
    50,
    220,
    "50k",
    2010,
    "kiev",
    "green",
    "15%"
);
let superCar5 = new SuperCar(
    "boyscar",
    14,
    200,
    "150k",
    2011,
    "lviv",
    "white",
    "10%"
);
let superCar6 = new SuperCar(
    "girslcar",
    16,
    90,
    "40k",
    2009,
    "rivne",
    "pink",
    "50%"
);
let superCar7 = new SuperCar(
    "pizzacar",
    22,
    90,
    "16k",
    2000,
    "kolomiya",
    "yellow",
    "40%"
);
let superCar8 = new SuperCar(
    "camaro",
    80,
    340,
    "456k",
    1997,
    "kiev",
    "blue",
    "10%"
);
let superCar9 = new SuperCar(
    "shewrole",
    130,
    120,
    "50k",
    1990,
    "lviv",
    "red",
    "15%"
);
let superCar10 = new SuperCar(
    "GodCar",
    100,
    777,
    "777k",
    777,
    "sky",
    "white",
    "99.9%"
);

//============================================================================================
// на основе предыдущего задания создать классы которые описывают
// - Продукт
// - категорию
// - Магазин

class Products {
    constructor(fruits, vegetables, candy) {
        this.fruits = fruits;
        this.vegetables = vegetables;
        this.candy = candy;
    }
}

//===================================================================================================

// взять за основу класс юзера из задания про классы добавить при помощи prototype 4 любых метода.

// Взять библиотечный класс Array и добавить ему новый метод который
// - при вызове выводит на консоль текущий массив
// - выводит только парные елементы
// - выводит только элементы с парными индексами

// let num = new Array();
// Array.prototype.addnum = function AddNum() {
//   for (let i = 0; i < 50; i++) {
//     this.push(Math.round(Math.random() * (100 - 1) + 1));
//   }
// };

// Array.prototype.logarr = function logArr() {
//   console.log(this);
// };

// Array.prototype.logpar = function logPar() {
//   for (let i in this) {
//     if (this[i] % 2 === 0) {
//       console.log(this[i]);
//     }
//   }
// };
// Array.prototype.logindex = function logIndex() {
//   for (let i in this) {
//     if (i % 2 === 0) {
//       console.log(this[i]);
//     }
//   }
// };

// num.addnum();
// num.logarr();

//=====================CLASSWORK========================

// 1.создать класс которы описывает Пользователя. класс должен содержать 7-9 полей и функцию toString()
// которая возвращает инфрмацию про экземпляр класса.
// создать 10 различных экземпляров.
// - создать сортировку по каждому полю отдельно
// - создать фильтрацию по каждому полю отдельно (протокол фильтрации придумать самостоятельно. он будет зависить от ваших полей)

class Users {
    constructor(name, surname, age, gender, color) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.gender = gender;
        this.color = color;
    }

    toString() {
        console.log(
            `${this.name} ${this.surname} ${this.age} ${this.gender} ${this.color}`
        );
    }

    toObject() {
        console.log(this);
    }
}

let user1 = new Users("Mykhailo", "Sikora", 28, "male", "white");
let user2 = new Users("Ivan", "Kater", 38, "male", "white");
let user3 = new Users("Irina", "Selera", 58, "female", "white");
let user4 = new Users("Sergio", "Moons", 20, "male", "white");
let user5 = new Users("Oksana", "Door", 20, "female", "white");
let user6 = new Users("Nazar", "Viter", 30, "male", "white");
let user7 = new Users("Mykola", "Nilov", 31, "male", "white");
let user8 = new Users("Ihor", "Ihovick", 33, "male", "white");
let user9 = new Users("Sonya", "Bol", 25, "female", "white");
let user10 = new Users("Kolya", "Sik", 22, "male", "white");
let user11 = new Users("Ziko", "Zako", 8, "male", "black");
let user12 = new Users("Abib", "Zuzu", 9, "male", "black");

const userArray = [
    user1,
    user2,
    user3,
    user4,
    user5,
    user6,
    user7,
    user8,
    user9,
    user10,
    user11,
    user12
];

function sort(userArray) {
    return userArray.sort((a, b) => a.age - b.age);
}

//console.log(sort(userArray));
function filterAge(userArray) {
    return userArray.filter(value => value.age < 25); // by age
}

function ABC(userArray) {
    return userArray.sort((a, b) => {
        // by abc
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        if (nameA < nameB) {
            return -1;
        } else if (nameA > nameB) {
            return 1;
        } else {
            return 0;
        }
    });
}

//console.log(ABC(userArray));

function filterLetter(userArray) {
    return userArray.filter(value => value.name.includes("k")); // by letter
}

//console.log(filterABC(userArray));

///=====================================================================NEXT=====

// Взять библиотечный класс Array и добавить ему новый метод который
// - выводит наименьший числовой элемент массива
// - выводит наименьший по размеру строчный элемент массива
// - выводит только объекты у которых присутствует поле id
//--------------------------------------------------------------------------
// Array.prototype.minNum = function() {
//   let min = 0;
//   for (let i of this) {
//     if (i > min) {
//       min = i;
//     }
//   }
// };
// [1, 2, 3, 4, 5].minNum();
//--------------------------------------------------------------------------
//let n = [5, 3, 8, 22, 6, 5, 3, 100, 1];
// =================================================MAX AND MIN NUMBERS FROM ARRAY ============
Array.prototype.maxmin = function () {
    let max = this[0];
    let min = this[0];
    for (let i = 0; i < this.length; i++) {
        if (this[i] > max) {
            max = this[i];
        } else {
            min = this[i];
        }
    }
    console.log(`Max number of array: ${max}`);
    console.log(`Min number of array: ${min}`);
};
//[2, 4, 5, 3, 100, 1].maxmin();
[-5, -7, -9].maxmin();

// =================================================MIN NUMBER FROM ARRAY ============
Array.prototype.min = function () {
    let min = this[0];
    for (let i = 0; i < this.length; i++) {
        if (this[i] < min) {
            min = this[i];
        }
    }
    console.log(min);
};
//[2, 4, 5, 3, 100, 1, 0].min();

// Создаем свои методы map, filter, foreach
// для класса Array, добовляя их через prototype
const numbers = [1, 4, 7, 3, 44, 6, 78, 34, 12];
Array.prototype.myforEach = function (callback) {
    for (let i of this) {
        callback(i);
    }
};
[1, 2, 3, 4, 5, 6, 7, 8, 9].myforEach(function (xxx) {
    // console.log(xxx);
});

Array.prototype.myFilter = function (callback) {
    let newArray = [];
    for (let el of this) {
        if (callback(el)) {
            newArray.push(el);
        }
    }
    return newArray;
};

let x = numbers.myFilter(function (xxx) {
    return xxx > 10;
});
//console.log(x);

Array.prototype.myMap = function (callback) {
    let newAr = [];
    for (let element of this) {
        if (callback(element)) {
            newAr.push(element);
        }
    }
    return newAr;
};

let y = numbers.myMap(function (yyy) {
    return yyy < 10;
});

//console.log(y);

Array.prototype.shortest = function () {
    let res = this[0];
    for (let i = 1; i < this.length; i++) {
        if (typeof (this[i]) === 'string' && this[i].length < res.length) res = this[i];
    }
    return res;
};

let shorter = shortest
// ==================================================================NEXT
// Хто зробив усі завдання, тримайте ще:

// створити класс попелюшка з полями ім'я, вік, розмір ноги
//   Створити 10 попелюшок
//   Сторити об'єкт класу "принц" який має поля ім'я, вік, туфелька яку він знайшов.
//   Знайти яка попелюшка його)

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    constructor(name, findSize) {
        this.name = name;
        this.findSize = findSize;
    }

    findCinderella(someValue) {
        return someValue.filter(value => {
            if (value.footSize === this.findSize) {
                console.log(value);
            }
        });
    }
}

let girl1 = new Cinderella("Ira", 22, 35);
let girl2 = new Cinderella("Katya", 29, 40);
let girl3 = new Cinderella("Nadya", 27, 43);
let girl4 = new Cinderella("Nastya", 23, 29);
let girl5 = new Cinderella("Vira", 25, 30);
let girl6 = new Cinderella("Oksana", 30, 32);
let girl7 = new Cinderella("Masha", 18, 45);
let girl8 = new Cinderella("Nina", 22, 30);
let girl9 = new Cinderella("Nika", 19, 36);
let girl10 = new Cinderella("Vika", 20, 37);

let girlsArr = [
    girl1,
    girl2,
    girl3,
    girl4,
    girl5,
    girl6,
    girl7,
    girl8,
    girl9,
    girl10
];

let boy = new Prince("Mykhailo", 45);

//boy.findCinderella(girlsArr);

class Category {
    constructor(name) {
        this.name = name;
        this.arr = [];
    }

    addProd(somthing) {
        this.arr.push(somthing);
    }
}

let cereals = new Category("cereals");
let fruits = new Category("fruits");

cereals.addProd("rise");
fruits.addProd("apply");

// console.log(cereals);
// console.log(fruits);
