const carrito = new loadHtml();
let data = document.querySelector('.linke');


data.addEventListener('click',() => {
    let nombre = document.querySelector('.nombre').value;
    let telefono = document.querySelector('.telefono').value;
    let direccione = document.querySelector('.direccion').value;
    let titulo = nombre+' '+telefono+' '+' '+direccione;


let direccion = `https://api.whatsapp.com/send?phone=573502117928&text=${titulo}`;
    data.setAttribute('href',`${direccion}`)
})

// carga de archivos en el formulario de compra

