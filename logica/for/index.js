const frutas = ['Pera', 'Melancia', 'Jabuticaba', 'Uva'];

for (let i = 0 ; i < frutas.length; i++){
    console.log(frutas[i]);
}
console.log('--------------------');
for (let j in frutas){
    console.log(frutas[j]);
}

console.log('--------------------');

for (let valor of frutas){
    console.log(valor);
}

console.log('--------------------');

frutas.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
});