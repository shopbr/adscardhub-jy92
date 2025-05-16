require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

// Configurações básicas
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Log de requisições para debug
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// Middleware para arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota de teste para verificar se o servidor está funcionando
app.get('/test', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running' });
});

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Tratamento de erros 404
app.use((req, res) => {
    console.log(`404 - Rota não encontrada: ${req.url}`);
    res.status(404).sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Tratamento de erros globais
app.use((err, req, res, next) => {
    console.error('Erro:', err.stack);
    res.status(500).json({ error: 'Algo deu errado!' });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Ambiente: ${process.env.NODE_ENV || 'development'}`);
    console.log(`Diretório atual: ${__dirname}`);
}); 