window.onload = function(){

//1. onclick. Створіть кнопку та елемент Р з текстом,при кліку на кнопку текст змінює колір.

function randomColor(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
}

let textColor = document.querySelector ('p');
let firstbtn = document.querySelector ('.onclick');
firstbtn.onclick = function(){
    textColor.style.color = randomColor();
};


// 2. ondblclick. Створіть елемент, який при подвійному кліку збільшує свій розмір в 2 рази ( змінюємо width i height).

let secondbtn = document.querySelector ('.x2');  

secondbtn.ondblclick = function(){
    let mywidht = secondbtn.offsetWidth;
    let myheight = secondbtn.offsetHeight;
    mywidht=mywidht*2;
    myheight=myheight*2

    secondbtn.style.width = `${mywidht}px`;
    secondbtn.style.height = `${myheight}px`;

};

// 3. addEventListener і removeEventListener. Створити кнопку і текстовий елемент в якому розмість лічільник: 0,при кліку на кнопку в текстовому значенні повино збільшуватись значення на 1. Коли значення лічильника перевищує 10, кнопка перестає реагувати на кліки.


let counterBtn = document.querySelector('.counter');
let divEl = document.querySelector('.divEl');
let countNumb = 0;

counterBtn.addEventListener ('click', function(){
    countNumb+=1;
    divEl.innerHTML = `Counter <strong>${countNumb}</strong>`;
    if ( countNumb === 10) {
        counterBtn.disabled = true;
    }
});


// 4. Створіть веб-сторінку з кнопкою та 10 елементами (наприклад, div). Підключіть обробник події onclick до кожного елементу. Коли користувач натисне на елемент,цей елемент має бути видалений зі сторінки

let manyEl = document.querySelector('.manyEl');
let divs = document.querySelector('.manyEl div');
let thirdbtn = document.querySelector('.delete');

thirdbtn.addEventListener('click', function(){
    manyEl.firstElementChild.remove();
});

}
