function verificador() {
    const numero1 = document.getElementById('numero1').value;
    const numero2 = document.getElementById('numero2').value;
    const numero3 = document.getElementById('numero3').value;
    const resultado = document.getElementById('resultado');
    const media= (parseFloat(numero1)) + parseFloat(numero2) + parseFloat(numero3) / 3;
    if (media >= 60) {
        resultado.textContent = "aprovado.";
    } else
        resultado.textContent = "reprovado.";
}
