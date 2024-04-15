window.onload = function(){
    //Завдання 1: Конвертер валют
    //Мета: Створити простий конвертер валют, який перетворює введені користувачем гроші з однієї валюти в іншу.
    
    let myForm = document.querySelector('form');
    let usd = document.querySelector('#usd');
    let uah = document.querySelector('#uah');
    let change = document.querySelector('#change');
    let UAH = document.querySelector('#inuah');
    let USD = document.querySelector('#inusd');

    myForm.addEventListener('submit', function(e){  
    e.preventDefault();
    let uahValue = e.target['uah'].value;
    let usdValue = e.target['usd'].value;
    if(uahValue!=0 && usdValue.length ==0 && uahValue>0 ){
        UAH.innerHTML= 'Это '+uahValue/40 +'USD';
        UAH.style.display = 'inherit';
        USD.style.display = 'none';
    }
    else if (usdValue!=0 && uahValue.length ==0 && usdValue>0){
        USD.innerHTML= 'Это '+usdValue*40 +'UAH';
        USD.style.display = 'inherit';
        UAH.style.display = 'none';
    }
    else{
        alert('Введите или USD, или UAH');
    }
    });









// 2) Створіть слайдер ( зображення що міняє картинку ) кожні 3 секунди,  коли курсор наведено на зображення слайдер зупиняється, коли покидає зображення розпочинає роботу


    let images = ['./img/lion.jpg','./img/lion2.jpg','./img/lion3.jpg','./img/lion4.jpg'];
    
    let Img = document.querySelector('img');

    let curentIndex = 0;

    function newPic(){
        curentIndex += 1;
        if(curentIndex >= images.length){
            curentIndex = 0;
        }
                        
        document.querySelector('img').src = images[curentIndex];
    }

    let slider = setInterval(newPic, 2000); 

    Img.addEventListener('mouseleave', function(){
        slider = setInterval(newPic, 2000);

    });

    Img.addEventListener('mouseenter', function(){
        clearInterval(slider);

    });
    


}