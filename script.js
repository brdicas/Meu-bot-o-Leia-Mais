// Seleciona todos os elementos filhos diretos de .conteudo
        const elementos = document.querySelectorAll('.conteudo > *');

        // Oculta todos os elementos a partir do quarto
        elementos.forEach((elemento, index) => {
            if (index >= 3) {
                elemento.classList.add('oculto');
            }
        });

        // Adiciona o evento de clique ao botão
        document.getElementById('leiaMaisBtn').addEventListener('click', function() {
            // Seleciona todos os elementos ocultos
            const elementosOcultos = document.querySelectorAll('.conteudo > .oculto');
            elementosOcultos.forEach((elemento) => {
                elemento.classList.remove('oculto'); // Torna os elementos visíveis
            });

            // Esconde o botão após clicar
            this.style.display = 'none';
        });
