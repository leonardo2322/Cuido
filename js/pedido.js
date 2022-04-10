let carro = new Carrito
const listaProductos = document.querySelector('#lista-carrito tbody');
let productos = document.querySelector('.products');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
let eliminar= document.querySelector('#carrito')
const procesarPedidoBtn = document.getElementById('procesar-pedido');
console.log(listaProductos,eliminar)

cargarEventos();
// document.addEventListener('click',(e)=>{
//     e.preventDefault()
// })
function cargarEventos(){
    
    //Se ejecuta cuando se presionar agregar carrito

    productos.addEventListener('click', (e)=>{
        carro.comprarProducto(e)});

    eliminar.addEventListener('click', (e)=>{carro.eliminarProducto(e)});
        
      //Al cargar documento se muestra lo almacenado en LS
    document.addEventListener('DOMContentLoaded', carro.leerLocalStorage());

    vaciarCarritoBtn.addEventListener('click', (e)=>{carro.vaciarCarrito(e)});
        //Enviar pedido a otra pagina
        procesarPedidoBtn.addEventListener('click', (e)=>{carro.procesarPedido(e)});
}