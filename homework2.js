// Решение задачи с удалением из массива
const users = ['Jack', 'Mariah', 'Sarah', 'Jonathan', 'Piere', 'Bob', 'Samantha', 'Mary'];
const shortNames = [];


// solution
users.forEach((user, index) => {
    if (user.length <= 5) {
        shortNames.push(user);
    }
})
shortNames.forEach(user => {
    let index = users.indexOf(user);
    users.splice(index, 1);
})

console.log(users);
console.log(shortNames);



// Напишите функцию, которая для каждого имени в массиве
// выведет в консоль строку 
// Hello ИМЯ. Your name is ДЛИНА characters long!
const names = ['Jack', 'Mariah', 'Sarah', 'Jonathan', 'Piere', 'Bob', 'Samantha', 'Mary'];


// напишите функцию которая примет объект в качестве аргумента
// Функция должна вернуть одну строку
// Your Honda Civic (is popular / is not popular). (It is not / it is) covered by warranty anymore!
// Вывод в скобках (is popular) зависит от свойства popular в объекте (т.е. если False то пишем что не популярная)
// Вывод в скобках (Is covered by warranty) зависит от свойства mileage (т.е. если больше или равно 100000 то нет гарантии)
const myCar = {
    make: 'Honda',
    model: 'Civic',
    popular: true,
    mileage: 100000
}



// Напишите функцию которая принимает два числа в качестве аргумента
// Если число отрицательное, то приводит его к положительному (-10 => 10)
// И складывает их



// Напишите функцию, которая складывает только положительные числа
// если одно из чисел отрицательное, то выводит строку (одно из чисел негативное
