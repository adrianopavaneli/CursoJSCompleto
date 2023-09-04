const pessoa = {
    nome: 'Roberto',
    sobrenome: 'Miranda', 
    idade: 25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi`);
    },
    incrementaIdade() {
        this.idade++;
    }
};
pessoa.fala();
console.log(pessoa.nome);

//criando pessoa
function criaPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}
const pessoa1 = criaPessoa('Luiz', 'Otavio', 25);
console.log(pessoa1.nome);



