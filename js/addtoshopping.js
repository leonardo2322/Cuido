let allcontainerCart = document.querySelectorAll('.content');
let arreglo = []
allcontainerCart.forEach((element)=>{
    element.children[3].addEventListener('click',eventClicked)
})

function eventClicked(e) {
    e.preventDefault()
    datos = e.target.parentElement
    const dataset = {
         image : datos.children[0].src,
         titulo : datos.children[1].textContent,
         precio : datos.querySelector('.price').textContent,
         iden : datos.querySelector('a').getAttribute('data-id'),
         cant: 1
    }
    arreglo = [...arreglo,dataset]
    loadHtml()
    console.log(dataset)
}


function loadHtml() {
    arreglo.forEach((element)=>{
        const {image,titulo,precio, iden, cant} = element;
        const row = document.createElement('div')
        row.classList.add('content')
        row.innerHTML = ` 
        <img src="${image}" alt="">
        <h3>${titulo}</h3>
        <div class="price">${precio}</div>
        <a href="" data-id="${iden}" class="btn btn-add-producto">Comprar Ahora</a>
        `;
        
    })
}