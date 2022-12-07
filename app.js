

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
fetch('stockLibros.json')

    .then(res => res.json())
    .then(data=> cargarLibros(data));

const stock = document.querySelector('#contenedor')

function cargarLibros(libros){
    libros.forEach(libro => {
        const row = document.createElement('p')
           row.innerHTML += `

           <div class="card transform imgMargin imgCards books" data-title="Heidi" data-price="5000">
           <img src="${libro.img}" class="card-img-top" alt="libro de Heidi">
           <div class="card-body">
           <h2 class="card-title">${libro.precio}</h2>
             <h2 class="card-title">${libro.genero}</h2>
             <p class="card-text pCard">Johanna Spyri</p>
             <button id="${libro.id}" class="btn btnComprar btn-primary buttonCard">Agregar al Carrito
           </div>
         </div>

           `
            stock.appendChild(row)
        })
        let btnComprar = document.querySelectorAll('.btnComprar')
    btnComprar.forEach(el =>{
        el.addEventListener('click',(e)=>{
            agregarLibro(e.target.id,libros)
        })
    })
        
}

        


function agregarLibro(id, libros){

    const libro = libros.find( el => el.id === parseInt(id))

    const existe = carrito.some(libro => libro.id === parseInt(id))
        
        if(existe){
            const libro = carrito.map (libro => {
                if (libro.id === parseInt(id) ){
                    libro.cantidad++
                }
            })
        } else {
            carrito.push(libro)
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
const btComprar = document.querySelector('#comprar')
btComprar.addEventListener('click', () => {

    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Lo sentimos,algo anda mal!',
        
      })
})