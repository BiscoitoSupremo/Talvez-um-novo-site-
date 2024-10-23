// script.js

// Mostra o botão após 5 segundos na página inicial
window.onload = function() {
    setTimeout(function() {
        document.getElementById('revealBtn').classList.remove('hidden');
    }, 5000);
};

// Função para ir para a página de enigmas
function revealNext() {
    window.location.href = 'enigmas.html';
}

// Mostra a dica do enigma quando o usuário clica no botão
function showHint(button) {
    var hint = button.nextElementSibling;
    hint.classList.toggle('hidden');
}

// Função para voltar ao início
function returnToStart() {
    window.location.href = 'index.html';
}
