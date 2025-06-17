// if (masive[3] == true)
//     star1.src = './images/Icon_star_empty.png'
// else
//     masive[3] = false

const catalog_items = [
    {   
        id: 1,
        image: "./images/clock2.png", 
        title: 'восток  амфибия 2403', 
        price: '9 800', 
        is_favourite: false,
    },
    {
        id: 2,
        image: "./images/katalog_clock.png", 
        title: 'восток  амфибия 2403', 
        price: '9 800', 
        is_favourite: false,
        id_product: 'clock3'
    },
    {
        id: 3,
        image: "./images/clock3.png", 
        title: 'восток  амфибия 2403', 
        price: '9 800', 
        is_favourite: false
    },
    {
        id: 4,
        image: "./images/clock4.png", 
        title: 'восток  амфибия 2403', 
        price: '9 800', 
        is_favourite: false,
        id_product: 'clock4'
    },
    {
        id: 5,
        image: "./images/clock5.png", 
        title: 'восток  амфибия 2403', 
        price: '9 800', 
        is_favourite: false,
        id_product: 'clock5'
    },
    {
        id: 6,
        image: "./images/clock6.png", 
        title: 'восток  амфибия 2403', 
        price: '9 800', 
        is_favourite: false,
        id_product: 'clock6'
    },
    {
        id: 7,
        image: "./images/clock3.png", 
        title: 'восток  амфибия 2403', 
        price: '9 800', 
        is_favourite: false,
    },
    {
        id: 8,
        image: "./images/clock2.png", 
        title: 'восток  амфибия 2403', 
        price: '9 800', 
        is_favourite: false,
    },
    {
        id: 9,
        image: "./images/clock9.png", 
        title: 'восток  амфибия 2403', 
        price: '9 800', 
        is_favourite: false,
        id_product: 'clock9'
    }
]

function renderCatalog(products) {
    const catalog = document.getElementById('catalog');
    catalog.innerHTML = '';

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'div_grid';

        const favoriteIcon = product.is_favourite ? './images/Icon_star.png' : './images/Icon_star_empty.png';

        card.innerHTML = `
        <img class="star" data-id="${product.id}" style="cursor: pointer; font-size: 20px;" 
        src="${favoriteIcon}">

        <img class="clock2" id="${product.id_product}" src="${product.image}" alt="${product.title}">
        
        <div class="info2">
            <div>
                <h1 class="vostok">${product.title}</h1>

                <div class="katalog_number">
                    <p class="katalog_price">${product.price}</p>
                    <p class="katalog_rubl">₽</p>
                </div>
            </div>
            
            <button class="korzina_div">
                <h1 class="korzina">В корзину</h1>
            </button>
        </div>`;

        catalog.appendChild(card);
    });

    // Назначаем обработчики после рендера
    document.querySelectorAll('.star').forEach(icon => {
        icon.addEventListener('click', function () {
            const id = parseInt(this.dataset.id);
            const product = catalog_items.find(p => p.id === id);
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