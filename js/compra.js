const compra = new Carrito();
const listaCompra = document.querySelector("#lista-compra tbody");
const carrito = document.getElementById('carrito');
const procesarCompraBtn = document.querySelector('#procesar-compra');

cargarEventos();

function cargarEventos() {
    document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra());

    //Eliminar productos del carrito
    carrito.addEventListener('click', (e) => { compra.eliminarProducto(e) });

    procesarCompraBtn.addEventListener('click', procesarCompra);
    
    carrito.addEventListener('change', (e) => { compra.obtenerEvento(e) });
    carrito.addEventListener('keyup', (e) => { compra.obtenerEvento(e) });
}


function procesarCompra() {
    // e.preventDefault();
    console.log('aqui')
    if (compra.obtenerProductosLocalStorage().length === 0) {
        Swal.fire({
            icon: 'Error',
            title: 'Oops...',
            text: 'No hay productos, selecciona alguno',
            showConfirmButton: false,
            timer: 3000
        }).then(function () {
            window.location = "index.html";
        })
    }
    else{
        data()
        function   data() {
                const cantidad = document.querySelectorAll('.form-control')
                let total = document.querySelector('.total').value
                let textoEnviar = ''
                let incr = 1
                let nuevo
                for (let i in cantidad){
                   
                    if (cantidad[i].value != undefined) {
                        let cant = cantidad[i].value
                        const valores = document.querySelector('#lista-compra tbody').childNodes[incr].outerText

                        nuevo = valores.split('\t')
                        let separados = nuevo.join(' ')
                        textoEnviar +=separados+'  :es el total'+'  '+'y la cantidad: '+'  '+String(cant)
                        incr++
                    }
                    
                    
                }

                let compraFinal=textoEnviar+' el valor de la compra es:'+total
                console.log(compraFinal)

                
                let direccion = `https://api.whatsapp.com/send?phone=573502117928&text=${compraFinal}`;
                procesarCompraBtn.setAttribute('href',`${direccion}`)
                
                compra.vaciarLocalStorage();
}}

    }
