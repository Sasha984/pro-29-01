window.onload = function(){

//Форма з вибором улюбленого кольору:
//Створіть форму з декількома радіокнопками, кожна з яких представляє різний колір (наприклад, червоний, зелений, синій).
//Використовуйте подію onchange для кожної радіокнопки, щоб змінювати колір фону сторінки відповідно до вибору користувача.

let colorFormEl = document.querySelector('.colorForm')
    let blueBtn = document.querySelector('#blue')
    let pinkBtn = document.querySelector('#pink')
    let greyBtn = document.querySelector('#grey')
    let body = document.querySelector('body')


    function changeColor() {
        if (blueBtn.checked) {
            body.style.backgroundColor = 'blue'
        }
        else if(pinkBtn.checked) {
            body.style.backgroundColor = 'pink'
        }
        else if (greyBtn.checked) {
            body.style.backgroundColor = 'grey'
        }
        else {
            body.style.backgroundColor = 'blanchedalmond'
    }
}

colorFormEl.onchange = changeColor


//Форма для вибору хобі з чекбоксами:
//Створіть чекбокси для різних хобі (наприклад, читання, спорт, музика).
//Встановіть обробник події onchange для кожного чекбоксу, щоб відображати список вибраних хобі у текстовому елементі під формою.

let list = document.querySelector('#list')
    let [...allHobby] = document.querySelectorAll('input[name="hobby"]')
    let [...allLabel] = document.querySelectorAll('.hobbyForm label')

    for (const hobbies of allHobby) {
        hobbies.onchange = function(){
            if (hobbies.checked) {
                for (const label of allLabel) {
                    if (label.htmlFor === hobbies.id) {
                        let li = document.createElement('li')
                        list.appendChild(li)        
                        li.innerText = label.innerText
                    }
                }
            }
            else {
                let li = document.querySelector('li')
                li.remove()
            }
        }
    }

    // Форма з вибором країни із випадаючого списку:
    // Створіть випадаючий список з назвами країн.
    // Використовуйте подію onchange для випадаючого списку, щоб виводити інформацію про вибрану країну, таку як столиця або населення, в іншому елементі на сторінці.
    
    let select = document.querySelector('select')
    let info = document.querySelector('.infoText')
    
    select.addEventListener('change', function(){
        console.log(this.value);
        switch (select.value) {
            case '1':
                info.innerText = 'Country'
                break;
            case '2':
                info.innerText = `Country: Norway
                Capital: Oslo
                Population: 5,5 mln`
                break;
            case '3':
                info.innerText = `Country: India
                Capital: New Delhi
                Population: 1,4 bln`
                break;
            case '4':
                info.innerText = `Country: Poland
                Capital: Warsaw
                Population: 36,8 mln`
                break;
                default:
                    info.innerText = 'Choose country'
    
                    break;
        }
    })
    
    

}
