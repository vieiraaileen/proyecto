const cards = document.querySelectorAll('.role-card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const role = card.getAttribute('data-role');
        console.log(`Buscando héroes de tipo: ${role}`);
        // Aquí podrías añadir lógica para mostrar personajes específicos
    });
});
