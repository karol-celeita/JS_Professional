
//CARACTERISTICAS

    //Un arreglo es una coleccion de datos ordenados en una sola estructura
    // Cada dato es un puesto dentro de la caja
    // La cuenta inicia desde 0
    // Es un objeto de primera clase
    // No tienen una longitud estatica porque depende de los elementos dentro del arreglo

    let calificacion = [2,4,5,7,6,8];


//COMO DECLARAR ARREGLOS

    //Puede almacenar todo tipo de estructura 
    let arreglo = ["hola", 1, {}, function(){}, [1,23]]

    //Para obtener un elemento usamos su posicion
    console.log(arreglo[0]);

    // Tambien podemos sobreescribir elementos
    arreglo[0]="bebe"

    //Añadir nuevos elementos al final
    arreglo.push(3);

    //Añadir nuevos elementos al inicio
    arreglo.unshift(3);

    //Eliminar elementos del final
    arreglo.pop();

    //Eliminar elementos del inicio
    arreglo.shift();