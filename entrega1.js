//vars
let Servicio1 = 2000
let Servicio2 = 1500
let Servicio3 = 1000

//ciclo While
let cliente = prompt("es cliente?")
while ( cliente != "Si" )
alert ("Lo siento debe ser cliente" )

//funcion con condicional

function Servicios(){
let compra = prompt('ingrese que servicio solicita')
if (compra === 'Servicio1'){
 alert('el servicio cuesta ' + Servicio1)
 } else if (compra === 'Servicio2' ){
   alert('el servicio cuesta ' + Servicio2)

 } else if (compra === 'Servicio3'){
 alert('el servicio cuesta'+ Servicio3)
 } else if ( compra !== Servicio1 || Servicio2 || Servicio3){
   alert( "Disculpe su servicio no existe")
  }
  
}

Servicios()

//variables para elegir medio de pago//

let Tarjeta = 1.5
let Efectivo = 1



//condicional para cobrar intereses mediante el pago con tarjeta//
function Pagos(){
let Pago = prompt('¿Cual es su medio de pago?')

if(Pago === 'Tarjeta' && 'Servicio1'){
   alert('El total de su compra es de '+ Servicio1 * Tarjeta) 
  } else if (Pago === 'Efectivo' && 'Servicio1'){
    alert ( 'el total de su compra es de ' + Servicio1 * Efectivo)
  } else if(Pago === 'Tarjeta' && 'Servicio2'){
  alert('El total de su compra es de '+ Servicio2 * Tarjeta) 
  } else if (Pago === 'Efectivo' && 'Servicio2'){
   alert ( 'el total de su compra es de ' + Servicio2 * Efectivo)
  } else if(Pago === 'Tarjeta' && 'Servicio3'){
  alert('el total de su compra es de '+ Servicio3 * Tarjeta) 
  } else if (Pago === 'Efectivo' && 'Servicio3'){
   alert ( 'el total de su compra es de ' + Servicio3 * Efectivo)
  } else if (Pago != 'Tarjeta' || 'Efectivo'){
  alert('Disculpe no aceptamos ese medio de pago, vuelva a intentarlo nuevamente')
  }
}
Pagos()

  
  

 console.log("Gracias por su compra")
