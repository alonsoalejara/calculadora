let resultado;


// Operaciones

function sumar(a, b) {
    let resultado = a + b;
    return resultado;
}

function restar(a, b) {
    let resultado = a - b;
    return resultado;
}

function multiplicar(a, b) {
    let resultado = a * b;
    return resultado;
}

function dividir(a, b) {
    let resultado = a / b;
    return resultado;
}

function limpiarTodo() {
    resultado = 0;
}

// Mostrar Resultados

function mostrarResultadoSuma() {
    let elementoValor1 = document.getElementById('valor1');
    let elementoValor2 = document.getElementById('valor2');
    let elementoTexto = document.getElementById('textoResultado');

    // Convertir los valores a numeros
    let valor1 = parseFloat(elementoValor1.value);
    let valor2 = parseFloat(elementoValor2.value);

    let resultadoSuma = sumar(valor1, valor2);

    elementoTexto.value = resultadoSuma;
}

function mostrarResultadoResta() {
    let elementoValor1 = document.getElementById('valor1');
    let elementoValor2 = document.getElementById('valor2');
    let elementoTexto = document.getElementById('textoResultado');

    // Convertir los valores a numeros
    let valor1 = parseFloat(elementoValor1.value);
    let valor2 = parseFloat(elementoValor2.value);

    let resultadoResta = restar(valor1, valor2);

    elementoTexto.value = resultadoResta;
}

function mostrarResultadoMultiplicacion() {
    let elementoValor1 = document.getElementById('valor1');
    let elementoValor2 = document.getElementById('valor2');
    let elementoTexto = document.getElementById('textoResultado');

    // Convertir los valores a numeros
    let valor1 = parseFloat(elementoValor1.value);
    let valor2 = parseFloat(elementoValor2.value);

    let resultadoMultiplicacion = multiplicar(valor1, valor2);

    elementoTexto.value = resultadoMultiplicacion;
}

function mostrarResultadoDivision() {
    let elementoValor1 = document.getElementById('valor1');
    let elementoValor2 = document.getElementById('valor2');
    let elementoTexto = document.getElementById('textoResultado');

    // Convertir los valores a numeros
    let valor1 = parseFloat(elementoValor1.value);
    let valor2 = parseFloat(elementoValor2.value);

    let resultadoDivision = dividir(valor1, valor2);

    elementoTexto.value = resultadoDivision;
}

function limpiar() {
    let elementoValor1 = document.getElementById('valor1');
    let elementoValor2 = document.getElementById('valor2');
    let elementoTexto = document.getElementById('textoResultado');

    elementoValor1.value = '';
    elementoValor2.value = '';
    elementoTexto.value = '';
}