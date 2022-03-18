/* // variables

let añadirCarrito = document.querySelector('.products');

// Funciones
cargarProductos();

function cargarProductos(){
    añadirCarrito.addEventListener('click', addProductos);
}

function addProductos(e){
    e.preventDefault();
    if (e.target.classList.contains('btn-add-producto')){
        const seleccionarProducto = e.target.parentElement;
        recuperarContenido(seleccionarProducto);
        
    }
}

function recuperarContenido(products) {
    const infoProductos = {
        Image: products.querySelector('.box img').src,
        title: products.querySelector('.content h3').textContent,
        price: products.querySelector('.price').textContent,
        id: products.querySelector('.content a').getAttribute('data-id'),
        amount: 1
    }
    console.log(infoProductos);
} */