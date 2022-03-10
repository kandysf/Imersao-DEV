function ConverterComercial() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarComercial = parseFloat(valor);

  var valorEmReal = valorEmDolarComercial * 3.92;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em reais é R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterTuristico() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarTuristico = parseFloat(valor);

  var valorEmReal = valorEmDolarTuristico * 4.29;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em reais é R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}
