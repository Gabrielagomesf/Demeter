// Array para armazenar as despesas
const despesas = [];

// Referências aos elementos HTML
const formDespesa = document.getElementById('form-despesa');
const listaDespesas = document.getElementById('lista-despesas');
const dataDespesa = document.getElementById('data-despesa');
const valorDespesa = document.getElementById('valor-despesa');
const descricaoDespesa = document.getElementById('descricao-despesa');
const pagoDespesa = document.getElementById('pago-despesa');
const btnNaoPago = document.getElementById('btn-nao-pago');
const btnPago = document.getElementById('btn-pago');
const anexoDespesa = document.getElementById('anexo-despesa');

// Event listener para o formulário de cadastro de despesa
formDespesa.addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio do formulário

    // Obtém os valores do formulário
    const data = dataDespesa.value;
    const valor = parseFloat(valorDespesa.value);
    const descricao = descricaoDespesa.value;
    const pago = btnPago.classList.contains('active');

    // Adiciona o anexo (se presente)
    let anexo = null;
    if (anexoDespesa.files.length > 0) {
        anexo = anexoDespesa.files[0];
    }

    // Cria um objeto de despesa
    const novaDespesa = {
        data: data,
        valor: valor,
        descricao: descricao,
        pago: pago,
        anexo: anexo,
    };

    // Adiciona a despesa ao array
    despesas.push(novaDespesa);

    // Limpa o formulário
    formDespesa.reset();

    // Atualiza a lista de despesas
    atualizarListaDespesas();
});

// Event listener para o botão "Não Pago"
btnNaoPago.addEventListener('click', function () {
    btnNaoPago.classList.add('active');
    btnPago.classList.remove('active');
});

// Event listener para o botão "Pago"
btnPago.addEventListener('click', function () {
    btnPago.classList.add('active');
    btnNaoPago.classList.remove('active');
});

// Função para atualizar a lista de despesas
function atualizarListaDespesas() {
    listaDespesas.innerHTML = ''; // Limpa a lista antes de atualizar

    despesas.forEach((despesa) => {
        const item = document.createElement('div');
        item.classList.add('item-despesa');

        const data = document.createElement('p');
        data.textContent = 'Data: ' + despesa.data;

        const valor = document.createElement('p');
        valor.textContent = 'Valor: R$ ' + despesa.valor.toFixed(2);

        const descricao = document.createElement('p');
        descricao.textContent = 'Descrição: ' + despesa.descricao;

        const pago = document.createElement('p');
        pago.textContent = 'Pago: ' + (despesa.pago ? 'Sim' : 'Não');

        item.appendChild(data);
        item.appendChild(valor);
        item.appendChild(descricao);
        item.appendChild(pago);

        if (despesa.anexo) {
            const linkAnexo = document.createElement('a');
            linkAnexo.href = URL.createObjectURL(despesa.anexo);
            linkAnexo.textContent = 'Anexo do Documento';
            item.appendChild(linkAnexo);
        }

        listaDespesas.appendChild(item);
    });
}
