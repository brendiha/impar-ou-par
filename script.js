function verificador() {
    var n1 = document.getElementById('numero1').value;
    var n2 = document.getElementById('numero2').value;
    var n3 = document.getElementById('numero3').value;
    var resultado = document.getElementById('resultado');
    var media= (parseFloat(n1)) + parseFloat(n2) + parseFloat(n3) / 3;
    if (media >= 60) {
        resultado.textContent = "aprovado.";
    } else {
        resultado.textContent = "reprovado.";
    }
}
