
//Recorremos arreglos para poder manipularlos, eso se hace mediante ciclos

let arreglo = [1,2,3,4];

/* Partes de un for para recorrer arreglos:
   1. Inicializacion generalemente desde 0 para iniciar desde la primera posicion del arreglo ej:  let i = 0
   2. Damos el final del arreglo con i < arreglo.length
   3. Incremento o contador que hara que avance de posicicones Ej i++, i--
*/

for( let i = 0; i < arreglo.length ; i++){
    console.log(arreglo[i])
}

/* Operaciones funcionales con arreglos

    Estas operaciones se introducen en la revisión de 2009 del lenguaje, conocida como ES5
    Lo que tienen en común las operaciones forEach, map, reduce, filter y find, es que son métodos que puedes usar en cualquiera arreglo, 
        y que operan a través de funciones que enviamos como argumento para estos métodos
    Es importante aclarar que un bloque de código no es mejor cuando es más pequeño que otro
*/

    // Ambas operaciones realizan lo mismo utilizando diferentes enfoques:

        for(let i = 0;i < arreglo.length; i++){
            let element = arreglo[i];
            console.log(element);
        }
        
        arreglo.forEach(function(element){
            console.log(element)
            });


//FOREACH

    let lenguajes = [1,2,3,4];

    lenguajes.forEach(function(elemento, indice, arreglo){
        console.log(elemento, indice, arreglo)
       });

    // foreach puede recibir el elemento , el indice y el arreglo en general como argumentos



// MAP : Retorna un nuevo arreglo modificado. 
    // EJ: Sacar el cuadrado de los numeros:

    let numeros = [1,2,3,4];
    let cuadrados = [];

    // Forma tradicional

    for( let i = 0 ; i < numeros.length; i ++){
        cuadrados[i] = numeros[i]*numeros[i];
    }
    console.log(cuadrados);

    // Forma con map
    numeros.map(function(numero){
        return numero*numero;
    })

    // map  puede recibir el elemento , el indice y el arreglo en general como argumentos



// FILTER

    // Si el return es true se conservan los elementos, si no se descarta
    // Se deben guardar en un nuevo arreglo

    // EJ: Retornar unicamente los numeros pares

    let datos = [8,5,6,3,2];

    let nuevoArreglo = datos.filter(function(dato){
        return dato % 2 === 0;
    })

    console.log(datos)


// REDUCE : Reduce un arreglo y lo deja en un solo valor

    //El primer agumento que recibe es un acumulador, este se pasa entre las ejecuciones y toma la ultima ejecucion
    //El segundo es el elemento que se esta iterando

    // EJ: Sumar todos los elelemntos del arreglo

    let datas = [5,6,4,6];

    let suma = datas.reduce(function(acc, elemento){
        console.log(acc);
        return acc + elemento;
    }, 0)  // Debemos inicializar el acumulador en 0