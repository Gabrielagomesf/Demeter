// Array para armazenar os produtos
const produtos = [];

// Referências aos elementos HTML
const listaProdutos = document.getElementById('lista-produtos');
const formCadastro = document.getElementById('form-cadastro');
const dashboardContent = document.getElementById('dashboard-content');
const botaoGerarPlanilha = document.getElementById('botao-gerar-planilha');

// Event listener para o formulário de cadastro
formCadastro.addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio do formulário

    // Obtém os valores do formulário
    const nomeProduto = document.getElementById('nome-produto').value;
    const quantidade = document.getElementById('quantidade').value;
    const valorUnitario = document.getElementById('valor-unitario').value;

    // Cria um objeto de produto
    const novoProduto = {
        id: produtos.length + 1, // Gera um ID simples
        nome: nomeProduto,
        quantidade: parseInt(quantidade),
        valorUnitario: parseFloat(valorUnitario),
    };

    // Adiciona o produto ao array
    produtos.push(novoProduto);

    // Limpa o formulário
    formCadastro.reset();

    // Atualiza a lista de produtos
    atualizarListaProdutos();

    // Gera automaticamente o dashboard após o cadastro
    gerarDashboard();
});

// Event listener para o botão "Gerar Planilha"
botaoGerarPlanilha.addEventListener('click', function () {
    gerarPlanilha();
});

// Função para atualizar a lista de produtos na tabela
function atualizarListaProdutos() {
    listaProdutos.innerHTML = ''; // Limpa a lista antes de atualizar

    produtos.forEach((produto) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${produto.id}</td>
            <td>${produto.nome}</td>
            <td>${produto.quantidade}</td>
            <td>R$ ${produto.valorUnitario.toFixed(2)}</td>
        `;
        listaProdutos.appendChild(row);
    });
}

// Função para gerar o dashboard
function gerarDashboard() {
    let totalProdutos = produtos.length;
    let totalQuantidade = 0;
    let totalValor = 0;

    produtos.forEach((produto) => {
        totalQuantidade += produto.quantidade;
        totalValor += produto.quantidade * produto.valorUnitario;
    });

    // Cria o conteúdo do dashboard automaticamente
    dashboardContent.innerHTML = `
        <p>Total de Produtos: ${totalProdutos}</p>
        <p>Total de Quantidade: ${totalQuantidade}</p>
        <p>Total de Valor: R$ ${totalValor.toFixed(2)}</p>
    `;
}

// Função para gerar a planilha em formato CSV
function gerarPlanilha() {
    if (produtos.length === 0) {
        alert('Não há produtos para exportar.');
        return;
    }

    // Cria o conteúdo da planilha em formato CSV
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "ID,Produto,Quantidade,Valor Unitário (R$)\n";

    produtos.forEach((produto) => {
        csvContent += `${produto.id},"${produto.nome}",${produto.quantidade},${produto.valorUnitario.toFixed(2)}\n`;
    });

    // Cria um link oculto para fazer o download da planilha
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "estoque.csv");

    // Aciona o clique no link para fazer o download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Inicializa a lista de produtos (pode ser substituída por dados carregados de um servidor)
atualizarListaProdutos();
