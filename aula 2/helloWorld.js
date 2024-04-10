const readline  = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('qual seu nome? ', (nome) => {
    console.log('olá, ${nome}! bem vindo ao node.js.');
    rl.close();
});