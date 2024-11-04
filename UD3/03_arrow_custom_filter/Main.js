// Meto pa filtrar
const assert = require('assert').strict;

function filtrar(array, condicion) {
    return array.filter(condicion);
}

// Digo que es par
function esPar(valor) {
    return valor % 2 === 0;
}

function mayorQue15(valor) {
    return valor > 15;
}

function menorQue10(valor) {
    return valor < 10;
}

ejecutarPruebas();

function ejecutarPruebas() {
    let valores = [1, 2, 3, 5, 7, 13, 17, 23, 29];

    // sólo pares
    assert.deepStrictEqual(filtrar(valores, esPar), [2]);

    // mayores que 15
    assert.deepStrictEqual(filtrar(valores, mayorQue15), [17, 23, 29]);

    // menores de 10
    assert.deepStrictEqual(filtrar(valores, menorQue10), [1, 2, 3, 5, 7]);

    console.log("Furula guay.");
}
