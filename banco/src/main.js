import {salaEspera, salaExpress} from "./clientes"
import Cajas from "./cajas"
import "./css/main.css"

// variables globales
let salaPrueba;
let variableTiempo;
let caja1 = [];
let caja2 = [];
let caja3 = [];
let caja4 = [];
let cajaexpress = [];
const clientesAtendidos = [0,0,0,0,0];
const cantidadMovimientos = [0,0,0,0,0];
const tiempoInvertido = [0,0,0,0,0];

//inicializacion de la clase
const cajas = new Cajas();

// Intervalo para que funcione las cajas
const tiempo = setInterval(()=>{

	//Impresion para ver como se mueven los arrays
	salaPrueba = Object.values(salaEspera).slice(0);
	console.log("la impresion es: ");
	console.log(salaPrueba);
	console.log(salaExpress);

	//condicional para que funcione si la sala de espera esta vacia
	if(salaEspera !== undefined && salaEspera.isArray === undefined && salaEspera !== null){

		//asignacion de variables para las cajas
		if(cajaexpress.length === 0){
			if(salaExpress !== undefined && salaExpress.isArray === undefined && salaExpress !== null && salaExpress.length > 0){
				cajaexpress.push(salaExpress[0].movimiento)
				//calcula los valores a imprimir al final (clientes, movimientos y tiempo)
				clientesAtendidos[4] += 1;
				cantidadMovimientos[4] += salaExpress[0].movimiento;
				tiempoInvertido[4] += salaExpress[0].movimiento * 3;
				// elimina el cliente de la sala de espera
				salaExpress.shift()
			}
		}

		//funcion para evaluar si ya terminaron los clientes sus movimientos 
		//y meter otros
		condicionalSala(caja1,0)
		condicionalSala(caja2,1)
		condicionalSala(caja3,2)
		condicionalSala(caja4,3)

		//funcion para meter los clientes dentro de sus respectivas cajas
		condicionalCaja(caja1, cajas.Caja1);
		condicionalCaja(caja2, cajas.Caja2);
		condicionalCaja(caja3, cajas.Caja3);
		condicionalCaja(caja4, cajas.Caja4);
		condicionalCaja(cajaexpress, cajas.CajaExpress);
	}
}, 3000);

// Creacion de la funcion para evaluar a los clientes
const condicionalCaja = (cajaCliente,cajaClase) =>{
	//condicional para saber si no hay ya un cliente adentro
	if(cajaCliente[0] > 0){
		//paso de los movimientos a la clase correspondiente
		cajaClase(cajaCliente[0])
		// eliminacion de los movimientos correspondientes
		cajaCliente[0] -= 1;
	} else {
		// eliminacion del cliente cuando ya no hay movimientos o
		// su salida
		cajaCliente.shift()
	}
}

// Creacion de la funcion para que meta en la caja correspondiente  
// si esta vacia y si la sala de espera no esta vacia
const condicionalSala = (cajaCliente, valor) =>{
	if(cajaCliente.length === 0 && salaEspera.length > 0){
		//mete a la caja 1 el cliente
		cajaCliente.push(salaEspera[0].movimiento)
		//calcula los valores a imprimir al final (clientes, movimientos y tiempo)
		clientesAtendidos[valor] += 1;
		cantidadMovimientos[valor] += salaEspera[0].movimiento;
		tiempoInvertido[valor] += salaEspera[0].movimiento * 3;
		// elimina el cliente de la sala de espera
		salaEspera.shift()
	}
}

// Limpieza del intervalo de tiempo
const tiempo2 = setInterval(()=>{
	if(salaEspera.length === 0 && salaExpress.length === 0 && caja1.length === 0 && cajaexpress.length === 0 && caja2.length === 0 && caja3.length === 0 && caja4.length === 0){
		clearInterval(tiempo)
		clearInterval(tiempo2)

		// impresion de los datos obtenidos
		for (let i = 0; i <= 3; i++) {
			console.log(`Clientes atendidos en la caja${i + 1}: ${clientesAtendidos[i]}, cantidad de movimientos totales: ${cantidadMovimientos[i]}, tiempo total invertido: ${tiempoInvertido[i]} segundos`)
		}

		console.log(`Clientes atendidos en la CajaExpressxpress: ${clientesAtendidos[4]}, cantidad de movimientos totales: ${cantidadMovimientos[4]}, tiempo total invertido: ${tiempoInvertido[4]} segundos`)
	}
}, 10000)