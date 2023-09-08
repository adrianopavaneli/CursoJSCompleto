//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
const tresHora = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHora - umDia);//marco zero 01/01/1970
console.log(data.toString());
const data2 = new Date(2023,3,15,5,55,55,500); //a,m,d,h,M,s,ms
console.log(data2.toString()); 
const data3 = new Date('2023-04-15 05:55:55'); 
console.log('Dia', data3.getDate());
console.log('Mes', data3.getMonth() + 1);
console.log('Ano', data3.getFullYear());
console.log('Hora', data3.getHours());
console.log('Min', data3.getMinutes());
console.log('Seg', data3.getSeconds());
console.log('Mls', data3.getMilliseconds());
console.log('Dia semana', data3.getDay());
console.log(data3.toString()); 
console.log(Date.now()); // milesimos atual

function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data4 = new Date();
const dataBrasil = formataData(data4);
console.log(dataBrasil);


