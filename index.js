document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel-container');
    const prevBtns = document.querySelectorAll('#prev-btn');
    const nextBtns = document.querySelectorAll('#next-btn');

    // Função para calcular o quanto rolar com base no tamanho do primeiro cartão.
    const getScrollAmount = () => {
        const firstCard = carousel.querySelector('.card-message');
        if (!firstCard) return 0;

        const cardWidth = firstCard.offsetWidth;
        const gap = 24; 

        return cardWidth + gap;
    };



    // Funções de rolagem
    const scrollLeft = () => {
        const scrollAmount = getScrollAmount();
        carousel.scrollLeft -= scrollAmount;
        setTimeout(updateButtons, 300);
    };

    const scrollRight = () => {
        const scrollAmount = getScrollAmount();
        carousel.scrollLeft += scrollAmount;
        setTimeout(updateButtons, 300);
    };

    // Event listeners
    prevBtns.forEach(btn => btn.addEventListener('click', scrollLeft));
    nextBtns.forEach(btn => btn.addEventListener('click', scrollRight));

    // Atualiza estado dos botões quando o usuário rola manualmente
    carousel.addEventListener('scroll', updateButtons);

    // Inicializa os botões corretos
    updateButtons();
});
