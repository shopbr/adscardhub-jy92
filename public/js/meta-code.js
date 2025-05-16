// Função para gerar Meta Code
function generateMetaCode() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const letter1 = letters[Math.floor(Math.random() * letters.length)];
    const letter2 = letters[Math.floor(Math.random() * letters.length)];
    const number1 = numbers[Math.floor(Math.random() * numbers.length)];
    const number2 = numbers[Math.floor(Math.random() * numbers.length)];
    return `METAPAY${letter1}${number1}${letter2}${number2} fb.me/cc IRL`;
}

// Função para verificar Meta Code
function verifyMetaCode(metaCode) {
    return fetch('/api/verify-meta-code', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ metaCode })
    })
    .then(response => response.json())
    .then(data => {
        return data.success;
    })
    .catch(error => {
        console.error('Erro:', error);
        return false;
    });
}

// Função para atualizar a lista de Meta Codes
function updateMetaCodeList() {
    const metaCodeList = document.getElementById('metaCodeList');
    if (!metaCodeList) return;

    // Aqui você pode implementar a lógica para mostrar os Meta Codes gerados
    // Por exemplo, você pode fazer uma chamada à API para obter a lista de Meta Codes
    // e então atualizar o DOM com os resultados
}

// Exportar funções
window.metaCode = {
    generate: generateMetaCode,
    verify: verifyMetaCode,
    updateList: updateMetaCodeList
}; 