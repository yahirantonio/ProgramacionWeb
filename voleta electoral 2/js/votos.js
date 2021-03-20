let caja = [];
let cruces = document.querySelectorAll('cruz');
let votos = {
  0: {
    "candidato": "anaya",
    "partido": "PAN",
    "cruz": cruces[0]
  },
  1: {
    "candidato": "anaya",
    "partido": "PAN",
    "cruz": cruces[1]
  }
}

let votos = document.querySelectorAll('section');

// Todos los botones se les asigna un click listener
votos.forEach((value, index) => {
  value.addEventListener('click', function () {
    marcarVoto(votos[0].candidato, partido, votos[index].cruz);
  });
});

function marcarVoto(candidato, partido, id) {

  let isInArray = false;

  // Recorremos para saber si ya existe el voto
  caja.forEach( (index, value) =>{
    if (
      value.candidato === candidato
      && value.partido === partido
    ) {
      caja.splice(index, 1);
      isInArray = true;
      cruz.visibility = hidden;
    }
  });

  if(!isInArray) {
    let voto = new Voto();
    voto.candidato = candidato;
    voto.partido = partido;
    caja.push(voto);
    cruz.visibility = visibile;
  }
}
class Voto {
  candidato;
  partido;

  contructor() {
    candidato = "";
    partido = "";
  }

  contructor(candidato, partido) {
    this.candidato = candidato;
    this.partido = partido;
  }
}