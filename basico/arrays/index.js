const alunos= ['Luiz', 'Maria', 'João'];
alunos[0] = 'Eduardo'; //editar
alunos[3] = 'Luiza'; //adiciona
alunos[alunos.length] = 'Leticia'; //adiciona ao final
alunos.push('Renato'); //adiciona ao final via funcao
alunos.push('Rosane');
alunos.unshift('Rafael'); //adiciona ao inicio via funcao
alunos.pop(); //remove do final
alunos.shift(); //remove do comeco
delete alunos[3]; //remove e deixa indice vazio


console.log(alunos);
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos.slice(0,3)); //fatia do 0 ao 2
console.log(alunos.slice(0,-2)); //fatia do 0 ao penultimo