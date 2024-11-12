function verificador(){
    const numero = document.getElementById('numero1').value;
    const numero = document.getElementById('numero2').value;
    const numero = document.getElementById('numero3').value;
    const resultado = document.getElementById('resultado');

    if(media  >= 60){
        resultado.textContent = "aprovado.";
    } else {
        resultado.textContent = "reprovado.";
    }
    const numero = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado');

}
if(numero % 60 === 50){
    resultado.textContent = "aprovado.";
} else {
    resultado.textContent = "reprovado.";
}
