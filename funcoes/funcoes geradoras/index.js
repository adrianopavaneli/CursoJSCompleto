function* geradora1(){
    yield '1';
    yield '2';
    yield '3';
}
const g1 = geradora1();
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next());
console.log(g1.next());

const g2 = geradora1();
for (let valor of g2){
    console.log(valor);
}


//gerador infinito

function* geradora2(){
    let i = 0;

    while(true) {
        yield i;
        i++;
    }
}

const g3 = geradora2();
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
