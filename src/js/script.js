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
