let automovil;
let generador;
let pyad = [];
let dyjd = [];
let alum = [];
let public = [];
function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
const claseConductor = () => {
    let condicion = getRandomArbitrary(1, 6);
    let conductor;
    switch (condicion) {
        case 1:
            conductor = "publico";
            break;
        case 2:
            conductor = "alumno";
            break;
        case 3:
            conductor = "directivo";
            break;
        case 4:
            conductor = "jefedepartamento";
            break;
        case 5:
            conductor = "profesor";
            break;
        case 6:
            conductor = "administrativo";
            break;
        default:
            console.log("Error");
    }
    return conductor;
};
const crearAutomoviles = () => {
    automovil = {
        categoria: claseConductor(),
        tiempo: getRandomArbitrary(1, 18),
    };
    return automovil;
};
const generarGrupos = () => {
    let grupos = [];
    let tiempo = getRandomArbitrary(1000, 5000);
    generador = setInterval(() => {
        let numeroGrupos = getRandomArbitrary(1, 25);
        tiempo = getRandomArbitrary(1000, 5000);
        while (numeroGrupos > 0) {
            grupos.push(crearAutomoviles());
            numeroGrupos--;
        }
        generarEstacionamientos(grupos);
        grupos = [];
    }, tiempo);
};
const generarEstacionamientos = (grupos) => {
    // let allgroups:Array<any> = [];
    // allgroups.push(grupos)
    grupos.forEach((value, index) => {
        if ((value.categoria === "profesor" || value.categoria === "administrativo") && pyad.length < 14) {
            pyad.push(value);
        }
        else if ((value.categoria === "directivo" || value.categoria === "jefedepartamento") && dyjd.length < 8) {
            dyjd.push(value);
        }
        else if (value.categoria === "alumno" && alum.length < 16) {
            alum.push(value);
        }
        else if ((value.categoria === "publico" && public.length < 30)) {
            public.push(value);
        }
        else if (public.length < 30) {
            public.push(value);
        }
        else { }
    });
    console.log("publicos");
    console.log(public);
    console.log("Alumnos");
    console.log(alum);
    console.log("directivo y jefes de departamento");
    console.log(dyjd);
    console.log("profesores y administrativo");
    console.log(pyad);
    console.log("grupos");
    console.log(grupos);
    if (alum.length === 16 && dyjd.length === 8 && pyad.length === 14 && public.length === 30) {
        salida(pyad, dyjd, alum, public);
        clearInterval(generador);
    }
};
const salida = (pyad, dyjd, alum, public) => {
    let tiempo = setInterval(() => {
        if (pyad.length > 0)
            recorrido(pyad);
        if (dyjd.length > 0)
            recorrido(dyjd);
        if (alum.length > 0)
            recorrido(alum);
        if (public.length > 0)
            recorrido(public);
        console.log("publicos");
        console.log(public);
        console.log("Alumnos");
        console.log(alum);
        console.log("directivo y jefes de departamento");
        console.log(dyjd);
        console.log("profesores y administrativo");
        console.log(pyad);
        if (pyad.length === 0 && dyjd.length === 0 && alum.length === 0 && public.length === 0) {
            clearInterval(tiempo);
        }
    }, 1000);
    // setTimeout(()=>{
    // 	clearInterval(tiempo)
    // },10000)
};
const recorrido = (array) => {
    array.forEach((value, index) => {
        if (value.tiempo <= 0) {
            array.splice(index, 1);
        }
        value.tiempo = value.tiempo - 1;
    });
};
const main = () => {
    generarGrupos();
};
main();
