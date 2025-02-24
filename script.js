<script>
        document.getElementById('leiaMaisBtn').addEventListener('click', function() {
            var itensOcultos = document.querySelectorAll('.oculto');
            itensOcultos.forEach(function(item) {
                item.style.display = 'block';
            });

            // Esconde o botão após clicar
            this.style.display = 'none';
        });
    </script>
