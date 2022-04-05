
class Carrito {

    //A�adir producto al carrito
    comprarProducto(e){
        e.preventDefault();
        //Delegado para agregar al carrito
        if(e.target.classList.contains('btn-add-producto')){
            const producto = e.target.parentElement.parentElement;
            //Enviamos el producto seleccionado para tomar sus datos
            this.leerDatosProducto(producto);
        }
    }

    //Leer datos del producto
    leerDatosProducto(producto){
        const infoProducto = {
            imagen : producto.querySelector('img').src,
            titulo: producto.querySelector('h3').textContent,
            precio: producto.querySelector('.price span').textContent,
            id: producto.querySelector('a').getAttribute('data-id'),
            cantidad: 1
        }
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function (productoLS){
            if(productoLS.id === infoProducto.id){
                productosLS = productoLS.id;
            }
        });
        if(productosLS === infoProducto.id){
            Swal.fire({
                icon: 'info',
                title: 'Oops...',
                text: 'El producto ya est� agregado',
                showConfirmButton: false,
                timer: 1000
            })
        }
        else {
            this.insertarCarrito(infoProducto);
        }
    }
    insertarCarrito(producto){
        const row = document.createElement('tr');
        row.classList.add('trCar')
        row.innerHTML = `
            <td>
                <img class="imgCar" src="${producto.imagen}" width=100>
            </td>
            <td class="tituloCar" >${producto.titulo}</td>
            <td class="precioCar" >S${producto.precio} cop</td>
            <td>
                <a href="#" class="borrar-producto fas fa-times-circle" data-id="${producto.id}"></a>
            </td>
        `;
        listaProductos.appendChild(row);
        this.guardarProductosLocalStorage(producto);
    }

    guardarProductosLocalStorage(producto){
        let productos;
        //Toma valor de un arreglo con datos del LS
        productos = this.obtenerProductosLocalStorage();
        //Agregar el producto al carrito
        productos.push(producto);
        //Agregamos al LS
        localStorage.setItem('productos', JSON.stringify(productos));
    }
    obtenerProductosLocalStorage(){
        let productoLS;
        //Comprobar si hay algo en LS
        if(localStorage.getItem('productos') === null){
            productoLS = [];
        }
        else {
            productoLS = JSON.parse(localStorage.getItem('productos'));
        }
        return productoLS;
    }

        //Mostrar los productos guardados en el LS
    leerLocalStorage(){
            let productosLS;
            productosLS = this.obtenerProductosLocalStorage();
            productosLS.forEach(function (producto){
                //Construir plantilla
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>
                        <img src="${producto.imagen}" width=100>
                    </td>
                    <td>${producto.titulo}</td>
                    <td>${producto.precio}</td>
                    <td>
                        <a href="#" class="borrar-producto fas fa-times-circle" data-id="${producto.id}"></a>
                    </td>
                `;
                listaProductos.appendChild(row);
            });
        }

    leerLocalStorageCompra(){
            let productosLS;
            productosLS = this.obtenerProductosLocalStorage();
            console.log(productosLS)
            productosLS.forEach(function (producto){
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>
                        <img src="${producto.imagen}" width=100>
                    </td>
                    <td>${producto.titulo}</td>
                    <td>${producto.precio}</td>
                    <td>
                        <input type="number" class="form-control cantidad" min="1" value=${producto.cantidad}>
                    </td>
                    <td id='subtotales'>${producto.precio * producto.cantidad}</td>
                    <td>
                        <a href="#" class="borrar-producto fas fa-times-circle" style="font-size:50px" data-id="${producto.id}"></a>
                    </td>
                `;
                listaCompra.appendChild(row);
            });
        }
    procesarPedido(e){
            e.preventDefault();
            if(this.obtenerProductosLocalStorage().length === 0){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'El carrito est� vac�o, agrega alg�n producto',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
            else {
                location.href = "carrito-compras.html";
            }
        }

        

    vaciarCarrito(e){
            e.preventDefault();
            while(listaProductos.firstChild){
                listaProductos.removeChild(listaProductos.firstChild);
            }
            this.vaciarLocalStorage();
            return false;
        }
    


    vaciarLocalStorage(){
            localStorage.clear();
        }
    eliminarProducto(e){
            e.preventDefault();
            let producto, productoID;
            if(e.target.classList.contains('borrar-producto')){
                e.target.parentElement.parentElement.remove();
                producto = e.target.parentElement.parentElement;
                productoID = producto.querySelector('a').getAttribute('data-id');
            }
            this.eliminarProductoLocalStorage(productoID);
            this.calcularTotal();
        }
    
            //Eliminar producto por ID del LS
    eliminarProductoLocalStorage(productoID){
        let productosLS;
        //Obtenemos el arreglo de productos
        productosLS = this.obtenerProductosLocalStorage();
        //Comparar el id del producto borrado con LS
        productosLS.forEach(function(productoLS, index){
            if(productoLS.id === productoID){
                productosLS.splice(index, 1);
            }
        });
        //A�adimos el arreglo actual al LS
        localStorage.setItem('productos', JSON.stringify(productosLS));
    }
        //Calcular montos
    calcularTotal(){
            let productosLS;
            let total = 0, iva = 0, subtotal = 0;
            productosLS = this.obtenerProductosLocalStorage();
            for(let i = 0; i < productosLS.length; i++){
                let element = Number(productosLS[i].precio * productosLS[i].cantidad);
                total = total + element;
            }
            subtotal = parseFloat(total);
    
            document.getElementById('total').value = "$ " + total + 'cop';
        }
    
    obtenerEvento(e) {
            e.preventDefault();
            let id, cantidad, producto, productosLS;
            if (e.target.classList.contains('cantidad')) {
                producto = e.target.parentElement.parentElement;
                id = producto.querySelector('a').getAttribute('data-id');
                cantidad = producto.querySelector('input').value;
                let actualizarMontos = document.querySelectorAll('#subtotales');
                productosLS = this.obtenerProductosLocalStorage();
                productosLS.forEach(function (productoLS, index) {
                    if (productoLS.id === id) {
                        productoLS.cantidad = cantidad;                    
                        actualizarMontos[index].innerHTML = Number(cantidad * productosLS[index].precio);
                    }    
                });
                localStorage.setItem('productos', JSON.stringify(productosLS));
            }
            else {
                console.log("click afuera");
            }
        }
}