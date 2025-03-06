document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth <= 768) { // Verifica se a largura da tela é de um dispositivo móvel
        const contentWrapper = document.querySelector('.texto-expansivel');
        const elements = contentWrapper.children;

        // Exibir os três primeiros elementos e ocultar o restante
        for (let i = 0; i < elements.length; i++) {
            if (i < 5) {
                elements[i].style.display = 'block'; // Mostrar os três primeiros
            } else {
                elements[i].style.display = 'none'; // Ocultar o restante
            }
        }

        // Adicionar o botão "Leia Mais" logo acima do terceiro elemento
        const readMoreBtn = document.querySelector('.read-more-btn');
        contentWrapper.insertBefore(readMoreBtn, elements[2]);

        // Adicionar o comportamento do botão "Leia Mais"
        readMoreBtn.addEventListener('click', function() {
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.display = 'block'; // Mostrar todos os elementos ao clicar
            }
            document.querySelector('.gradient-overlay').style.display = 'none';
            this.style.display = 'none';
        });
    } else {
        // Exibe todo o conteúdo e esconde o botão e o gradiente em telas maiores (computadores)
        const contentWrapper = document.querySelector('.texto-expansivel');
        const elements = contentWrapper.children;

        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = 'block'; // Mostrar todos os elementos
        }
        
        document.querySelector('.gradient-overlay').style.display = 'none';
        document.querySelector('.read-more-btn').style.display = 'none';
    }
});
