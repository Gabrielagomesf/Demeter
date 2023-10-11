document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('form-login');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Capturando valores dos campos
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Aqui você pode adicionar uma chamada AJAX para autenticar o usuário
        // com um servidor backend, mas para simplificar, vamos fazer uma
        // verificação simples:

        if (username === 'admin' && password === 'password123') {
            alert('Login bem-sucedido!');
            // Você pode redirecionar o usuário para outra página aqui, por exemplo:
            // window.location.href = '/painel-de-controle';
        } else {
            alert('Usuário ou senha inválidos.');
        }
    });
});