function soma(x,y) {
    if (
        typeof x !== 'number' || 
        typeof y !== 'number'
        ) {
            // throw('x e y precisam ser numeros');
            throw new ReferenceError('x e y precisam ser numeros');
         }
    return x + y;
}

try {
    console.log(soma(1,2));
    console.log(soma(1,'ada'));
   
} catch(e){
    console.log('x e y precisam ser numeros');
    // // console.log(e); //nao envia para o usuario no front end
}



// try {
//     console.log(naoExisto);
// } catch(e){
//     console.log('naoExisto não existe');
//     console.log(e);
// }