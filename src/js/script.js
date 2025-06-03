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
// Funcionalidade de troca de tema
const body = document.body; // Obtém o elemento <body> do documento
// Seleciona os botões de tema (tanto para desktop quanto para mobile, se existirem)
const themeLightButtons = document.querySelectorAll('#theme-light');
const themeDarkButtons = document.querySelectorAll('#theme-dark');
const themeBlueButtons = document.querySelectorAll('#theme-blue');

// Função para aplicar o tema selecionado
function applyTheme(theme) {
    // Remove todas as classes de tema existentes do corpo
    body.classList.remove('theme-light', 'theme-dark', 'theme-blue');
    body.classList.remove('bg-gray-50', 'text-gray-800', 'bg-gray-900', 'text-gray-100', 'bg-blue-100', 'text-blue-900');

    // Aplica as novas classes de tema
    if (theme === 'light') {
        body.classList.add('theme-light', 'bg-gray-50', 'text-gray-800');
        // Atualiza as cores dos ícones para o tema claro
        themeLightButtons.forEach(button => {
            button.querySelector('i').classList.remove('text-yellow-500', 'text-orange-400', 'text-yellow-600');
            button.querySelector('i').classList.add('text-yellow-500');
        });
        themeDarkButtons.forEach(button => {
            button.querySelector('i').classList.remove('text-gray-300', 'text-gray-500', 'text-gray-100');
            button.querySelector('i').classList.add('text-gray-300');
        });
        themeBlueButtons.forEach(button => {
            button.querySelector('i').classList.remove('text-blue-500', 'text-blue-700', 'text-blue-300');
            button.querySelector('i').classList.add('text-blue-500');
        });
    } else if (theme === 'dark') {
        body.classList.add('theme-dark', 'bg-gray-900', 'text-gray-100');
        // Atualiza as cores dos ícones para o tema escuro
        themeLightButtons.forEach(button => {
            button.querySelector('i').classList.remove('text-yellow-500', 'text-orange-400', 'text-yellow-600');
            button.querySelector('i').classList.add('text-orange-400'); // Amarelo ligeiramente mais escuro para contraste
        });
        themeDarkButtons.forEach(button => {
            button.querySelector('i').classList.remove('text-gray-300', 'text-gray-500', 'text-gray-100');
            button.querySelector('i').classList.add('text-gray-100'); // Lua mais brilhante
        });
        themeBlueButtons.forEach(button => {
            button.querySelector('i').classList.remove('text-blue-500', 'text-blue-700', 'text-blue-300');
            button.querySelector('i').classList.add('text-blue-300');
        });
    } else if (theme === 'blue') {
        body.classList.add('theme-blue', 'bg-blue-100', 'text-blue-900');
        // Atualiza as cores dos ícones para o tema azul
        themeLightButtons.forEach(button => {
            button.querySelector('i').classList.remove('text-yellow-500', 'text-orange-400', 'text-yellow-600');
            button.querySelector('i').classList.add('text-yellow-600');
        });
        themeDarkButtons.forEach(button => {
            button.querySelector('i').classList.remove('text-gray-300', 'text-gray-500', 'text-gray-100');
            button.querySelector('i').classList.add('text-gray-500');
        });
        themeBlueButtons.forEach(button => {
            button.querySelector('i').classList.remove('text-blue-500', 'text-blue-700', 'text-blue-300');
            button.querySelector('i').classList.add('text-blue-700'); // Azul mais escuro para água
        });
    }
}

// Adiciona ouvintes de evento de clique para cada botão de tema
themeLightButtons.forEach(button => button.addEventListener('click', () => applyTheme('light')));
themeDarkButtons.forEach(button => button.addEventListener('click', () => applyTheme('dark')));
themeBlueButtons.forEach(button => button.addEventListener('click', () => applyTheme('blue')));

// Aplica o tema inicial (claro por padrão)
applyTheme('light');


