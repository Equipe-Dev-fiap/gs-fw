// Rolagem suave para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Previne o comportamento padrão do link
        // Rola a página suavemente até o elemento de destino
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Fecha o menu móvel após clicar em um link, se estiver aberto
        if (document.getElementById('mobile-nav').classList.contains('open')) {
            document.getElementById('hamburger-menu').classList.remove('open');
            document.getElementById('mobile-nav').classList.remove('open');
        }
    });
});

// Funcionalidade do menu hambúrguer
const hamburgerMenu = document.getElementById('hamburger-menu'); // Obtém o elemento do ícone do hambúrguer
const mobileNav = document.getElementById('mobile-nav'); // Obtém o elemento da navegação móvel

// Adiciona um ouvinte de evento de clique ao menu hambúrguer
hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('open'); // Alterna a classe 'open' para o ícone do hambúrguer (para animação)
    mobileNav.classList.toggle('open'); // Alterna a classe 'open' para a navegação móvel (para mostrar/esconder)
});
// Funcionalidade do slideshow
let slideIndex = 1; // Inicializa o índice do slide atual
showSlides(slideIndex); // Mostra o slide inicial

// Função para avançar ou retroceder os slides
function plusSlides(n) {
    showSlides(slideIndex += n); // Atualiza o índice do slide e chama a função para mostrar
}

// Função para exibir os slides
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides"); // Obtém todos os elementos com a classe "mySlides"
    if (n > slides.length) { slideIndex = 1 } // Se o índice for maior que o número de slides, volta para o primeiro
    if (n < 1) { slideIndex = slides.length } // Se o índice for menor que 1, vai para o último slide
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Esconde todos os slides
    }
    slides[slideIndex - 1].style.display = "block"; // Exibe o slide atual
}

// Auto-play do slideshow: muda a imagem a cada 5 segundos
setInterval(() => {
    plusSlides(1); // Avança para o próximo slide
}, 5000); // Intervalo de 5 segundos (5000 milissegundos)


