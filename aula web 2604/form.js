/*
Comentarios
*/
function calcular(){

	var n1 = parseInt(document.dados.valor1.value);
	var n2 = parseInt(document.dados.valor2.value);
	if(document.dados.valor1.value.length == 0 || isNaN(n1)){


		//window.alert("Preencha o primeiro valor corretamente!");
		//document.getElementById("alerta1").innerHTML = "Preencha o primeiro valor corretamente";

		document.getElementById("alerta1").style.display = "block";
		document.dados.valor1.focus();
		document.dados.valor1.value="";
		return;
	}
	document.getElementById("alerta1").style.display = "none";

	if(document.dados.valor2.value.length == 0 || isNaN(n2)){


		window.alert("Preencha o segundo valor corretamente!");
		document.dados.valor2.focus();
		document.dados.valor2.value="";
		return;
	}
	var res = n1+n2;
	document.dados.resultado.value = res;
}