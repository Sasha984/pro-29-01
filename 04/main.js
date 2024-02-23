//Створіть функцію wellcomUser, яка приймає масив і функцію-колбек hiUser яка виводить в console ('Вітаю ${user}'), і викликає цю функцію для кожного елемента масиву.

let username = `user`;
let array = [1,2,3,4,5]

function hiUser(){
    console.log(`Вітаю ${username}`)
}

function wellcomUser(array, callback){
    for(let i = 0; i<array.length; i++){
        hiUser()
    }
}
wellcomUser(array, hiUser)

//Стрілкові функції. Перепишіть попередню функцію в стрілкову. Перепишіть стрілкову функцію в звичайну const multiplyValues = (a, b, c) => a * b * c;

hiUser1 = () => {console.log(`Вітаю ${username}`)};

wellcomeUser1 = (array, callback) => {for(let i = 0; i < array.length; i++) { hiUser1(username[i]);}}; 

wellcomeUser1(array, hiUser);



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

function pushOperation(array){
    for(let i = 0; i<newArray.length; i++){
        emptyAr.push(newArray[i])
    }
    console.log(emptyAr)
}
pushOperation(newArray)

//Створіть масив і використайте метод pop, щоб видалити останній елемент з масиву.

let popAr = [10,20,30,40,50];

popAr.pop()
console.log(popAr)

// Напишіть функцію, яка приймає масив і використовує pop для видалення останнього елемента масиву.

let secondpopAr = [4,7,2,9,3];

function popOperation(array){

        secondpopAr.pop()

    console.log(secondpopAr)
}
popOperation(secondpopAr)

//Створіть масив і використайте метод unshift, щоб додати елементи в початок масиву.

let toys = [];

toys.unshift(`car`);
toys.unshift(`doll`);
toys.unshift(`soft toy`);

console.log(toys)

//Напишіть функцію, яка приймає масив і елемент, і використовує unshift для додавання цього елемента в початок масиву.

let productlist = [`milk`, `cabage`, `water`];

function unshiftOperation(array){

        productlist.unshift(`cucumbers`)

    console.log(productlist)
}
unshiftOperation(productlist)

//Створіть масив і використайте метод shift, щоб видалити перший елемент з масиву.

let books = [`bookAboutChildren`, `bookAboutAnimals`, `bookAboutHistory`];

books.shift();
console.log(books);

//Напишіть функцію, яка приймає масив і використовує shift для видалення першого елемента масиву.

let toDoList = [`go out`, `reading`, `eating`];

function shiftOperation(array){

        toDoList.shift()

    console.log(toDoList)
}
shiftOperation(toDoList)

//Cтворіть новий массив за допомогою методів розглянутих на уроці в якому видалені всі  значення "Remove"  з масиву  - ["Keep", "Remove", "Keep", "Remove", "Keep", "Keep", "Remove", "Remove"] в результаті повинен бути ось такий новий массив ["Keep", "Keep", "Keep", ...]

let removeAr = ["Keep", "Remove", "Keep", "Remove", "Keep", "Keep", "Remove", "Remove"];

let newReomoveAr = removeAr.fill(`Keep`, 0, 8);

console.log(removeAr)

//Написати цикл який замінює відємне значення в масиві на 0  let checkArr = [69, 96, -66, 77, 85, -85, 14, -20, 90, -36] 

let checkArr = [69, 96, -66, 77, 85, -85, 14, -20, 90, -36];

for (let i = 0; i < checkArr.length; i++) {
      
    let element = checkArr[i];
    
      if (checkArr[i]<0) {
         checkArr[i]=0
       }
       else{
        checkArr[i]>0
       }
     }
 console.log(checkArr);
    

//Створити цикл який виводить значення в консоль в такому форматі "Сьогодні ....  у вас такі плани .." для данних використовує два массива let days = ["Понеділок", "Середа", "Неділя"] let plans = ["Урок 03", "Урок 04", "Вихідни"]

let days = ["Понеділок", "Середа", "Неділя"];
let plans = ["Урок 03", "Урок 04", "Вихідни"];

function dayPlan(dayAr, planAr){
    if (dayAr.length === planAr.length) {
        for (let i = 0;  i< dayAr.length; i++) {
            console.log(`Сьогодні ${dayAr[i]} y вас такі плани ${planAr[i]}`)
        }
    }
    else{
        console.log(`У вас нет планов`)
    }
}

dayPlan(days, plans)