
window.onload = function(){

//2)За допомогою js  створіть на сторінці елемент header  та задайте padding 50px та background-color жовтого кольору і властивість text-align center
//3)Створіть в хедері з попереднього завдання А теги з значенням з обєкта name  встановленим значенням в href з url.

    let header = document.createElement(`header`);
    header.style.padding = `50px`;
    header.style.textAlign = `center`;
    header.style.backgroundColor = `yellow`;
    document.body.before(header);

    const menuData = [
        { name: 'Головна', url: '/' },
        { name: 'Про нас', url: '/about' },
        { name: 'Послуги', url: '/services' },]
    
    menuData.forEach(item => {
        let menu = document.createElement(`a`);
        menu.innerText = item.name;
        menu.href = item.url;
        header.appendChild(menu);
        menu.style.marginRight = `100px`;
    })

//1)пройдіть по масиву і зробіть заповнення таблиці даними з масива
    const booksArray = [
        {
            title: 'Пригоди Аліси в Країні Див',
            year: 1865,
            rating: 4.5
        },
        {
            title: '1984',
            year: 1949,
            rating: 4.8
        },
        {
            title: 'Гаррі Поттер і філософський камінь',
            year: 1997,
            rating: 4.7
        }
    ];
    
    let table = document.getElementById(`table`);

    for (let books of booksArray) {
        let tr = document.createElement(`tr`);
        
        let td1 = document.createElement(`td`);
        td1.textContent = books.title;
        tr.appendChild(td1);
        
        let td2 = document.createElement(`td`);
        td2.textContent = books.year;
        tr.appendChild(td2);
        
        let td3 = document.createElement(`td`);
        td3.textContent = books.rating;
        tr.appendChild(td3);
        
        table.appendChild(tr);
    }
        
        table.setAttribute(`style`, `background-color:orange`);
        let tableEl = document.querySelector(`table`);
        tableEl.style.padding = `50px`;
        tableEl.style.color = `red`;
        
        

//4)Створіть блок за допомогою js задайте блоку стиль display flex та в середині цього блоку створіть 50 div блоків з правилом border-radius, width 50px height 50px та background-color


let divBlock = document.querySelector('.div');

    divBlock.style.display = 'flex';
    divBlock.style.flexWrap = 'wrap';
    divBlock.style.gap = `50px`;
    divBlock.style.marginTop = `100px`;

    let fragmentDiv = document.createDocumentFragment();
    let amount = 50;
    
    for (let i = 1; i <= amount; i++){
        let divEl = document.createElement('div');
        divEl.innerHTML = '  This is '+i  ;
        divBlock.appendChild(divEl);
        fragmentDiv.appendChild(divBlock);

        divEl.style.textAlign = 'center';
        divEl.style.backgroundColor = 'green';
        divEl.style.borderRadius = '10px';
        divEl.style.width = '50px';
        divEl.style.height = '50px';
        divEl.style.display = 'flex';
   }
    document.body.appendChild(fragmentDiv);
}
