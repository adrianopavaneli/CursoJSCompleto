let num1 =1500.4566464646;
let num2 = 2.5;

console.log(num1.toString() + num2);
console.log(typeof num1);
console.log(num1.toString(2));
console.log(num1.toFixed(2));
console.log(Number.isInteger(num1));
let temp = num1 * 'Ola';
console.log(temp);
console.log(Number.isNaN(temp));
let num3 = 0.7;
let num4 = 0.1;


//Valores abaixo de 0
num3 += num4; //0.8
num3 += num4; //0.9
num3 += num4; //1.0
num3 = parseFloat(num3.toFixed(2));

//num3 = ((num3 * 100) + (num4 *100)) /100; //0.8
//num3 = ((num3 * 100) + (num4 *100)) /100; //0.9
//num3 = ((num3 * 100) + (num4 *100)) /100; //1.0

 

console.log(num3);
console.log(Number.isInteger(num3));
