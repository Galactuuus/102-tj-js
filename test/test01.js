function clasificaElementos(index) {
    let cero = 0;
    let positivos = 0;
    let negativos = 0;
    for(let i = 0; i<index.length; i++)
    {
        if(index[i] > 0) positivos++;
        if(index[i] < 0) negativos++;
        if(index[i] === 0) cero++;
    }
    
    let array = [ (positivos/index.length).toFixed(4), (negativos/index.length).toFixed(4), (cero/index.length).toFixed(4)];
    return array;
}
module.exports = clasificaElementos;
