const carrito =JSON.parse(localStorage.getItem('arrayLibros'))
//-----Clases---------------------
class libro {
    constructor(n,g,p){
        this.nombre = n,
        this.genero = g,
        this.precio = p
    }

}
const libro1 = new libro ('Heidi','Drama',5000)
const libro2 = new libro ('Orgullo y Prejuicio','Drama',6000)
const libro3 = new libro ('Frankenstein','Terror',3000)
const libro4 = new libro ('El libro de la Selva','Aventura',8500)
const libro5 = new libro ('1984','Ciencia Ficción',12500)
const libro6 = new libro ('Billy Summers','Suspenso',11000)

//--------------------------------



//-----Arrays---------------------

let arrayLibros = []

//--------------------------------



document.addEventListener('DOMContentLoaded', ()=>{

    const books = document.querySelectorAll('.books')

    for(let book of books){
        book.addEventListener('click',(evt)=>{
           let title = evt.currentTarget.dataset.title
           let price = evt.currentTarget.dataset.price
           arrayLibros.push({
            title:title,
            price:price
           })
         console.log(arrayLibros)
         localStorage.setItem('carrito',JSON.stringify(arrayLibros));
        })
    }

})


const btn = document.querySelector('#icon')

btn.addEventListener('click', () => {

    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Lo sentimos,algo anda mal!',
        
      })
})
