//Створіть змінну  userNickname  і розмість там значення типу стрінг

let userNickname = "Tom";
console.log(userNickname);

//Створіть змінну типу userScore  і розмістіть там числове значення

let userScore = 10;
console.log(userScore);

//Отримайте через prompt 2 значення Ціна покупки  і кількість продуктів та порахуйте  загальну сумму до сплати. //Вирахуйте скільки буде знижка 5% від загальної суми  розразованох в попередньому завданні

let price = Number(prompt("Цена покупки"));
let numberofgoods = Number(prompt("Количество товаров"));
let totalprice = price*numberofgoods;
let percent = totalprice/100;
let discount = percent*5;
console.log("Скидка =", discount);
let newtotalprice = totalprice - discount;
console.log(newtotalprice);






