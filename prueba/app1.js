
document.addEventListener('DOMContentLoaded', ()=>{
    carrito = JSON.parse(localStorage.getItem('carrito'))
})

const stock = document.querySelector('#contenedor')
let carrito = []
function cargarLibros(){
    fetch('stockLibros.json')
    .then(respuesta =>respuesta.json())
    .then(libros =>{
        libros.forEach(libro => {
           const row = document.createElement('p')
           row.innerHTML += `

           <div class="card transform imgMargin imgCards books" data-title="Heidi" data-price="5000">
           <img src="${libro.img}" class="card-img-top" alt="libro de Heidi">
           <div class="card-body">
           <h2 class="card-title">${libro.precio}</h2>
             <h2 class="card-title">${libro.genero}</h2>
             <p class="card-text pCard">Johanna Spyri</p>
             <button onclick="agregarLibro(${libro.id})" class="btn btn-primary buttonCard">Agregar al Carrito
           </div>
         </div>

           `
            stock.appendChild(row)
        })
        
})
}
cargarLibros()
// ---------------------------------------------

    function agregarLibro(id){
        fetch('stockLibros.json')
        const existe = carrito.some(libro =>libro.id === id)
            if(existe){
                const libro = carrito.map(libro =>{
                    if(libro.id ===id){
                        libro.cantidad+=1
                    }
                })
            } else {
                
                    fetch('stockLibros.json')
                    .then(res =>res.json())
                    .then(libros =>{
                        libros.forEach(libro=>{
                            const item =  libros.find ((libro)=> libro.id === id)
                            carrito.push(item)
                        })
                    })   
                
            }
           
        modalCarrito()
    }
    
const modalCarrito = ()=>{
    const modalBody = document.querySelector('.modal .modal-body')
    modalBody.innerHTML =''
    carrito.forEach((libro)=>{
        const {id,nombre,genero,precio,img,cantidad} = libro
        modalBody.innerHTML +=`
        <div class="card transform imgMargin imgCards books"> 
    
        <img class="img-fluid card-img-top" src="${img}"/>
        
        <div class="card-body"> 
            <h2 class="card-title"> ${nombre}<h2/>
            <p class="card-text pCard"> ${genero}<p/>
            <p class="card-text pCard"> $${precio}<p/>
            <p class="card-text pCard"> Cantidad: ${cantidad}<p/>
            <button onclick="eliminarLibro(${id})" class="btn btn-primary buttonCard">Eliminar del Carrito
        <div/>
        `
        
    })
    guardarLocalStorage()
}

function eliminarLibro(id){
    const libroId = id
    carrito = carrito.filter((libro)=>libro.id !==libroId)
    modalCarrito()
}

function guardarLocalStorage (){
    localStorage.setItem("carrito",JSON.stringify(carrito))
}


const btn = document.querySelector('#icon')
btn.addEventListener('click', () => {

    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Lo sentimos,algo anda mal!',
        
      })
})
const btnComprar = document.querySelector('#comprar')
btnComprar.addEventListener('click', () => {

    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Lo sentimos,algo anda mal!',
        
      })
})
