const stockLibros = [
    {
        id:1,
        nombre:'Heidi',
        genero:'Drama',
        precio:3500,
        img:"src/libros/heidi.svg",
        cantidad:1

    },
    {
        id:2,
        nombre:'Orgullo y Prejuicio',
        genero:'Drama',
        precio:4500,
        img:"src/libros/orgullosvg.svg ",
        cantidad:1
    },
    {
        id:3,
        nombre:'Frankenstein',
        genero:'Terror',
        precio:5600,
        img:"src/libros/franken.svg",
        cantidad:1
    },
    {
        id:4,
        nombre:'El libro de la Selva',
        genero:'Aventura',
        precio:2400,
        img:"src/libros/libroselva.svg",
        cantidad:1
    },
    {
        id:5,
        nombre:'1984',
        genero:'Ciencia Ficcion',
        precio:3700,
        img:"src/libros/1984.svg",
        cantidad:1
    },
    {
        id:6,
        nombre:'Billy Summers',
        genero:'Suspenso',
        precio:7800,
        img:"src/libros/billy.jpg",
        cantidad:1
    }
];

document.addEventListener('DOMContentLoaded', ()=>{
    carrito = JSON.parse(localStorage.getItem('carrito'))
})

let carrito = []
const contenedor = document.querySelector('#contenedor')

stockLibros.forEach((libro)=>{
    const {id,nombre,genero,precio,img} = libro
    contenedor.innerHTML += `
    <div class="card transform imgMargin imgCards books"> 
    
        <img class="img-fluid card-img-top" src="${img}"/>
        
        <div class="card-body"> 
            <h2 class="card-title"> ${nombre}<h2/>
            <p class="card-text pCard"> ${genero}<p/>
            <p class="card-text pCard"> $${precio}<p/>
            <button onclick="agregarLibro(${id})" class="btn btn-primary buttonCard">Agregar al Carrito
        <div/>
   
 
    `
}) 

    function agregarLibro(id){
        const existe = carrito.some(libro =>libro.id === id)
            if(existe){
                const libro = carrito.map(libro =>{
                    if(libro.id ===id){
                        libro.cantidad+=1
                    }
                })
            } else {
                const item = stockLibros.find ((libro)=> libro.id === id)
                carrito.push(item)
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