//1)пройдіть по масиву і зробіть заповнення таблиці даними з масива
window.onload = function(){


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



//2)За допомогою js  створіть на сторінці елемент header  та задайте padding 50px та background-color жовтого кольору і властивість text-align center
//3)Створіть в хедері з попереднього завдання А теги з значенням з обєкта name  встановленим значенням в href з url.

    let header = document.createElement('header');
    header.style.padding = '50px';
    header.style.textAlign = 'center';
    header.style.backgroundColor = 'yellow';
    document.body.before(header);

    const menuData = [
        { name: 'Головна', url: '/' },
        { name: 'Про нас', url: '/about' },
        { name: 'Послуги', url: '/services' },]
    
    menuData.forEach(item => {
        let menu = document.createElement('a');
        menu.innerText = item.name;
        menu.href = item.url;
        header.appendChild(menu);
        menu.style.marginRight = '100px';
    })

    


//4)Створіть блок за допомогою js задайте блоку стиль display flex та в середині цього блоку створіть 50 div блоків з правилом border-radius, width 50px height 50px та background-color



}