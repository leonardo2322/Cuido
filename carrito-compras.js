        // variables
        let contenedorDeProductos = document.querySelector('.products');
        let contenedorModal = document.querySelector('.carrito-item');
        let precioTotal = document.querySelector('.precio-total');
        let cantidadCarrito = document.querySelector('.cantidad-carrito');

        let comprarObjetos = [];
        let compraTotal = 0;
        let cantidadProducto = 0;

        //funciones
        cargarListeners();
        function cargarListeners() {
            contenedorDeProductos.addEventListener('click', addProductos);

            contenedorModal.addEventListener('click', borrarProducto);
        }

        function addProductos(e) {
            e.preventDefault();
            if (e.target.classList.contains('btn-add-producto')) {
                const seleccionarProductos = e.target.parentElement;
                recuperarContenedor(seleccionarProductos);
            }
        }

        function borrarProducto(e) {
            if (e.target.classList.contains('borrar-producto')) {
                const borrarId = e.target.getAttribute('data-id');

                comprarObjetos.forEach(value => {
                    if (value.id == borrarId) {
                        let reducirPrecio = parseFloat(value.precio) * parseFloat(value.cantidad);
                        compraTotal = compraTotal - reducirPrecio;
                        compraTotal = compraTotal.toFixed(2);
                    }
                });
                comprarObjetos = comprarObjetos.filter(products => products.id !== borrarId);

                cantidadProducto--;
            }
            cargarHtml();
        }

        function recuperarContenedor(products) {
            const infoProductos = {
                imagen: products.querySelector('div img').src,
                titulo: products.querySelector('h3').textContent,
                precio: products.querySelector('.price').textContent,
                id: products.querySelector('a').getAttribute('data-id'),
                cantidad: 1
            }

            compraTotal = parseFloat(compraTotal) + parseFloat(infoProductos.precio);
            compraTotal = compraTotal.toFixed(2);

            const existente = contenedorModal.some(products => products.id === infoProductos.id);

            if (existente) {
                const proCantidad = contenedorModal.map(products => {
                    if (products.id === infoProductos.id) {
                        products.cantidad++;
                        return products;
                    } else {
                        return products
                    }
                });

                contenedorModal = [...proCantidad];
            } else {
                comprarObjetos = [...comprarObjetos, infoProductos]
                cantidadProducto++;
            }
            cargarHtml();

            //console.log(infoProductos);
        }

        function cargarHtml() {
            borrarHtml();
            comprarObjetos.forEach(products => {
                const { imagen, titulo, precio, id } = products;
                const fila = document.createElement('div');
                fila.classList.add('item');
                fila.innerHTML = `
                    <img src="${imagen}" alt="comida para gatos">    
                <div class="item-content">
                <h5>${titulo}</h5>
                <h5 class="cart-price">${precio}</h5>
                <h6> cantidad: ${cantidad}</h6>
                </div>
                <span class="borrar-producto" data-id="${id}">X</span>
                `;

                contenedorModal.appendChild(fila);

                precioTotal.innerHTML = compraTotal;

                cantidadCarrito.innerHTML = cantidadProducto;
            });
        }


        function borrarHtml(){
            contenedorModal.innerHTML = '';
        }

