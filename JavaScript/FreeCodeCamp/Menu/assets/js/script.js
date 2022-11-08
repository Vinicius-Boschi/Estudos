import { menu } from './menu.js'

const sectionCenter = document.querySelector('.section-center')
const container = document.querySelector('.btn-container')

window.addEventListener('DOMContentLoaded', function() {
    displayMenuItems(menu) // Vai fazer a função funcionar.
    displayMenuButtons() 
})
    
function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item){
        return `<article class="menu-item">
        <img src="${item.img}" alt="${item.title}" class="photo">
        <div class="item-info">
            <header>
                <h4 class="titleFood">${item.title}</h4>
                <h4 class="price">R$${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>
        </div>
    </article>`
    })
    displayMenu = displayMenu.join("")
    sectionCenter.innerHTML = displayMenu
}

function displayMenuButtons() {
    const categories = menu.reduce(function(values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category)
        }
        return values
    },
        ['all']
    )

    const categoryBtns = categories.map(function(category) {
        return `<button class="filter-btn" data-id=${category}>${category}</button>`
    })
    .join("") // Retira as virgulas.
    container.innerHTML = categoryBtns
    
    const filterBtns = document.querySelectorAll('.filter-btn')

    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e){
           const category =  e.currentTarget.dataset.id // Vai pegar o id do item.
           const menuCategory = menu.filter(function(menuItem) {
            
            if (menuItem.category === category) { // Se for igual a categoria do item, vai retornar a função menuItem.
                return menuItem
            }
           }) 
           if (category === 'all') { // Se for igual a categoria all vai retornar todos os items do array.
               displayMenuItems(menu)
           } else { // Se não, vai retornar o item do id.
               displayMenuItems(menuCategory)
           }
        })
    })
}