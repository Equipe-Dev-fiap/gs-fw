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
// Simulador de Nível do Rio (Rio Tietê)
const riverLevelBarContainer = document.getElementById('riverLevelBarContainer'); // Contêiner da barra do nível do rio
const riverLevelBar = document.getElementById('riverLevelBar'); // Barra de nível do rio
const currentLevelSpan = document.getElementById('currentLevel'); // Span para exibir o nível atual
const floodStatusDiv = document.getElementById('floodStatus'); // Div para exibir o status de enchente

const DANGER_LEVEL = 75; // Porcentagem em que o perigo de enchente é declarado

// Função para atualizar o nível do rio com dados aleatórios e verificar o perigo de enchente
function updateRiverLevel() {
    // Gera um nível aleatório entre 0 e 100
    const randomLevel = Math.floor(Math.random() * 101);
    currentLevelSpan.textContent = randomLevel; // Atualiza o texto do nível atual

    // Define a altura da barra com base no nível aleatório
    riverLevelBar.style.height = `${randomLevel}%`;

    // Determina a cor da barra com base no nível de perigo
    let barColor = '#4682B4'; // Azul aço para água normal
    if (randomLevel >= DANGER_LEVEL) {
        barColor = '#DC2626'; // Vermelho para perigo (Tailwind red-600)
    }
    riverLevelBar.style.backgroundColor = barColor; // Aplica a cor à barra

    // Atualiza o status de enchente e suas classes de cor
    if (randomLevel >= DANGER_LEVEL) {
        floodStatusDiv.textContent = 'PERIGO DE ENCHENTE!';
        floodStatusDiv.classList.remove('text-green-600', 'text-yellow-600');
        floodStatusDiv.classList.add('text-red-600');
    } else if (randomLevel >= DANGER_LEVEL - 20) { // Zona de aviso
        floodStatusDiv.textContent = 'ATENÇÃO: Nível Elevado!';
        floodStatusDiv.classList.remove('text-red-600', 'text-green-600');
        floodStatusDiv.classList.add('text-yellow-600');
    }
    else {
        floodStatusDiv.textContent = 'Nível Normal';
        floodStatusDiv.classList.remove('text-red-600', 'text-yellow-600');
        floodStatusDiv.classList.add('text-green-600');
    }
}

// Atualiza o nível do rio a cada 6 segundos
setInterval(updateRiverLevel, 6000);
updateRiverLevel(); // Atualização inicial ao carregar a página
// Dados do Quiz
const quizQuestions = [
    {
        question: "Qual é a principal causa das enchentes urbanas?",
        options: ["Desmatamento", "Chuvas intensas", "Lixo nos bueiros", "Construção em áreas de risco"],
        correctAnswerIndex: 2 // Lixo nos bueiros
    },
    {
        question: "O que significa 'monitoramento de rio em tempo real'?",
        options: ["Verificar o rio uma vez por dia", "Acompanhar o nível do rio constantemente", "Medir a temperatura da água", "Coletar amostras de água semanalmente"],
        correctAnswerIndex: 1 // Acompanhar o nível do rio constantemente
    },
    {
        question: "Qual tecnologia é essencial para coletar dados do nível da água?",
        options: ["GPS", "Sensores IoT", "Câmeras de segurança", "Drones"],
        correctAnswerIndex: 1 // Sensores IoT
    },
    {
        question: "Qual é o principal objetivo de um sistema de alerta de enchentes?",
        options: ["Prever secas", "Salvar vidas e propriedades", "Controlar a poluição", "Gerar energia"],
        correctAnswerIndex: 1 // Salvar vidas e propriedades
    },
    {
        question: "Quem é o público-alvo de uma solução de monitoramento de enchentes?",
        options: ["Turistas", "Governos e comunidades em risco", "Agricultores", "Pescadores"],
        correctAnswerIndex: 1 // Governos e comunidades em risco
    },
    {
        question: "Um benefício de um sistema de monitoramento é a redução de:",
        options: ["Custos de energia", "Tráfego", "Danos materiais e perdas de vida", "Impostos"],
        correctAnswerIndex: 2 // Danos materiais e perdas de vida
    },
    {
        question: "Como a Inteligência Artificial pode ajudar na prevenção de enchentes?",
        options: ["Criando mapas bonitos", "Analisando padrões para prever inundações", "Escrevendo relatórios", "Gerenciando redes sociais"],
        correctAnswerIndex: 1 // Analisando padrões para prever inundações
    },
    {
        question: "Qual ação é recomendada ao receber um alerta de enchente?",
        options: ["Continuar atividades normais", "Ignorar o alerta", "Procurar abrigo em local seguro", "Ir para a beira do rio"],
        correctAnswerIndex: 2 // Procurar abrigo em local seguro
    },
    {
        question: "O que é um plano de contingência para enchentes?",
        options: ["Um mapa turístico", "Um plano de ação para emergências", "Uma lista de compras", "Um jogo de tabuleiro"],
        correctAnswerIndex: 1 // Um plano de ação para emergências
    },
    {
        question: "Qual é a importância da educação sobre enchentes para a comunidade?",
        options: ["Não é importante", "Ajuda a prevenir desastres e a proteger vidas", "Apenas para cientistas", "Somente para crianças"],
        correctAnswerIndex: 1 // Ajuda a prevenir desastres e a proteger vidas
    }
];

const quizForm = document.getElementById('quiz-form'); // Formulário do quiz
const prevQuestionBtn = document.getElementById('prev-question'); // Botão "Pergunta Anterior"
const nextQuestionBtn = document.getElementById('next-question'); // Botão "Próxima Pergunta"
const submitQuizBtn = document.getElementById('submit-quiz'); // Botão "Enviar Respostas"
const quizResultsDiv = document.getElementById('quiz-results'); // Div para exibir os resultados do quiz
const restartQuizBtn = document.getElementById('restart-quiz'); // Botão "Reiniciar Quiz" (necessário adicionar no HTML)

let currentQuestionIndex = 0; // Índice da pergunta atual do quiz
let userAnswers = new Array(quizQuestions.length).fill(null); // Armazena o índice da resposta selecionada pelo usuário para cada pergunta

// Função para renderizar a pergunta atual do quiz
function renderQuizQuestion() {
    quizForm.innerHTML = ''; // Limpa a pergunta anterior
    quizResultsDiv.innerHTML = ''; // Limpa os resultados ao mudar de pergunta

    const q = quizQuestions[currentQuestionIndex]; // Obtém a pergunta atual
    const questionDiv = document.createElement('div'); // Cria um novo div para a pergunta
    questionDiv.classList.add('mb-6', 'p-4', 'bg-gray-50', 'rounded-lg', 'shadow-sm');
    questionDiv.innerHTML = `<p class="font-semibold text-lg mb-3 text-gray-800">${currentQuestionIndex + 1}. ${q.question}</p>`;

    // Itera sobre as opções da pergunta e cria os elementos de rádio
    q.options.forEach((option, oIndex) => {
        const optionDiv = document.createElement('div');
        optionDiv.classList.add('quiz-option');
        optionDiv.innerHTML = `
            <input type="radio" id="q${currentQuestionIndex}-option${oIndex}" name="question${currentQuestionIndex}" value="${oIndex}" class="form-radio text-blue-600 h-5 w-5">
            <label for="q${currentQuestionIndex}-option${oIndex}" class="ml-2 text-gray-700">${option}</label>
        `;
        questionDiv.appendChild(optionDiv);

        // Pré-seleciona a resposta anterior do usuário, se disponível
        if (userAnswers[currentQuestionIndex] === oIndex) {
            optionDiv.querySelector('input').checked = true;
        }
    });
    quizForm.appendChild(questionDiv); // Adiciona a pergunta ao formulário do quiz

    // Atualiza a visibilidade dos botões de navegação e envio
    prevQuestionBtn.style.display = currentQuestionIndex > 0 ? 'block' : 'none';
    nextQuestionBtn.style.display = currentQuestionIndex < quizQuestions.length - 1 ? 'block' : 'none';
    submitQuizBtn.style.display = currentQuestionIndex === quizQuestions.length - 1 ? 'block' : 'none';
    // O botão de reiniciar deve estar oculto enquanto o quiz está em andamento
    if (restartQuizBtn) { // Verifica se o botão existe no HTML
        restartQuizBtn.style.display = 'none';
    }


    // Adiciona um ouvinte de evento 'change' às opções para armazenar a resposta imediatamente
    questionDiv.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', (event) => {
            userAnswers[currentQuestionIndex] = parseInt(event.target.value); // Armazena o valor inteiro da resposta
            // Mostra imediatamente o feedback de correto/incorreto para a pergunta atual
            applyQuizFeedback(currentQuestionIndex, questionDiv); // Passa o elemento da pergunta diretamente
        });
    });

    // Aplica o feedback se uma resposta já foi selecionada para esta pergunta
    if (userAnswers[currentQuestionIndex] !== null) {
        applyQuizFeedback(currentQuestionIndex, questionDiv); // Passa o elemento da pergunta diretamente
    }
}

// Função para aplicar o estilo de correto/incorreto ao quiz
// Agora aceita o elemento DOM real da pergunta como parâmetro
function applyQuizFeedback(qIndex, questionElement) {
    const selectedValue = userAnswers[qIndex]; // Valor selecionado pelo usuário
    const correctAnswerIndex = quizQuestions[qIndex].correctAnswerIndex; // Índice da resposta correta

    // Itera sobre as opções da pergunta para aplicar as classes de estilo
    questionElement.querySelectorAll('.quiz-option').forEach((opt, oIndex) => { // Usa questionElement
        opt.classList.remove('correct', 'incorrect'); // Remove classes anteriores
        opt.querySelector('label').classList.remove('text-green-500', 'text-red-500'); // Remove cores de texto anteriores

        if (selectedValue !== null) { // Se uma resposta foi selecionada
            if (oIndex === selectedValue) { // Se esta é a opção selecionada
                if (selectedValue === correctAnswerIndex) {
                    opt.classList.add('correct'); // Adiciona classe 'correct' se estiver correto
                } else {
                    opt.classList.add('incorrect'); // Adiciona classe 'incorrect' se estiver incorreto
                }
            }
            // Sempre destaca a resposta correta se uma resposta foi selecionada
            if (oIndex === correctAnswerIndex) {
                opt.classList.add('correct');
            }
        }
    });
}

// Navega para a próxima pergunta
nextQuestionBtn.addEventListener('click', () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++; // Incrementa o índice da pergunta
        renderQuizQuestion(); // Renderiza a próxima pergunta
    }
});

// Navega para a pergunta anterior
prevQuestionBtn.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--; // Decrementa o índice da pergunta
        renderQuizQuestion(); // Renderiza a pergunta anterior
    }
});

// Função para enviar e corrigir o quiz
submitQuizBtn.addEventListener('click', () => {
    let score = 0; // Inicializa a pontuação
    quizResultsDiv.innerHTML = ''; // Limpa os resultados anteriores

    // Itera sobre todas as perguntas para calcular a pontuação
    quizQuestions.forEach((q, qIndex) => {
        if (userAnswers[qIndex] === q.correctAnswerIndex) {
            score++; // Incrementa a pontuação se a resposta estiver correta
        }
    });

    // Exibe os resultados finais do quiz
    quizResultsDiv.innerHTML = `<p class="text-2xl">Você acertou <span class="text-blue-600">${score}</span> de ${quizQuestions.length} perguntas!</p>`;
    // Oculta os botões de navegação e exibe o botão de reiniciar
    prevQuestionBtn.style.display = 'none';
    nextQuestionBtn.style.display = 'none';
    submitQuizBtn.style.display = 'none';
    if (restartQuizBtn) { // Verifica se o botão existe no HTML
        restartQuizBtn.style.display = 'block';
    }
});

// Adiciona ouvinte de evento para o botão de reiniciar o quiz
if (restartQuizBtn) { // Verifica se o botão existe no HTML
    restartQuizBtn.addEventListener('click', () => {
        currentQuestionIndex = 0; // Reinicia o índice da pergunta
        userAnswers.fill(null); // Limpa as respostas do usuário
        renderQuizQuestion(); // Renderiza a primeira pergunta novamente
        quizResultsDiv.innerHTML = ''; // Limpa os resultados do quiz
    });
}


// Renderização inicial do quiz ao carregar a página
renderQuizQuestion();


// Validação do Formulário de Contato
const contactForm = document.getElementById('contact-form'); // Formulário de contato
const nameInput = document.getElementById('name'); // Campo de nome
const emailInput = document.getElementById('email'); // Campo de email
const messageInput = document.getElementById('message'); // Campo de mensagem
const nameError = document.getElementById('name-error'); // Mensagem de erro para o nome
const emailError = document.getElementById('email-error'); // Mensagem de erro para o email
const messageError = document.getElementById('message-error'); // Mensagem de erro para a mensagem
const formMessage = document.getElementById('form-message'); // Mensagem de feedback do formulário
// Adiciona um ouvinte de evento 'submit' ao formulário de contato
contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    let isValid = true; // Flag de validação

    // Valida o campo Nome
    if (nameInput.value.trim() === '') {
        nameError.classList.remove('hidden'); // Mostra a mensagem de erro
        nameInput.classList.add('border-red-500'); // Adiciona borda vermelha
        isValid = false; // Define como inválido
    } else {
        nameError.classList.add('hidden'); // Esconde a mensagem de erro
        nameInput.classList.remove('border-red-500'); // Remove a borda vermelha
    }

    // Valida o campo Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expressão regular para validação de email
    if (!emailRegex.test(emailInput.value.trim())) {
        emailError.classList.remove('hidden'); // Mostra a mensagem de erro
        emailInput.classList.add('border-red-500'); // Adiciona borda vermelha
        isValid = false; // Define como inválido
    } else {
        emailError.classList.add('hidden'); // Esconde a mensagem de erro
        emailInput.classList.remove('border-red-500'); // Remove a borda vermelha
    }

    // Valida o campo Mensagem
    if (messageInput.value.trim() === '') {
        messageError.classList.remove('hidden'); // Mostra a mensagem de erro
    } else {
        messageError.classList.add('hidden'); // Esconde a mensagem de erro
    }

    if (isValid) {
        // Se todos os campos forem válidos, simula o envio do formulário
        formMessage.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
        formMessage.classList.remove('text-red-500'); // Remove cor de erro
        formMessage.classList.add('text-green-600'); // Adiciona cor de sucesso
        contactForm.reset(); // Limpa o formulário
    } else {
        formMessage.textContent = 'Por favor, corrija os erros no formulário.';
        formMessage.classList.remove('text-green-600'); // Remove cor de sucesso
        formMessage.classList.add('text-red-500'); // Adiciona cor de erro
    }
});


