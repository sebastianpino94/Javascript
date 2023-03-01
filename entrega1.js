function Servicios(servicio,precio,cantidad){

  this.servicio = servicio
  this.precio= precio
  this.cantidad = cantidad
  this.sumatodo = function() {
      this.servicio= this.cantidad * this.precio
      console.log('Esta es el total de dinero que consiguio con la venta de cada servicio' + ' ' + this.servicio)
  }

}

const Servicio1= new Servicios("esmaltado",500,2)
const Servicio2= new Servicios("pestanias",1000,3)
const Servicio3= new Servicios ("capping",1500,4)

Servicio1.sumatodo()
Servicio2.sumatodo()
Servicio3.sumatodo()


// let Servicio1 = 2000
// let Servicio2 = 1500
// let Servicio3 = 1000

//ciclo While
let cliente = prompt("es cliente?")
while ( cliente != "Si" )
alert ("Lo siento debe ser cliente" )

//funcion con condicional

function Servicios2(){
let compra = prompt('ingrese que servicio solicita')
if (compra === 'Servicio1'){
 alert('el servicio cuesta ' + Servicio1.precio)
 } else if (compra === 'Servicio2' ){
   alert('el servicio cuesta ' + Servicio2.precio)

 } else if (compra === 'Servicio3'){
 alert('el servicio cuesta'+ Servicio3.precio)
 } else if ( compra !== Servicio1 || Servicio2 || Servicio3){
   alert( "Disculpe su servicio no existe")
  }
  
}

Servicios2()

//variables para elegir medio de pago//

let Tarjeta = 1.5
let Efectivo = 1



//condicional para cobrar intereses mediante el pago con tarjeta//
function Pagos(){
let Pago = prompt('¿Cual es su medio de pago?')

if(Pago === 'Tarjeta' && 'Servicio1'){
   alert('El total de su compra es de '+ Servicio1.precio * Tarjeta) 
  } else if (Pago === 'Efectivo' && 'Servicio1'){
    alert ( 'el total de su compra es de ' + Servicio1.precio * Efectivo)
  } else if(Pago === 'Tarjeta' && 'Servicio2'){
  alert('El total de su compra es de '+ Servicio2.precio * Tarjeta) 
  } else if (Pago === 'Efectivo' && 'Servicio2'){
   alert ( 'el total de su compra es de ' + Servicio2.precio * Efectivo)
  } else if(Pago === 'Tarjeta' && 'Servicio3'){
  alert('el total de su compra es de '+ Servicio3.precio * Tarjeta) 
  } else if (Pago === 'Efectivo' && 'Servicio3'){
   alert ( 'el total de su compra es de ' + Servicio3.precio * Efectivo)
  } else if (Pago != 'Tarjeta' || 'Efectivo'){
  alert('Disculpe no aceptamos ese medio de pago, vuelva a intentarlo nuevamente')
  }
}
Pagos()



 console.log("Gracias por su compra")



