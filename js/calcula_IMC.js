var tituloPagina = document.querySelector(".tituloPagina");
tituloPagina.textContent = "Mateus Nutrição"

var titulo = document.querySelector(".titulo");
titulo.textContent = "Tabela de Nutrição"



titulo.addEventListener("click", mostraMensagem);


function mostraMensagem() {
	console.log("Olá eu fui clicado aqui");
}

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; 1 < pacientes.length; i++) {
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");

    var tdImc = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

	var TdImc = paciente.querySelector(".info-imc");


	var pesoEhvalido = validaPeso(peso);
	var alturaEhvalida = validaAltura(altura);

	if(!pesoEhvalido) {
			pesoEhvalido = false;
			TdImc.textContent = "Peso Inválido"
			paciente.classList.add("pacienteInvalido")
	}

	if(!alturaEhvalida) {
			alturaEhvalida = false;
			TdImc.textContent = "Altura Inválida"
			paciente.classList.add("pacienteInvalido")

	}

	if (alturaEhvalida && pesoEhvalido){
			var imc = calculaImc(peso,altura)
			TdImc.textContent = imc
	}
	

	function validaPeso(peso) {
		if(peso >= 0 && peso <1000){
			return true;
		}else {
			return false;
		}
	}

	function validaAltura (altura) {
		if(altura >= 0 && altura <= 3.0) {
			return true;
		}else {
			return false;
		}
	}

	function calculaImc (peso, altura) {
		var imc = peso / (altura*altura)
		return imc.toFixed(2)
	}


	var imcDaConta = calculaImc(peso, altura);
}

