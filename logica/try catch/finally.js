try {
    console.log('Abri o Arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('fechei o arquivo');
    } catch(e){
        console.log('tratando o erro');        
    } finally {
        console.log('fechei o arquivo'); //sempre e executado
    }