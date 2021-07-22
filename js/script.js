const iconCurtida = document.querySelectorAll('[data-icon-curtida]');

iconCurtida.forEach(icone => {
    icone.addEventListener('click', () => {
        icone.classList.toggle('ping');
        if (icone.getAttribute('fill') == 'white') {
            icone.setAttribute('fill', 'rgb(87, 74, 232)');
        } else {
            icone.setAttribute('fill', 'white');
        }
    })
})