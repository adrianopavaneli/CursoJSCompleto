const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
    if (numero === 2){
        console.log(`Pulei o numero ${numero}`);
        continue;// pula para a proxima interacao do laco
    }

    console.log(numero);
    if (numero === 7){
        console.log(`${numero} encontrado, saindo...`);

        break; // termina o laço
    }
    
}