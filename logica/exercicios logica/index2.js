// Escreva uma funcao chamada Paisagem que recebe dois argumentos
// largura e altura de uma Imagem(number)
// retorne true se a imagem estiver no modo paisagem.

function ePaisagem(largura, altura){
    return largura > altura;
}

const resultado = ePaisagem(800, 600);
console.log(resultado);