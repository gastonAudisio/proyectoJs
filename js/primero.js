




//-----Variables Declaradas-------
let saldoUsuario = 13000
let montoLibro = 0
const contraseña = 123;
let contraseñaUsuario;
//--------------------------------



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

//--------------------------------



//-----Arrays---------------------

const libros = []
libros.push(libro1,libro2,libro3,libro4,libro5)
console.log(libros)
//--------------------------------



//--------Fuciones----------------

function agregarSaldo(){
    let montoAgregado = parseInt(prompt('Ingresar monto'))
    saldoUsuario= saldoUsuario+ montoAgregado
    console.log('Su nuevo saldo es $'+saldoUsuario)
        seleccionarLibro()
}

function salir() { 
    alert("Gracias por visitarnos")
}

function compraLibro(){ 
    if ( montoLibro > saldoUsuario){
        
        alert('Saldo Insuficiente')
        seleccionarLibro()
    }else {
        saldoUsuario = saldoUsuario - montoLibro
        console.log('La compra se ha realizado con exito.Su saldo es $'+ saldoUsuario )
        seleccionarLibro()
        }
}

function seleccionarLibro(){
    console.log("su saldo en la cuenta es de $"+ saldoUsuario +"-------------------------------------")
    console.log("1.Comprar - Heidi - $5000")
    console.log("2.Comprar - Orgullo y Prejuicio - $6000")
    console.log("3.Comprar - Frankenstein - $3000")
    console.log("4.Comprar - El libro de la Selva - $8500")
    console.log("5.Comprar - 1984 - $12500")
    console.log("6.Agregar Saldo")
    console.log("7.Salir")

    let seleccion = prompt("Ingresar el número del libro deseado, 6 para Agregar Saldo o 7 para salir")
            
            switch(seleccion){
                case "1": 
                montoLibro = libros[0].precio
                    compraLibro()
                    break;
                case "2":
                montoLibro = libros[2].precio
                    compraLibro()
                    break;
                case "3":
                    montoLibro = libros[3].precio
                    compraLibro()
                    break;
                case "4":
                    montoLibro = libros[4].precio
                    compraLibro()
                    break;
                case "5":
                    agregarSaldo()
                    montoLibro = libros[5].precio
                    break;
                    case "6":
                    agregarSaldo()
                    break;
                case "7":
                    salir()
                    break;
                default :
                    console.log('Operacion Invalida')
                    seleccionarLibro()
            }
        
}

function validarClave(){

    do {
    contraseñaUsuario = parseInt(prompt('ingrese contraseña'));
    } while(contraseñaUsuario !== contraseña);
        seleccionarLibro()
} 
          

function ingresarUsuario(){
    let usuario = prompt("Ingrese nombre de Usuario")
    validarClave(usuario)

}

//--------------------------------



//------Inicio del Proceso--------

ingresarUsuario()

//--------------------------------
