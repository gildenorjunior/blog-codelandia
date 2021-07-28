const iconCurtida = document.querySelectorAll('[data-icon-curtida]');
const iconTema = document.querySelector('[data-icon-tema]');
const body = document.querySelector('body');
const input = document.querySelector('input');
const titulo = document.querySelectorAll('#post__titulo');
const posts = document.querySelectorAll('.post__container');

function acaoCurtida() {
    this.classList.toggle('ping');
    if (this.getAttribute('fill') == 'none') {
        this.setAttribute('fill', 'rgb(87, 74, 232)');
    } else {
        this.setAttribute('fill', 'none');
    }
};

darkMode = () => {
    if (iconTema.classList.contains('fa-sun-o')) {
        iconTema.classList.remove('fa-sun-o')
        iconTema.classList.add('fa-moon-o')
        body.dataset.tema = 'dark'
    } else {
        iconTema.classList.remove('fa-moon-o')
        iconTema.classList.add('fa-sun-o')
        body.dataset.tema = 'light'
    }
};

buscaPost = () => {
    let textoProcurado = input.value.toLowerCase();
    for (let i = 0; i < posts.length; i++) {
        let texto = titulo[i].innerText;
        let results = texto.toLowerCase().indexOf(textoProcurado) >= 0;
        posts[i].style.display = results ? '' : 'none';
    }
}


iconCurtida.forEach(icone => {
    icone.addEventListener('click', acaoCurtida);
});

iconTema.addEventListener('click', darkMode);
input.onkeyup = buscaPost;