//Створіть функцію wellcomUser, яка приймає масив і функцію-колбек hiUser яка виводить в console ('Вітаю ${user}'), і викликає цю функцію для кожного елемента масиву.

let username = `user`;
let array = [1,2,3,4,5]

function hiUser(){
    console.log(`Вітаю ${username}`)
}

function wellcomUser(){
    for(let i = 0; i<array.length; i++){
        hiUser()
    }
}
wellcomUser()

//Стрілкові функції. Перепишіть попередню функцію в стрілкову. Перепишіть стрілкову функцію в звичайну const multiplyValues = (a, b, c) => a * b * c;

hiUser1 = () => {console.log(`Вітаю ${username}`)};

wellcomeUser1 = () => {for(let i = 0; i < array.length; i++) { hiUser1(username[i]);}}; 

wellcomeUser1();



function multiplyValues(a, b, c){

return a * b * c;

} 

//Створіть порожній масив та використайте метод push, щоб додати до нього кілька елементів (наприклад, чисел чи рядків).

let newNumberAr = [];
let numberAr = [1,2,3,4,5];

for(let i = 0; i<numberAr.length; i++){
    newNumberAr.push(numberAr[i]+5)
}
console.log(newNumberAr);

//Створіть функцію, яка приймає масив і елемент, і використовує push для додавання цього елемента до масиву.

let emptyAr = [];
let newArray = [1,2,3,4,5];

function pushOperation(){
    for(let i = 0; i<newArray.length; i++){
        emptyAr.push(newArray[i])
    }
    console.log(emptyAr)
}
pushOperation()

//Створіть масив і використайте метод pop, щоб видалити останній елемент з масиву.

let popAr = [10,20,30,40,50];

popAr.pop()
console.log(popAr)

// Напишіть функцію, яка приймає масив і використовує pop для видалення останнього елемента масиву.

let secondpopAr = [4,7,2,9,3];

function popOperation(){

        secondpopAr.pop()

    console.log(secondpopAr)
}
popOperation()

//Створіть масив і використайте метод unshift, щоб додати елементи в початок масиву.

let toys = [];

toys.unshift(`car`);
toys.unshift(`doll`);
toys.unshift(`soft toy`);

console.log(toys)

//Напишіть функцію, яка приймає масив і елемент, і використовує unshift для додавання цього елемента в початок масиву.

let productlist = [`milk`, `cabage`, `water`];

function unshiftOperation(){

        productlist.unshift(`cucumbers`)

    console.log(productlist)
}
unshiftOperation()

//Створіть масив і використайте метод shift, щоб видалити перший елемент з масиву.

let books = [`bookAboutChildren`, `bookAboutAnimals`, `bookAboutHistory`];

books.shift();
console.log(books);

//Напишіть функцію, яка приймає масив і використовує shift для видалення першого елемента масиву.

let toDoList = [`go out`, `reading`, `eating`];

function shiftOperation(){

        toDoList.shift()

    console.log(toDoList)
}
shiftOperation()

//Cтворіть новий массив за допомогою методів розглянутих на уроці в якому видалені всі  значення "Remove"  з масиву  - ["Keep", "Remove", "Keep", "Remove", "Keep", "Keep", "Remove", "Remove"] в результаті повинен бути ось такий новий массив ["Keep", "Keep", "Keep", ...]

let removeAr = ["Keep", "Remove", "Keep", "Remove", "Keep", "Keep", "Remove", "Remove"];
let newReomoveAr = removeAr.fill(`Keep`, 0, 8);

console.log(removeAr)

//Написати цикл який замінює відємне значення в масиві на 0  let checkArr = [69, 96, -66, 77, 85, -85, 14, -20, 90, -36] 

let checkArr = [69, 96, -66, 77, 85, -85, 14, -20, 90, -36];



//Створити цикл який виводить значення в консоль в такому форматі "Сьогодні ....  у вас такі плани .." для данних використовує два массива let days = ["Понеділок", "Середа", "Неділя"] let plans = ["Урок 03", "Урок 04", "Вихідни"]