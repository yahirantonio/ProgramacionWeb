var cajas = [];
var cruces = document.querySelectorAll('.cruz');
var votos = {
	0: {
		"candidato": "anaya",
		"partido": "PAN",
		"cruz": cruces[0]
	},
	1: {
		"candidato": "meade",
		"partido": "PRI",
		"cruz": cruces[1]
	},
	2: {
		"candidato": "anaya",
		"partido": "prd",
		"cruz": cruces[2]
	},
	3: {
		"candidato": "meade",
		"partido": "verde",
		"cruz": cruces[3]
	},
	4: {
		"candidato": "andres",
		"partido": "pt",
		"cruz": cruces[4]
	},
	5: {
		"candidato": "anaya",
		"partido": "movimientociudadano",
		"cruz": cruces[5]
	},
	6: {
		"candidato": "meade",
		"partido": "nuevalianza",
		"cruz": cruces[6]
	},
	7: {
		"candidato": "andres",
		"partido": "morena",
		"cruz": cruces[7]
	},
	8: {
		"candidato": "andres",
		"partido": "encuentrosocial",
		"cruz": cruces[8]
	},
	9: {
		"candidato": "jaime",
		"partido": "independiente",
		"cruz": cruces[9]
	}
}

var sections = document.getElementsByTagName('section');

// Todos los botones se les asigna un click listener
var sections = [].slice.call(sections);
sections.forEach((value, index)=>{
	value.addEventListener('click',function(){
		marcarVoto(votos[index])
	});
});

function marcarVoto(datos){
	let bandera = true;
	
	function eliminar(){
		cajas.forEach((value,index)=>{
			if(value.candidato === datos["candidato"]
				&& value.partido === datos["partido"]){
				cajas.splice(index,1);
			bandera = false;
			datos["cruz"].style.visibility = 'hidden';
		}
	});
	}

	eliminar()

	if(cajas.length <= 2){
		if (bandera) {
			datos["cruz"].style.visibility = "visible";
			let voto = new Voto(datos["candidato"],datos["partido"]);
			cajas.push(voto);
			if (datos["candidato"] !== cajas[0]["candidato"]) {
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
	console.log(cajas)
}

function eliminar(datos){

}

function Voto(candidato,partido){
	this.candidato = candidato;
	this.partido = partido;
}

function estilos(){
	votar.disabled = false;
	votar.style.background = "linear-gradient(to left, #FF0909, #FFFFFF, #05810B)";
	votar.addEventListener('mouseover', function(){
		votar.style.setProperty('background', 'black');
		votar.style.boxShadow = "2px 2px 15px #000";
	});
	votar.addEventListener("mouseout", function(){
		votar.style.boxShadow = "";
		votar.style.background = "linear-gradient(to left, #FF0909, #FFFFFF, #05810B)";
	});
	votar.addEventListener("click", function(){
		votar.style.background = "#804000";
	});
}

var votar = document.getElementById("votar");



var CIndependiente = document.getElementById("independiente");
CIndependiente.addEventListener('keyup', function(){
	if (CIndependiente.value !== null && CIndependiente.value !== "") {
		estilos();
	} else {
		votar.disabled = true;
		votar.style.background = "#FF0000";
	}
});

votar.addEventListener('click',function(){

	console.log("hola")
	if (cajas.length > 0 && CIndependiente.value !== '') {
		alert("cuidado tramposo");
	} else{
		if (cajas.length > 0) {
			cajas.forEach((value, index)=>{
				alert("Usted voto por el candidato: "+ value.candidato
					+ "\nPor el partido: " + value.partido)
			});
		} else {
			alert("usted voto por un candidato independiente: "+ CIndependiente.value);
		}
	}
});