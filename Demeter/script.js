document.addEventListener('DOMContentLoaded', function() {

    // Função para abrir a modal do chat
    function openChat() {
        const chatModal = document.getElementById("chat-modal");
        chatModal.style.display = "block";
    }

    // Função para fechar a modal do chat
    function closeChat() {
        const chatModal = document.getElementById("chat-modal");
        chatModal.style.display = "none";
    }

    // Adicione event listeners para os botões
    const openChatButton = document.getElementById("open-chat");
    const closeChatButton = document.getElementById("close-chat");
    const chatDiv = document.getElementById('chat');

    openChatButton.addEventListener("click", openChat);
    closeChatButton.addEventListener("click", closeChat);

    // Adicione event listeners para perguntas predefinidas
    const questions = document.querySelectorAll('.predefined-question');

    questions.forEach(question => {
        question.addEventListener('click', function() {
            // Mostrar a pergunta selecionada como se fosse uma mensagem do usuário
            const selectedQuestion = question.textContent;
            const userMessageDiv = document.createElement('div');
            userMessageDiv.classList.add('user-message'); // Adicionando classe para estilização
            userMessageDiv.textContent = selectedQuestion;
            chatDiv.appendChild(userMessageDiv);

            // Mostrar a resposta correspondente
            const autoReply = getAutoReply(selectedQuestion);
            const replyDiv = document.createElement('div');
            replyDiv.classList.add('chat-message', 'atendente'); // Adicionando classes para estilização
            replyDiv.textContent = autoReply;
            chatDiv.appendChild(replyDiv);

            // Exibir perguntas relacionadas
            exibirPerguntasRelacionadas(selectedQuestion);
        });
    });

    // Função para determinar a resposta automática
    function getAutoReply(message) {
        const msg = message.toLowerCase();
        if (msg.includes('desejo saber mais do estoque')) {
            return "Resposta 1";
        } else if (msg.includes('desejo saber mais do controle financeiro')) {
            return " Resposta 2";
        } else if (msg.includes('desejo saber mais sobre os preços')) {
            return "Resposta 3";
        } else {
            return "Desculpe, não tenho essa informação no momento. Por favor, entre em contato com nosso suporte por email ou telefone.";
        }
    }

    // Função para exibir perguntas relacionadas
    function exibirPerguntasRelacionadas(pergunta) {
        // Limpar qualquer conteúdo anterior das perguntas relacionadas
        const relatedQuestionsDiv = document.getElementById('related-questions');
        relatedQuestionsDiv.innerHTML = '';

        // Aqui, você pode implementar a lógica para exibir as perguntas relacionadas
        // com base na pergunta selecionada.
        // Por exemplo, você pode criar um objeto JavaScript que mapeie perguntas para suas respectivas perguntas relacionadas.

        // Exemplo de como adicionar perguntas relacionadas ao elemento 'relatedQuestionsDiv':
        const perguntasRelacionadas = {
            "Desejo saber mais do estoque": [
                "Quais produtos agrícolas estão disponíveis em grande quantidade?",
                "Vocês têm produtos sazonais?",
            ],
            "Desejo saber mais do controle financeiro": [
                "Como posso pagar pelos produtos?",
                "Vocês oferecem opções de financiamento?",
            ],
            "Desejo saber mais sobre os preços": [
                "Quais são os preços dos produtos mais populares?",
                "Vocês oferecem descontos para pedidos em grande quantidade?",
            ],
            // Adicione mais perguntas e respostas relacionadas conforme necessário
        };

        if (pergunta in perguntasRelacionadas) {
            const perguntasRelacionadasArray = perguntasRelacionadas[pergunta];
            perguntasRelacionadasArray.forEach(function(perguntaRelacionada) {
                const button = document.createElement('button');
                button.textContent = perguntaRelacionada;
                button.classList.add('related-question');
                button.addEventListener('click', function() {
                    // Lógica para lidar com a seleção da pergunta relacionada
                    // Você pode implementar isso conforme necessário.
                });
                relatedQuestionsDiv.appendChild(button);
            });
        } else {
            // Se a pergunta não tiver perguntas relacionadas definidas, você pode mostrar uma mensagem padrão.
            const noRelatedQuestionsMessage = document.createElement('p');
            noRelatedQuestionsMessage.textContent = "Não há perguntas relacionadas disponíveis para esta pergunta.";
            relatedQuestionsDiv.appendChild(noRelatedQuestionsMessage);
        }
    }
});