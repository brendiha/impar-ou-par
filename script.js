function verificador(){
    const numero = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado');

    if(numero % 2 === 0){
        resultado.textContent = "aprovado.";
    } else {
        resultado.textContent = "reprovado.";
    }
}
if(numero % 2 === 0){
    resultado.textContent = "aprovado.";
} else {
    resultado.textContent = "reprovado.";
}
