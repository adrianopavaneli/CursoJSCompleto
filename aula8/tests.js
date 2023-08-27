/*
Luiz Otávio Miranda tem 30 anos, pesa 84kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 
*/
const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = '30';
const peso = '84';
const altura = '1.80';
let imc; //peso / (altura * altura);
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2023 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa  ${peso} Kg`);
console.log(`tem ${altura} m de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);