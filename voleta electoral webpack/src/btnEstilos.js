export const estilos = () => {
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