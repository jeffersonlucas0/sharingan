// Aqui você pode adicionar interações com o usuário ou animações se desejar

// Exemplo de uma simples interação para quando o usuário clicar em uma imagem da galeria
document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
        alert('Você clicou em uma imagem do Sharingan!');
    });
});
