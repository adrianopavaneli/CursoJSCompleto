// declaracao de funcoes(hoisting)
falaOi();
function falaOi(){
    console.log('Oi');
}
falaOi();

// Objetos de Primeira Classe
const souUmDado = function(){
    console.log('Sou um dado');    
};
function executaFuncao(funcao){
    console.log('Vou executar uma funcao');
    funcao();
}
executaFuncao(souUmDado);

// Arrow function

const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}
funcaoArrow();

//dentro de um objeto
const obj = {
    falar: function(){
        console.log('Estou falando..');
    }
};
obj.falar();