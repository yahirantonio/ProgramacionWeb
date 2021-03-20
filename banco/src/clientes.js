// Generar numeros aleatorios
function NumerosAleatorios(min, max) {
   return Math.round(Math.random() * (max - min) + min);
}

// declaracion del array, variable del clear interval, sala para
// el tiempo de llegada de los clientes y clientes para el numero
//de clientes
const salaEspera = new Array();
const salaExpress = new Array();
let i = 1;
let sala = NumerosAleatorios(1000,10000);
let clientes = NumerosAleatorios(1,10);
let contadorSala = 0;
let cliente;

// Creacion de clientes y asignacion al array salaEspera
const crearCliente = (numeros) =>{
	cliente = {
		"movimiento": numeros
	}

	if(cliente.movimiento === 1){
		salaExpress.push(cliente)
	} else {
		salaEspera.push(cliente);
	}

	
}

// Cambio en el intervalo de tiempo para simular la llegada 
//de los clientes
const cambioTiempo = () =>{
	sala = NumerosAleatorios(1000,10000);
	contadorSala = 0;
	i = 1;
	// console.log('Entro en el cambio de tiempo:') 
	// console.log(`numero i = ${i}, sala = ${sala} y contadorSala =` + contadorSala)
}

// funcion principal de creacion y manejo de tiempos
const tiempo = setInterval(()=>{
	
	while( i <= clientes ){
		i += 1;

		crearCliente(NumerosAleatorios(1,5));
		// console.log('Entro en el generar los clientes:')
		// console.log(`numero cliente ${clientes} y sala de espera` + salaEspera)
	}
	
	contadorSala += 1000;
	// console.log('mostrando contador de sala y espera para ver si entra:')
	// console.log(`numero en el contadorSala ${contadorSala} y sala ${sala}`)

	if(contadorSala >= sala){
		cambioTiempo();
	}

},sala)

// Limpieza del intervalo de tiempo
setTimeout(()=>{
	clearInterval(tiempo)
}, 10000)



export {salaEspera, salaExpress};
