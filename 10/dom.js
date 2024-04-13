window.onload = function(){

//Завдання 'onMouseOver' і 'onMouseOut': Розмістіть зображення на сторінці,та додайте події де при наведенні курсору на зображення воно збільшується або підсвічується. Коли курсор миші покидає зображення, воно повертається до свого початкового розміру або стилю.

let divImg = document.querySelector('.image');
divImg.addEventListener('mouseover', function(){
    this.style.transform = 'scale(2)';
})
divImg.addEventListener('mouseout', function(){
    this.style.transform = 'scale(1)';
    this.style.border = 'none'
})

//Завдання 'onContextMenu'. Створіть елемент текстовий блок, на який при правому кліку миші замість звичайного контекстного меню браузера з'являється власне створене контекстне меню. Це меню може містити опції, як-от "вирівняти по центру", "вирівняти по правому центру", "вирівняти по лівому краю", "Приховати елемент".

let bigDiv=  document.querySelector('.position');
let div = document.querySelector('.menuEl');
let myUl = document.querySelector('.contextmenu');
let liFirst = document.querySelector('.contextmenu :nth-child(1)');
let liSecond = document.querySelector('.contextmenu :nth-child(2)');
let liThird = document.querySelector('.contextmenu :nth-child(3)');
let liForth = document.querySelector('.contextmenu :nth-child(4)');
let mybody = document.querySelector('body');


div.addEventListener ('contextmenu', function(e){
    e.preventDefault();
    myUl.style.display = 'inherit';
});

liFirst.addEventListener ('click', function(){
    bigDiv.style.display  ='flex';
    bigDiv.style.justifyContent  ='center';
});

liSecond.addEventListener ('click', function(){
    bigDiv.style.display  ='flex';
    bigDiv.style.justifyContent  ='flex-end ';
});

liThird.addEventListener ('click', function(){
   
    bigDiv.style.display  ='flex';
    bigDiv.style.justifyContent  ='flex-start';
});

liForth.addEventListener ('click', function(){
    div.style.display = 'none';
});

mybody.addEventListener ('dblclick', function(e){
    e.preventDefault();
    div.style.display = 'inherit';
});

    
//Завдання 'keyup': Створіть ігрове поле, де користувач може переміщати об'єкт (наприклад, квадрат або коло) за допомогою клавіш стрілок. Рух об'єкта повинен зупинятися, коли клавіша відпущена



let y = 0;
let x = 0;
let move = 10;
let part = document.querySelector('.part');

function moveShape(element){
    element.style.top = `${y}px`
    element.style.right = `${x}px`

}

document.addEventListener ('keydown', function(e){
    switch(e.key){
        case 'ArrowUp':
            y-=move;
            break;
        case 'ArrowRight':
            x-=move;
            break;
        case 'ArrowDown':
            y+=move;
            break;
        case 'ArrowLeft':
            x+=move;
            break;
    }
moveShape(part);
});

// v1
//Комбіноване завдання 'keydown' і 'keyup' для створення інтерактивного меню: Коли користувач натискає певну клавішу М and ctrl, з'являється  меню ul елемент в якому 3 li, При натиску клавіші ctrl K меню зникає.
    
let list = document.querySelector('.list');

document.addEventListener ('keydown', function(event){
    switch(event.key){
        case 'Control', 'm':
            event.preventDefault();
            list.style.display = 'inherit';
            break;
        case 'Control', 'k':
            event.preventDefault();
            list.style.display = 'none';
        break;
    }
});

}
