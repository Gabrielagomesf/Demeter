// Validação do formulário de registro
const registroForm = document.querySelector('#registro form');

registroForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio do formulário

    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const senha = document.querySelector('#senha').value;

    // Realize a validação dos campos conforme necessário
    if (nome.trim() === '' || email.trim() === '' || senha.trim() === '') {
        alert('Todos os campos devem ser preenchidos.');
    } else if (!isValidEmail(email)) {
        alert('Por favor, insira um endereço de e-mail válido.');
    } else {
        // Se a validação for bem-sucedida, você pode enviar os dados para o servidor ou executar outras ações necessárias
        alert('Cadastro bem-sucedido!'); // Exemplo de mensagem de sucesso
        registroForm.reset(); // Limpa o formulário após o envio bem-sucedido
    }
});

// Função para validar um endereço de e-mail simples
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}