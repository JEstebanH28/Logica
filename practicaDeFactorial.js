// Definición de una función para calcular el factorial de un número 
function calcularFactorial(numero) {
    let factorial = 1;
    // Bucle para multiplicar el factorial por cada número entero desde 2 hasta el número dado
    for (let i = 2; i <= numero; i++) {
        factorial *= i;
    }
    // Retorna el resultado del factorial
    return factorial;
}

// Definición de una función para obtener un número válido del usuario
function obtenerNumero() {
    // Solicita al usuario ingresar un número mediante un cuadro de diálogo
    let numero = prompt("Por favor, ingresa un número:");
    // Bucle para asegurarse de que el valor ingresado sea un número válido osea un numero
    while (isNaN(numero) || numero === "" || numero === null) {
        // Si el valor no es un número válido, solicita al usuario que ingrese nuevamente
        numero = prompt("El valor ingresado no es un valor válido. Por favor, ingresa un número:");
    }
    // Retorna el número ingresado como un valor de tipo número (en formato de punto flotante)
    return parseFloat(numero);
}

// Función principal del programa
function main() {
    // Llama a la función obtenerNumero para obtener un número válido del usuario
    let numero = obtenerNumero();
    // Calcula el factorial del número obtenido utilizando la función calcularFactorial
    let factorial = calcularFactorial(numero);
    // Imprime el resultado del factorial por consola
    console.log("El factorial de " + numero + " es: " + factorial);
}

// Llama a la función principal para iniciar la ejecución del programa
main();
