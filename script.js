function verificador(){
    const numero1 = document.getElementById('numero').value;
    const numero2 = document.getElementById('numero').value;
    const numero3 = document.getElementById('numero').value;
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
