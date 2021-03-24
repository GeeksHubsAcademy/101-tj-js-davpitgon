function clasificaElementos(index) {
    
    let positive = 0;
    let negative = 0;
    let zero = 0;

    for (let i = 0; i <= index.length; i ++) {

        if (index[i] > 0)
            positive ++;

        if (index[i] < 0)
            negative ++;

        if (index[i] == 0)
            zero ++;

    }

    // toFixed es para indicar el número de decimales
    let positive_result = (positive / index.length).toFixed(4);
    let negative_result = (negative / index.length).toFixed(4);
    let zero_result = (zero / index.length).toFixed(4);

    return [positive_result, negative_result, zero_result];
};

module.exports = clasificaElementos;