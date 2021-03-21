import candidatos from "./candidatos";
import Voto from "./classVoto";
import {estilos} from "./btnEstilos";

import "./css/app.css";
import "./css/estilos.css";

const entidad = /[A-Z]{1,15}/;
const cp = /[I]{1,3}/;
const distrito = /[0-9]{1,2}/;
const municipio = /[A-Z]{1,15}/;

const cajas = [];
const formulario = document.forms["datos_geoelectorales"]
const sections2 = document.getElementsByTagName('section');
const sections = [].slice.call(sections2);
sections.forEach((value, index) => {
	value.addEventListener('click', () => {
		marcarVoto(candidatos[index])
	});
});

const marcarVoto = (datos) => {
	let {candidato, partido} = datos;
	let bandera = true;

	const eliminar = () =>{
		cajas.forEach((value, index) =>{
			if (candidato === value.candidato && partido === value.partido) {
				cajas.splice(index,1)
				datos["cruz"].style.visibility = "hidden";
				bandera = false;
			}
		})
	}

	eliminar()

	if (cajas.length <= 2) {
		if (bandera) {
			datos["cruz"].style.visibility = "visible";
			let voto = new Voto(candidato, partido)
			cajas.push(voto);
			if (candidato !== cajas[0]["candidato"]) {
				alert("voto Nulo");
				eliminar();
			}
		}
	} else {
		alert("voto nulo");
	}

	if (cajas.length>0) {
		estilos();
		CIndependiente.disabled = true;
		CIndependiente.value = "";
	} else {
		votar.disabled = true;
		CIndependiente.disabled = false;
		votar.style.background = "#FF0000";
	}

	console.log(cajas);
}

let votar = document.getElementById("votar");

const CIndependiente = document.getElementById("independiente");

CIndependiente.addEventListener('keyup', () => {
	if (CIndependiente.value !== null && CIndependiente.value !== "") {
		estilos();
	} else {
		votar.disabled = true;
		votar.style.background = "#FF0000";
	}
});

const testeo = () =>{
	let datosFormulario = {
		EntidadFederativa: formulario.entidad_federativa.value,
		CircunscripcionPlurinominal: formulario.cir_plurinominal.value,
		DistritoElectoral: formulario.distrito_electoral.value,
		Municipio: formulario.municipio.value
	}

	let resultado = [];
	resultado[0] = entidad.test(datosFormulario.EntidadFederativa)
	resultado[1] = cp.test(datosFormulario.CircunscripcionPlurinominal)
	resultado[2] = distrito.test(datosFormulario.DistritoElectoral)
	resultado[3] = municipio.test(datosFormulario.Municipio)

	return resultado;
}

votar.addEventListener("click",() => {
	let resultado = testeo()

	if (cajas.length > 0 && CIndependiente.value !== '') {
		alert("cuidado tramposo");
	} else{

		if(resultado[0] && resultado[1] && resultado[2] && resultado[3]){

			if (cajas.length > 0) {

			cajas.forEach((value, index)=>{
				alert("Usted voto por el candidato: "+ value.candidato
					+ "\nPor el partido: " + value.partido)
			});

			} else {
				alert("usted voto por un candidato independiente: "+ CIndependiente.value);
			}
		} else{
			alert("Favor de rellenar bien los campos")
		}

	}
});