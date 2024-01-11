const areas = document.querySelectorAll('area');

areas.forEach(area => {
    area.addEventListener('mouseover', () => {
        area.style.opacity = '0.6';
        // Adicione mais interações conforme necessário
    });

    area.addEventListener('mouseout', () => {
        area.style.opacity = '1';
        // Retorne ao estado normal ao tirar o mouse de cima da área
    });
});

//AUMENTAR E DIMINUIR FONTE


