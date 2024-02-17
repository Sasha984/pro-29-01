//Дописати реалізацію  калькулятора розглянутого на уроці за допомогою if і else if при спробі поділити на 0 виводити alert з попередженням. Повині бути команди (додавання, множення, ділення, віднімання)

let firstUserNumber = Number(prompt("Выберите первое число"));
let secondUserNumber = Number(prompt("Выберите второе число"));
let userOperation = prompt("Выберите одну операцию: +, -, *, /");

function summ(firstnumber, secondnumber){
    console.log(`${firstnumber} + ${secondnumber} = ${firstnumber + secondnumber}`)
}
function minus(firstnumber, secondnumber){
    console.log(`${firstnumber} - ${secondnumber} = ${firstnumber - secondnumber}`)
}
function multiplication(firstnumber, secondnumber){
    console.log(`${firstnumber} * ${secondnumber} = ${firstnumber * secondnumber}`)
}
function division(firstnumber, secondnumber){
    console.log(`${firstnumber} / ${secondnumber} = ${firstnumber / secondnumber}`)
    if (secondUserNumber == 0) {
        alert("На ноль делить нельзя!")
    }
}
switch (userOperation) {
    case "+":
        summ(firstUserNumber, secondUserNumber)
        break;
        case "-":
        minus(firstUserNumber, secondUserNumber)
        break;
        case "*":
        multiplication(firstUserNumber, secondUserNumber)
        break;
        case "/":
        division(firstUserNumber, secondUserNumber)
        break;
    default:
        break;
}

//За допомогою циклу вивести в консоль всі парні значення числа 20

for (let i = 2; i<=20; i++){
    if (i%2==1) {
        continue;
    }
    console.log(`${i}`);
}


//Зробити цикл який виводить дані навпаки від більшого до меншог. Наприклад від 10 до 0 (10, 9, 8, 7, 6 ...)

for (let i = 10; i > 0; i--) {
    console.log(`${i}`)
}

//Реалізуйте таблицю множення за допомогою циклу для конкретного числа (наприклад, для числа 5) за допомогою циклу for:

for (let i = 1; i <= 10; i++){
    console.log(`${i} * 6 = ${i * 6}` )
}

//Реалізуйте функцію яка отримує число і виводить в консоль лог таблицю множення цього чила перевірте роботу функцію викликавши функцію з різними значеннями.

let numberForTable = Number(prompt("Выберите число для таблицы умножения"));

for (let i = 1; i <= 10; i++){
    console.log(`${numberForTable} * ${i} = ${numberForTable * i}` )
}

//Створити switch  в якому є назви планет сонячної системи. Якщо користувач вводить назву планети сонячної системи то виводити ця планета в сонячній системі. Якщо такої планети нема то виводити: такої планети нема в сонячній системі

let planet = (prompt("Назовите планету"));

function mercury(planet){
    console.log(`${planet} находится в Солнечной системе`)
}
function venus(planet){
    console.log(`${planet} находится в Солнечной системе `)
}
function earth(planet){
    console.log(`${planet} находится в Солнечной системе `)
}
function mars(planet){
    console.log(`${planet} находится в Солнечной системе `)
}
function jupiter(planet){
    console.log(`${planet} находится в Солнечной системе `)
}
function saturn(planet){
    console.log(`${planet} находится в Солнечной системе `)
}
function uranus(planet){
    console.log(`${planet} находится в Солнечной системе `)
}
function neptune(planet){
    console.log(`${planet} находится в Солнечной системе `)
}




switch (planet) {
    case "Меркурий":
        mercury(planet)
        break;
        case "Венера":
        venus(planet)
        break;
        case "Земля":
        earth(planet)
        break;
        case "Марс":
        mars(planet)
        break;
        case "Юпитер":
        jupiter(planet)
        break;
        case "Сатурн":
        saturn(planet)
        break;
        case "Уран":
        uranus(planet)
        break;
        case "Нептун":
        neptune(planet)
        break;
    default:
        console.log("Такой планеты нет в Солнечной системе")
        break;
}
