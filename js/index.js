let dat = document.querySelector('.linke');
const pr = document.querySelector('.pr')
const datos = JSON.parse(localStorage.getItem('arreglo'))
const contenedorCompraDinamica = document.querySelector('.container-sale')
let btnper =document.querySelector('.btn-pr')
let arr= []
let reg = /http/g
let regExp = new RegExp(reg)
let cant = ''
dat.addEventListener('click',() => {
    let nombre = document.querySelector('.nombre').value;
    let telefono = document.querySelector('.telefono').value;
    let direccione = document.querySelector('.direccion').value;
    
    let camposCompra = ''
    for (let i of arr){
        const resultado = regExp.test(i)
        if (typeof(i)!='object') {
            if (resultado!= true) {
                let espacios =i+' '
                camposCompra += espacios
            }
        }

        
    }

    let titulo = nombre+' '+telefono+'  '+'  '+direccione+'  '+camposCompra+'/'+cant;


let direccion = `https://api.whatsapp.com/send?phone=573502117928&text=${titulo}`;
    dat.setAttribute('href',`${direccion}`)
})

// carga de archivos en el formulario de compra
almacen()
function almacen(e) {
   

    let maped = Object.entries(datos).map(ke=>{
        let [keys, value]=ke
        return value
})


var image = maped.map(function (mape) {
        if (typeof(mape) != 'object'){
            arr.unshift(String(mape))
        }
        if (typeof(mape)!= 'string'){
            if (typeof(mape)!='number') {
                const row = document.createElement('div')
                const inputs= document.createElement('input')
                inputs.setAttribute('placeholder','introduce cantidad libra o kilos')
           


              
                inputs.classList.add('cant-compra')
                row.classList.add('div-agg')
                row.innerHTML = `
                <h1>${mape.titulo}</h1>
        
                    <img src="${mape.image}">
                    <h2>${mape.precio}</h2>

                `
         

                row.appendChild(inputs)
                contenedorCompraDinamica.appendChild(row)
                
            }
            
            
}})
btnper.addEventListener('click',()=>{

    const valores = document.getElementsByClassName('cant-compra')
    for (let i in valores){
        var resultado = valores[i].value
        if (resultado != undefined){
            if (typeof(valores)== 'empty') {
                alert('llena todos los campos')
            } else {
                cant+=resultado+'/'
            }
            console.log(resultado)
        }
        
        
    }
    dat.classList.add('mostrarBtn')
    btnper.classList.remove('')
    
})
}



