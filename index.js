// let person = {
//   name: "obj",
//   email: "test@email.ru",
//   password: '123123123'
// };
// for (key in person) {
//   console.log(person[key]);
// }
// // person. email = 'teste@email.ru'
// // // delete person.name
// // console.log(person);

// //[ spreed operator...]

// // let clonePerson = {
// //     ...person
// // }
// //[object assing]

// let test = {
//     test: 'test'
// }

// let clonePerson = Object. assing({}, person)
// clonePerson.name = 'Clone'

// let clonePerson = JSON.parse(JSON.stringify(person))
// clonePerson.pets.name = 'Sharik';
// console.log(clonePerson, person);

// ZADACHA 1
// Запрос у пользователя названия корабля
// let shipName = prompt("titanik");

// // Вывод названия корабля в консоль
// console.log(shipName);

// //   ZADACHA 2    
// // Запрос у пользователя текущего количества топлива в корабле
// let fuelLevel = prompt("100");

// // Преобразование значения в число
// fuelLevel = parseFloat(fuelLevel);

// // Вывод текущего количества топлива в консоль
// console.log(`100`);

// // ZADACHA 3
// let maxFuelLevel = prompt("200");
// console.log('200');

// // ZADACHA 4
// let shipSpeed = prompt("80");
// console.log('shipSpeed');

// // Уровень 2: "Начало путешествия"

// // Вывод сообщения о готовности корабля к вылету
// console.log("Корабль готов к вылету!");

// // ZADACHA2

// // Объявление переменной, которая хранит количество топлива в корабле
// let fuelAmount = 100;

// // Вывод сообщения о количестве топлива в корабле в консоль
// console.log("100 " + fuelAmount);

// const person = {
//     name: 
// }

// person.age = 5

// // 2 change
// person.name = 'Test2'

// // delete
// delete person.name

// // Spreed, assing, parse(str)

// // let myNewObj = structuredClone(person)
// // let myNewObj = {...person}
// // let myNewObj = Object

// let obj = Object. assign({})



const person = {
    name: 'Test',
    age: 25,
    email: 'test@mail.ru'
    // balance: 150

    // getBalanceResult () 
    //   {return 'bydjet ivana: ${person1.balance}$'}  
}

const person1 = {...person}
person1.name = 'Petya'
person1.balance = 500


const person2 = {...person}
person2.name = 'roma'
person2.balance = 1200


const person3 = {...person}
person3.name = 'Din'
person3.balance = 1500
person3.sayHello = function (){}
  return 'salam aleikum ${this.name}'

console.log(person);
console.log(person1.getBalanceResult());
console.log(person2.getBalanceResult());
console.log(person3.getBalanceResult());
console.log(person3. sayHello());







