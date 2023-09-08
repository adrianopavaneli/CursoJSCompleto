const prontuacaoUsuario = 1000;

const nivelUsuario = prontuacaoUsuario >=1000 ? 'Usuário Vip' : 'Usuário Normal';




const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);

//if(prontuacaoUsuario >= 1000) {
//    console.log('Usuário Vip');
//}else {
//    console.log('Usuário Normal');
//}