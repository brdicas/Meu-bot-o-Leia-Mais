<script>
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.read-more-container');
    const elements = container.children;

    // Exibir os três primeiros elementos e ocultar o restante
    for (let i = 0; i < elements.length; i++) {
        if (i < 3) {
            elements[i].style.display = 'block'; // Mostrar os três primeiros
        } else {
            elements[i].style.display = 'none'; // Ocultar o restante
        }
    }

    // Adicionar o comportamento do botão "Leia Mais"
    const readMoreBtn = document.querySelector('.read-more-btn');
    readMoreBtn.addEventListener('click', function() {
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = 'block'; // Mostrar todos os elementos ao clicar
        }
        document.querySelector('.gradient-overlay').style.display = 'none';
        this.style.display = 'none';
    });

    if (elements.length > 3) {
        elements[2].after(readMoreBtn);
    } else {
        readMoreBtn.style.display = 'none';
    }

    if (window.innerWidth > 768) {
        // Exibe todo o conteúdo e esconde o botão e o gradiente em telas maiores (computadores)
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = 'block'; // Mostrar todos os elementos
        }

        document.querySelector('.gradient-overlay').style.display = 'none';
        readMoreBtn.style.display = 'none';
    }
});
</script>
