const navItems = document.querySelector('#carrito')
const btnactivate = document.querySelector('.car')
const x = document.querySelector('.closed')

btnactivate.addEventListener('click',()=>{
    navItems.classList.add('popup')
    btnactivate.classList.remove('fa-shopping-cart')
    x.classList.add('closedActive')
    x.classList.add('fa-times')
    })
x.addEventListener('click',()=>{
x.classList.remove('fa-times')
navItems.classList.remove('popup')


btnactivate.classList.add('fa-shopping-cart')
})