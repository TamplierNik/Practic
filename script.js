// if (masive[3] == true)
//     star1.src = './images/Icon_star_empty.png'
// else
//     masive[3] = false

const catalog_items = [
    {   
        id: 1,
        image: "./images/clock2.png", 
        title: 'Амфибия 2643', 
        price: '9 800₽', 
        is_favourite: true
    },
    {
        id: 2,
        image: "./images/katalog_clock.png", 
        title: 'Амфибия 1524', 
        price: '10 800₽', 
        is_favourite: false
    },
    {
        id: 3,
        image: "./images/clock3.png", 
        title: 'Амфибия 1524', 
        price: '10 800₽', 
        is_favourite: false
    },
    {
        id: 4,
        image: "./images/clock4.png", 
        title: 'Амфибия 1524', 
        price: '10 800₽', 
        is_favourite: false
    },
    {
        id: 5,
        image: "./images/clock5.png", 
        title: 'Амфибия 1524', 
        price: '10 800₽', 
        is_favourite: false
    },
    {
        id: 6,
        image: "./images/clock6.png", 
        title: 'Амфибия 1524', 
        price: '10 800₽', 
        is_favourite: false
    },
    {
        id: 7,
        image: "./images/clock3.png", 
        title: 'Амфибия 1524', 
        price: '10 800₽', 
        is_favourite: false
    },
    {
        id: 8,
        image: "./images/clock2.png", 
        title: 'Амфибия 1524', 
        price: '10 800₽', 
        is_favourite: false
    },
    {
        id: 9,
        image: "./images/clock9.png", 
        title: 'Амфибия 1524', 
        price: '10 800₽', 
        is_favourite: false
    }
]

function renderCatalog(products) {
    const catalog = document.getElementById('catalog');
    catalog.innerHTML = '';

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'div_grid';

        const favoriteIcon = catalog_items.is_favorite ? '★' : '☆';

        card.innerHTML = `
        <img class="star" data-id="${product.id}" style="cursor: pointer; font-size: 20px;" 
        src="${product.is_favourite}">
        <img class="clock2" src="${product.image}" alt="${product.title}">
        <h3 class="vostok">${product.title}</h3>
        <p class="katalog_number">${product.price}</p>
        <button class="korzina_div"><h1 class="korzina">Купить</h1></button>`;

        catalog.appendChild(card);
    });

    // Назначаем обработчики после рендера
    document.querySelectorAll('.star').forEach(icon => {
        icon.addEventListener('click', function () {
            const id = parseInt(this.dataset.id);
            const product = products.find(p => p.id === id);
            if (product) {
                product.is_favourite = !product.is_favourite;
                renderCatalog(products); // перерисовываем
            }
        });
    });
    }

    renderCatalog(catalog_items);




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