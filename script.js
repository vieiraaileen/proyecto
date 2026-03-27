// Esperamos a que todo el documento HTML cargue antes de ejecutar el código
document.addEventListener('DOMContentLoaded', () => {

    // 1. Seleccionamos todos los botones de filtro y todas las tarjetas de héroes
    const filterButtons = document.querySelectorAll('.filter-btn');
    const heroCards = document.querySelectorAll('.hero-card');

    // 2. Le agregamos un "escuchador de clics" a cada botón
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            
            // A. Efecto visual en los botones: 
            // Quitamos la clase 'active' (color azul) de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Se la ponemos solo al botón que el usuario acaba de hacer clic
            button.classList.add('active');

            // B. Lógica del filtro:
            // Obtenemos qué categoría quiere ver el usuario (all, duelista, estratega, vanguardia)
            const filterValue = button.getAttribute('data-filter');

            // Recorremos cada tarjeta de héroe para decidir si la mostramos o la ocultamos
            heroCards.forEach(card => {
                // Si el filtro es "all" (Todos) O si la tarjeta tiene la clase del rol buscado...
                if (filterValue === 'all' || card.classList.contains(filterValue)) {
                    // ...la mostramos (usamos 'flex' porque así lo diseñamos en el CSS)
                    card.style.display = 'flex'; 
                } else {
                    // ...si no coincide, la ocultamos por completo
                    card.style.display = 'none';
                }
            });
        });
    });

});
