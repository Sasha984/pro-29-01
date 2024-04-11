//Створіть рядок, який містить слова, розділені пробілами. Використайте метод split, щоб розбити рядок на масив слів. Виведіть отриманий масив у консоль у верхньому регістрі.

let transform = `Garry Hank Artur`;
let newtransform = transform.split (' ');
let arr = newtransform.map (element => {
    return element.toUpperCase ();
});
console.log (arr);


//Перевірка Високосного Року. Реалізуйте функцію, яка перевіряє, чи є рік, заданий датою, високосним.

function proveYear(year) {
    let feb29 = new Date(year, 1, 29);
    if (feb29.getMonth() === 1 ) {
        console.log(`Год высокосный`);
    } else {
        console.log(`Год не высокосный`);
    }
}

let promptYear = Number(prompt(`Укажите год`))

proveYear(promptYear)

//Отримання Назви Місяця. Напишіть функцію, яка приймає об'єкт Date і повертає назву місяця англійською мовою.

let myDate = new Date();
console.log(myDate.getMonth());
let month = ['January', 'February', 'March', 'April', 'May', 'Jun', 'July', 'August', 'Septmber', 'October', 'November', 'December']

function theMonth(a,array) {
    
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (i === a.getMonth()) {
           console.log(`Month is ${array[i]}`);
        }
    }
}
theMonth(myDate, month)

//Додавання Днів до Дати. Створіть функцію, яка додає певну кількість днів до заданої дати і повертає нову дату.

function addDay (day) {
    let newDate = new Date (2024, 3, 9 + day)
    console.log (newDate)
}
addDay (2);

//Cтворіть список ul з 5 елементами li всередині. За допомогою querySelector виберіть:

//- перший елемент списку
let ulEl = document.querySelector('li:first-child');
console.log(ulEl);

// - останній елемент списку
let lastUlEl = document.querySelector('li:last-child');
console.log(lastUlEl);

// - 3 елемент списку
let thirdUlEl = document.querySelector('ul :nth-child(3)');
console.log(thirdUlEl);

// За допомогою querySelectorAll
// - всі елементи li в списку

let allEl = document.querySelectorAll('li');
console.log(allEl);

// - конвертуйте вибрані елменти в массив

let liElement = Array.from(allEl)
    console.log(liElement);

//Створіть на сторінці елемент який вибирається ціми селекторами
let listItems = document.querySelectorAll('ul.list > li');
let listItem = document.querySelectorAll('li:nth-child(2)');
