// if (masive[3] == true)
//     star1.src = './images/Icon_star_empty.png'
// else
//     masive[3] = false

const catalog_items = [
    {
        image: "./images/clock2.png", 
        title: 'Амфибия 2043', 
        price: '9 800₽', 
        is_favourite: true
    },
    {
        image: "./images/clock3.png", 
        title: 'Амфибия 1524', 
        price: '10 800₽', 
        is_favourite: false
    },
    {
        image: "./images/clock3.png", 
        title: 'Амфибия 1524', 
        price: '10 800₽', 
        is_favourite: false
    },
    {
        image: "./images/clock3.png", 
        title: 'Амфибия 1524', 
        price: '10 800₽', 
        is_favourite: false
    },
    {
        image: "./images/clock3.png", 
        title: 'Амфибия 1524', 
        price: '10 800₽', 
        is_favourite: false
    },
    {
        image: "./images/clock3.png", 
        title: 'Амфибия 1524', 
        price: '10 800₽', 
        is_favourite: false
    },
    {
        image: "./images/clock3.png", 
        title: 'Амфибия 1524', 
        price: '10 800₽', 
        is_favourite: false
    },
    {
        image: "./images/clock3.png", 
        title: 'Амфибия 1524', 
        price: '10 800₽', 
        is_favourite: false
    },
    {
        image: "./images/clock3.png", 
        title: 'Амфибия 1524', 
        price: '10 800₽', 
        is_favourite: false
    },
]
console.log(catalog_items)

const product = document.querySelectorAll("div_catalog")

// function changeALL(){
    for(let i=0;i<=catalog_items.length;i++){
    
        function renderCatalog(products) {
        const catalog = document.getElementById('catalog');
        catalog.innerHTML = '<div class="katalog"></div>';

        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'div_grid1';

            const favoriteIcon = product.is_favourite ? './images/Icon_star.png' : './images/Icon_star_empty.png';

            card.innerHTML = 
            '<div class="star" data-id="${product.id}" style="cursor: pointer; font-size: 20px;">${favoriteIcon}</div>'
            '<img src="${catalog_items.image}" alt="${catalog_items.title}" class="clock2">'
            '<h3 class="vostok1">${catalog_items.title}</h3>'
            '<p class="katalog_number">${catalog_items.price} ₽</p>'
            '<button class="korzina_div"><h1 class="korzina">Купить</h1></button>'
            ;

            catalog.appendChild(card);
        });

        // Назначаем обработчики после рендера
        document.querySelectorAll('star').forEach(icon => {
            icon.addEventListener('click', function () {
            const id = parseInt(this.dataset.id);
            const product = products.find(p => p.id === id);
            product.is_favourite = !product.is_favourite;
            renderCatalog(products); // перерисовываем
            });
        });
        }

        renderCatalog(product);
    }
// }



// function changeIMG1(){


//     if (masive[3] == false) {
//         let star1 = document.getElementById("star1")
//         star1.src = './images/Icon_star_empty.png'
//         masive[3] = true
//     }
//     else
//         star1.src = './images/Icon_star.png'
// }

// function changeIMG2() {
//     let star2 = document.getElementById("star2")
//     star2.src = './images/Icon_star_empty.png'
    
// }

// console.log(masive)