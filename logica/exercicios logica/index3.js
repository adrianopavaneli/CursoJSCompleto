// Escreva uma funcao que recebe um numero e 
// retorne o seguinte 
// Numero divisivel por 3 = Fizz
// Numero divisivel por 5 = Buzz
// numero nao divisivel por 3 e 5 = returna FizzBuZZ
// checar se o numero é realmente um numero - retornar o proprio numero
// use a funcao de numeros de 0 a 100

function fizzBuzz(x){
    if (typeof x !== 'number') return x;
    if(x % 3 === 0 && x ** 5 === 0) return 'FizzBuzz';
    if(x % 3 === 0) return 'Fizz';
    if(x % 5 === 0) return 'Buzz';
    return x;          
}

for(let i = 0; i <= 100; i++){
    console.log(fizzBuzz(i))
}

