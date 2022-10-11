// Create an object
// const myCar = {
//     make: 'Honda',
//     model: 'Civic',
//     mileage: 20000
// }

// console.log(myCar.mileage);


// Add to object
// const myCar = {
//     popular: true
// }

// myCar.make = 'Honda';
// myCar.model = 'Civic';

// console.log(myCar.make);


// change/delete object
// const myCar = {
//     make: 'Honda',
//     model: 'Civic',
//     popular: true
// }

// myCar.mileage = 20000;
// myCar.popular = false;
// delete myCar.model;

// console.log(myCar);

// // access object properties with []
// const myCar = {
//     make: 'Honda',
//     model: 'Civic'
// }

// const carPopularity = 'popular';
// myCar[carPopularity] = true;
// console.log(myCar);
// console.log(myCar['make']);
// console.log(myCar.make);
// console.log(myCar.color);


// // Nested objects
// const myCar = {
//     make: 'Honda',
//     model: 'Civic',
//     info: {
//         mileage: 20000,
//         color: 'green'
//     }
// }

// console.log(myCar['info']['color']);

// delete myCar.info.color;
// console.log(myCar);


// Using varialbes in objects
// const userName = 'Terminator';
// const friendsQty = 10000;

// const userProfile = {
//     userName,
//     friendsQty
//     // name: userName,
//     // friends: friendsQty
// }

// console.log(userProfile);


// JavaScript mutations (JSON copying object)
// let a = 10;
// let b = a;
// a += 10;
// b += 20;
// console.log(a);
// console.log(b);

// const person = {
//     name: 'Jack',
//     surname: 'Smith',
//     age: 25
// }

// const person2 = person;
// person.age = 30;
// person2.name = 'Mary';

// console.log(person);
// console.log(person2);

// const person3 = JSON.parse(JSON.stringify(person));
// console.log(person3);
// console.log(typeof person3);
// person3.name = 'Bob';
// person.name = 'Sarah';
// console.log(person3);
// console.log(person);

// const jsonString = '{"name":"Sarah","surname":"Smith","age":30}';
// console.log(JSON.parse(jsonString));


// // Object split operator
// // Sample 1
// const button = {
//     width: 200,
//     text: 'Buy'
// }

// const buttonGreen = {
//     ...button,
//     color: 'green'
// }
// console.log(buttonGreen);


// // Sample 2
// const button = {
//     width: 200,
//     text: 'Buy',
//     color: 'green'
// }

// const buttonRed = {
//     ...button,
//     color: 'red'
// }
// console.log(buttonRed);

// const buttonYellow = {
//     color: 'yellow',
//     ...button
// }
// console.log(buttonYellow);


// // Array
// const numbers = ['one', 'two', 'three', 'four'];
// const numbers2 = numbers;
// numbers[0] = 'ten';
// console.log(numbers2);
// console.log(numbers);


// // length of an Array
// const numbers = ['one', 'two', 'three', 'four', 'five'];
// console.log(numbers.length);

// numbers.length = 10;
// console.log(numbers);


// // Mixed arrays
// const a = 100;
// const mixArr = ['Hello', 123.12331, true, null, undefined, NaN, a, [1, [7, 'one', 9], 2, 3], {name: 'Jack', age: 30}];
// console.log(mixArr[8]);
// console.log(mixArr.length);

// console.log(mixArr[7][1][1].toUpperCase());
// console.log(mixArr[8]['name'][1]);

// const person = {
//     name: 'Jack',
//     age: 30
// }

// console.log(person.name[1]);


// // Array methods
// const tester = [1, 2, 3];
// tester[3] = 10;
// console.log(tester);
// console.log(tester.length);
// tester[0] = 777;
// console.log(tester);
// console.log(tester.length);
// tester[10] = 999;
// console.log(tester);
// console.log(tester.length);


// const tester = [1, 2, 3];

// tester.push([123, 321]);
// tester.push('one');
// console.log(tester.length);
// console.log(tester);

// const a = tester.pop();
// console.log(a);
// console.log(tester.length)
// console.log(tester)


// // forEach()
// const myArr = [1, 2, 3, 4, 5];
// myArr.forEach(
//     num => {
//         console.log('Using', num);
//         console.log(num ** 2, 'Squared number!');
//         console.log(num * 3, 'Triple number!')
//         console.log();
//     }
// );


// // if, else if, else
// const name = 'Roman';
// if (name.length > 5) {
//     console.log(name, 'longer than 5 symbols');
// } else if (name.length < 5) {
//     console.log(name, 'shorter than 5 symbols');
// } else {
//     console.log(name, 'is 5 symbols long');
// }


// // Separate if statements
// const name = 'Roman!';
// if (name.length > 5) {
//     console.log(name, 'longer than 5 symbols');
// }
// if (name.length > 3) {
//     console.log(name, 'shorter than 5 symbols');
// }


// // Strict (===, !==) and non strict (==, !=)
// const a = 10;
// const b = '10';

// console.log(a == b);
// console.log(a === b);

// console.log(a != b);
// console.log(a !== b);


// forEach() with if statement
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const odds = [];
const evens = [];
arr.forEach(
    num => {
        if (num % 2 === 0) {
            console.log(num, 'is even!');
            evens.push(num);
        } else {
            console.log(num, 'is odd!');
            odds.push(num);
        }
    }
)
console.log('Evens', evens);
console.log('Odds', odds);