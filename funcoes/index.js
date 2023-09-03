function saudacao(nome) {    
    return `Bom dia ${nome}!`;
}

const variavel = saudacao('Adriano');
console.log(variavel);



function soma(x, y){
    const resultado = x + y;
    return resultado;
}
console.log(soma(2,2));

const raiz =function (n) {
    return n ** 0.5;
};

console.log(raiz(81));
// nova forma aero function
const raiz2 = (n) => {
    return n ** 0.5;
};

console.log(raiz2(25));
// somente com uma linha
const raiz3 = n =>  n ** 0.5;

console.log(raiz3(9));


