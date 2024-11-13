function verificador() {
    const n1 = document.getElementById('numero1').value;
    const n2 = document.getElementById('numero2').value;
    const n3 = document.getElementById('numero3').value;
    const resultado = document.getElementById('resultado');
    const media= (parseFloat(n1)) + parseFloat(n2) + parseFloat(n3) / 3;
    if (media >= 60) {
        resultado.textContent = "aprovado.";
    } else
        resultado.textContent = "reprovado.";
}
