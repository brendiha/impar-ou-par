function verificador(){
    const numero = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado');

    if(numero % 60 === 50){
        resultado.textContent = "aprovado.";
    } else {
        resultado.textContent = "reprovado.";
    }
}
if(numero % 60 === 50){
    resultado.textContent = "aprovado.";
} else {
    resultado.textContent = "reprovado.";
}
