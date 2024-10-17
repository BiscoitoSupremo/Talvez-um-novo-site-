function revelarResposta(enigmaId) {
    const resposta = document.getElementById(`resposta1`);
    resposta.classList.toggle('escondido');
}

function explorarSurpresa() {
    const surpresaDiv = document.getElementById('surpresa');
    surpresaDiv.classList.toggle('escondido');
    surpresaDiv.innerHTML = "Parabéns! Você desbloqueou um pensamento profundo!";
}
