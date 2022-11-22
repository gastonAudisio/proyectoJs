
let saldoUsuario = 7000
let dracula = 5000
let islaTesoro = 3000
let sherlock = 4000
let Harry = 8500
let montoLibro = 0


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
    console.log("1.Comprar - Dracula - $5000")
    console.log("2.Comprar - La isla del Tesoro - $3000")
    console.log("3.Comprar - Las aventuras de Sherlock Holmes - $4000")
    console.log("4.Comprar - Harry Potter - $8500")
    console.log("5.Salir")

    let seleccion = prompt("Ingresar el número del libro deseado o 5 para salir")
            
            switch(seleccion){
                case "1":
                    montoLibro = dracula 
                    compraLibro()
                    break;
                case "2":
                montoLibro = islaTesoro
                    compraLibro()
                    break;
                case "3":
                    montoLibro = sherlock
                    compraLibro()
                    break;
                case "4":
                    montoLibro = Harry 
                    compraLibro()
                    break;
                case "5":
                    salir()
                    break;
                default :
                    console.log('Operacion Invalida')
                    seleccionarLibro()
            }
        
}

function validarClave(clave){
 /*   if(clave ==="123"){
        seleccionarLibro()
    }
    else{
        alert("Clave Incorrecta")
        ingresarClave()       
        }
*/
const contraseña = 123;
let contraseñaUsuario;

do {
  contraseñaUsuario = parseInt(prompt('ingrese contraseña'));
} while(contraseñaUsuario !== contraseña);
seleccionarLibro()
} 
          


function ingresarClave(){
        let clave = prompt("Ingrese su Contraseña")
        validarClave(clave)
        }
        
   

function ingresarUsuario(){
    let usuario = prompt("Ingrese nombre de Usuario")
    ingresarClave(usuario)

}

ingresarUsuario()


