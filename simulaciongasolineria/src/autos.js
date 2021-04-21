function NumerosAleatorios(min, max) {
   return Math.round(Math.random() * (max - min) + min);
}

// declaracion del array, variable del clear interval, sala para
// el tiempo de llegada de los vehiculos y vehiculos para el numero
//de vehiculos
const gasolineria = new Array();
const diesel = new Array();
let i = 1;
let sala = NumerosAleatorios(1000,8000);
let vehiculos = NumerosAleatorios(1,12);
let contadorSala = 0;
let vehiculo;

// Creacion de vehiculos y asignacion al array gasolineria
const crearVehiculo = (Litros, TipoGasolina, caja) =>{

	if(TipoGasolina === 1){
		TipoGasolina = "magna"
	} else if(TipoGasolina === 2){
		TipoGasolina = "premium"
	}else if(TipoGasolina === 3){
		TipoGasolina = "diesel"
	}

	vehiculo = {
		"GasolinaEnLitros": Litros,
		"TipoDeGasolina": TipoGasolina,
		"Caja": caja
	}
	
	if(TipoGasolina === "diesel"){
		delete vehiculo.Caja;
		diesel.push(vehiculo)
	} else {
		gasolineria.push(vehiculo);
	}
}

// Cambio en el intervalo de tiempo para simular la llegada 
//de los vehiculos
const cambioTiempo = () =>{
	sala = NumerosAleatorios(1000,8000);
	contadorSala = 0;
	i = 1;
	// console.log('Entro en el cambio de tiempo:') 
	// console.log(`numero i = ${i}, sala = ${sala} y contadorSala =` + contadorSala)
}

// funcion principal de creacion y manejo de tiempos
const tiempo = setInterval(()=>{
	
	while( i <= vehiculos ){
		i += 1;

		crearVehiculo(NumerosAleatorios(1,10),NumerosAleatorios(1,3), NumerosAleatorios(0,3));
		// console.log('Entro en el generar los vehiculos:')
		// console.log(`numero vehiculo ${vehiculos} y sala de espera` + gasolineria)
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
}, 100000)



export {gasolineria, diesel};