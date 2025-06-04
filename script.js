let clock2 = document.getElementById("clock2");
let clock3 = document.getElementById("clock3");
let clock4 = document.getElementById("clock4");
let clock5 = document.getElementById("clock5");
let clock6 = document.getElementById("clock6");
let clock7 = document.getElementById("clock7");

// if (masive[3] == true)
//     star1.src = './images/Icon_star_empty.png'
// else
//     masive[3] = false

let catalog = document.querySelectorAll(".div_catalog");

console.log(catalog)

const catalog_items = {
        image: [clock2, clock2, clock4, clock5, clock6, clock7], 
        title: 'Амфибия 2043', 
        price: '9 800₽', 
        is_favourite: true
    }

console.log(catalog_items)

let imgs = document.getElementById("clock2")

console.log(imgs)

// function changeALL(){
    for(let i=0;i<=catalog.length;i++){
        catalog[i].innerHTML = catalog_items[0];
        catalog[i].innerHTML = catalog_items.title;
        catalog[i].innerHTML = catalog_items.price;
        catalog[i].insertAdjacentHTML("afterbegin",
        `<img class="clock2" src="${catalog_items.image}">
        <p class="vostok1"></p>
        <p class="katalog_price"></p>`)
    }
// }

console.log(catalog_items.image);


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