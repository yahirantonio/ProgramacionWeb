import {gasolineria, diesel} from "./autos"
import "./style.css"

// variables globales
let gasolineriaPrueba;
let salaPrueba;
let variableTiempo;
const clientesAtendidos = [0,0,0,0,0];
const cantidadGasolinaEnLitros = [0,0,0,0,0];
const costoGasolina = [0,0,0,0,0];

//gasolina para gasolineria 0,1,2,3,4 y diesel
let gasolina = [10,10,10,10,10];

// Intervalo para que funcione las cajas
const tiempo = setInterval(()=>{

	gasolineriaPrueba = Object.values(gasolineria).slice(0);
	console.log("vehiculos en diesel")
	console.log(diesel)
	console.log("vehiculos en gasolineria")
	console.log(gasolineriaPrueba)
	console.log("gasolina en gasolineria")
	console.log(gasolina)
	console.log("costo de gasolina")
	console.log(costoGasolina)

	//condicional para que funcione si la sala de espera esta vacia
	if(gasolineria !== undefined && gasolineria.isArray === undefined && gasolineria !== null){

		//asignacion de variables para las cajas
			if(diesel !== undefined && diesel.isArray === undefined && diesel !== null && diesel.length > 0){
				if(gasolina[4] > 0){
					if(gasolina[4] - diesel[0].GasolinaEnLitros < 0) {
						diesel[0].GasolinaEnLitros -= gasolina[4];
						cantidadGasolinaEnLitros[4] += gasolina[4];
						gasolina[4] = 0;
						console.log("Se acabo el diesel")
					}else {
						//calcula los valores a imprimir al final (clientes, movimientos y tiempo)
						clientesAtendidos[4] += 1;
						gasolina[4] -= diesel[0].GasolinaEnLitros;
						cantidadGasolinaEnLitros[4] += diesel[0].GasolinaEnLitros;
						costoGasolina[4] += diesel[0].GasolinaEnLitros * 15.25;
						// elimina el cliente de la sala de espera
						diesel.shift()
					}
				} else {
					console.log("Se acabo el diesel")
				}
			}
		//funcion para meter los clientes dentro de sus respectivas cajas
		filaGasolineria(gasolineria)
	}
}, 3000);

// se utilizo un switch para mandar cada vahiculo a se respectiva gasolineria
const filaGasolineria = (gasolineria) =>{

	if(gasolineria.length > 0){
		switch(gasolineria[0].Caja){
			case 0:
				atencionVehiculo(0)
			break;
			case 1:
				atencionVehiculo(1)
			break;
			case 2:
				atencionVehiculo(2)
			break;
			case 3:
				atencionVehiculo(3)
			break;
			default:
			console.log("Se acabo la gasolina en las gasolinerias");
			break;
		}
	}
}

const atencionVehiculo = (numGasolineria) =>{
	if(gasolina[numGasolineria] > 0){
		if((gasolina[numGasolineria] - gasolineria[0].GasolinaEnLitros) < 0) {
			gasolineria[0].GasolinaEnLitros -= gasolina[numGasolineria];
			cantidadGasolinaEnLitros[numGasolineria] += gasolina[numGasolineria];

			movimientos(numGasolineria);
			gasolina[numGasolineria] = 0;
			console.log("Se acabo la gasolina en la gasolineria numero: ")
			console.log(numGasolineria)
		} else {
			gasolina[numGasolineria] -= gasolineria[0].GasolinaEnLitros;
			cantidadGasolinaEnLitros[numGasolineria] += gasolineria[0].GasolinaEnLitros;

			movimientos(numGasolineria);
			gasolineria.shift()
		} 
	} else {
		//Aqui se hace el cambio de la gasolineria
		gasolineria[0].Caja = gasolina.findIndex(encontrar);
	}
}

// Funcion para encontrar una gasolineria que no este vacia
const encontrar = (element) => element > 0;

//funcion para obtener los movimientos de cada vehiculo
const movimientos = (numGasolineria) =>{
	clientesAtendidos[numGasolineria] += 1;
	if(gasolineria[0].TipoDeGasolina === "premium"){
		costoGasolina[numGasolineria] += gasolineria[0].GasolinaEnLitros * 20.56;
	} else {
		costoGasolina[numGasolineria] += gasolineria[0].GasolinaEnLitros * 14.69;
	}
}

// Constante para limpiar los intervalos y mostrar los resultados
const tiempo2 = setInterval(()=>{
	if(gasolina[0] === 0 && gasolina[1] === 0 && gasolina[2] === 0 && gasolina[3] === 0){
		clearInterval(tiempo)
		clearInterval(tiempo2)

		for (let i = 0; i <= 3; i++) {
			console.log(`Clientes atendidos en la gasolineria N°${i + 1}: ${clientesAtendidos[i]}, cantidad de Gasolina total: ${cantidadGasolinaEnLitros[i]}, Costo total de gasolina: ${costoGasolina[i]} pesos`)
		}

		console.log(`Clientes atendidos en la gasolineria diesel: ${clientesAtendidos[4]}, cantidad de Gasolina total: ${cantidadGasolinaEnLitros[4]}, Costo total de gasolina: ${costoGasolina[4]} pesos`)
	}
}, 10000)