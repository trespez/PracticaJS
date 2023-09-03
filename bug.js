// nuestro cliente esta intentando calcular el promedio de una lista de numeros pero nos dice que no funciona. nos da este codigo que es el que tiene en produccion. soluciona el error

const calcularPromedio = (numeros) => {
    let sumaTotal = 0
    for (let i = 0 ; i < numeros.length; i++) {
        sumaTotal += numeros[i];
    }

    const promedio = sumaTotal / numeros.length;
    return promedio;
};

const listaNumeros = [1,2,3,4,5];
const promedioNumeros = calcularPromedio(listaNumeros);//3
console.log(promedioNumeros)