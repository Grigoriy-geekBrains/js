window.addEventListener('load', () => {
    renderList(goods);
});

const goods = [
    {title: 'Shirt',},
    {title: 'Socks', price: 50},
    {title: 'Jacket', price: 350},
    {title: 'Shoes', price: 250},
];

const renderList = (items) => {
    const renderedGoods = items.map(renderItem).join('');

    document.querySelector('.catalog').innerHTML = renderedGoods;
};

const renderItem = ({title, price = "1"}) => {
    return `<div class="item">
                <div class="item__img"> <img class="item__img_pic" src="pic.png" alt="#"></div> 
                <h3 class="item__caption">${title}</h3>
                <div class="item__box">
                    <p class="item__price">Цена: $${price}</p>
                    <a href="#" class="item__addToCart">Добавить</a>
                </div>         
            </div>`;
};