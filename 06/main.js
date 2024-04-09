//1 Створення класу та об'єкта: Створіть клас Person з властивостями name та age. Створіть об'єкт з цього класу з ім'ям "John" та віком 30.
//2 Методи класу: Розширте клас Person, додайте метод sayHello, який виводить повідомлення з привітанням та ім'ям особи в console.log

class Person{
    constructor(name, age){
        this._name = name;
        this._age = age;
    }
    sayHello(){
        console.log(`Hello, ${this._name}!`)
    }
}

let man = new Person(`John`, 30);

console.log(man);
man.sayHello();

//3 Наслідування: Створіть клас Student, який наслідує від класу Person. Додайте властивість studentId до класу Student. Додайте метод study, який виводить повідомлення про студента

class Student extends Person{
    constructor(name, age, studentId){
        super(name, age);
        this._studentId = studentId;
    }
}

let student = new Student(`Bill`, 20, `university`);
console.log(student);
student.sayHello();
//4 Задачі для практики forEach, reverse  Виведіть значення з масиву в зворотньому порядку const numbers = [1, 2, 3, 4, 5];

const numbers = [1, 2, 3, 4, 5];

const reverse = numbers.reverse();
console.log(`Reversed array: ${reverse}`);

const reverseNumbers = [];

numbers.forEach((item, index, array) => {

	item = array.length - index;
	reverseNumbers.push(item);

});

console.log(reverseNumbers);


//5  Задачі для практики map та Math.round. Маєте масив чисел з плаваючою комою. Використовуйте map разом з Math.round, щоб створити новий масив, в якому кожне число буде округлене до найближчого цілого.

let array = [1.32, 4.64, 7.8];

let newarr = array.map(item => {
	return Math.round(item);
});

console.log(newarr);