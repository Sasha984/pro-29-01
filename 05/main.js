//Переишіть цей код використовуючи let const~
// Замість var
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Замість var
let message = 'test';
function example() {
    if (true) {
        let message = 'Hello, world!';
        console.log(message);
    }
    console.log(message); // Виведе 'Hello, world!'
}

example()

//Використовуючи for in  виведіть значення з обєктку в console.log
const person = {
    name: 'John',
    age: 25,
    occupation: 'Developer'
};

for(let key in person){
    console.log(`key: ${key} value: ${person[key]}`)
}

//Використовуючи for of  та for in  виведіть занчення з обєктів які знаходяться в масиві
const students = [
    { name: 'Alice', age: 20, grade: 'A' },
    { name: 'Bob', age: 22, grade: 'B' },
    { name: 'Charlie', age: 21, grade: 'C' }
];

let myobj = (obj) => {
	for (let key in obj) {
		console.log(key, obj[key]);
	}
}

let studentItem = (array, objItem) => {
	for (let element of array) {
		console.log(element);
		objItem(element);
	}
}

studentItem(students, myobj);

//Створіть масив чисел і використайте метод map, щоб створити новий масив, який містить квадрати кожного числа.
let equation = (a)=>a*a;
let arrayofnumb = [1,2,3,4,5].map(equation);
console.log(arrayofnumb);

//Напишіть функцію, яка приймає масив і функцію-перетворювач, і використовує map для створення нового масиву, в якому кожен елемент отримує  стрінг до значення 'new value'

let numberArr = [1,2,3,4,5];

let array = [9,2,3,8,6,7];

function mapMethod (array, callback){
    let newArr = array.map(value=>callback(value))
    return newArr;
}
let map = mapMethod (array, value=>`new value: ${value}`)

console.log(map)

//Напишіть функцію, яка використовує forEach для обчислення суми всіх елементів у масиві чисел. Масив наприклад const numberArr = [10,20,30]

const numberArrnew = [10,20,30];

let totalsumm = 0;

numberArrnew.forEach ( (number) => totalsumm = totalsumm + number);

console.log (totalsumm);