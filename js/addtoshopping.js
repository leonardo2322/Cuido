let allcontainerCart = document.querySelectorAll('.content');
allcontainerCart.forEach((element)=>{
    element.children[3].addEventListener('click',eventClicked)
})
var arreglo = []

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


    var data = {
        'image': dataset.image,
        'titulo':dataset.titulo,
        'precio':dataset.precio,
        'iden':dataset.iden,
        
        
    
        
    }

    arreglo = [...arreglo, data]

    // arreglo[0][0]===data.iden

    if (arreglo.includes(data.iden)){
        console.log('estamos dentro')
        
        if (arreglo.includes(data.iden)) {
            alert('ya adquiriste este producto dirigite al carro')
            arr.splice(0)

        }
    }else{
        arreglo.unshift(data.iden, data.image, data.titulo, data.precio)
        console.log('no esta aqui')
        console.log(arreglo)
    }

    localStorage.setItem('arreglo',JSON.stringify(arreglo))
    
}
