
let arreglo = ["ruby", "python", "java"];

// indexOf: Busca un valor y retorna la posicion donde se encontro, usa el operador ===
    arreglo.indexOf("ruby"); // Imprime 0, si no se encuentra retorna -1

// includes : Busca un elemento en todo el elemento sin importar la posicion, devuelve true o false
    arreglo.includes("ruby"); // Imprime true

//find : Pasa una funcion de prueba para comparar
    let respuesta = arreglo.find(function(elemento, posicion, arreglo){
        return elemento === "ruby";
    });

    console.log(respuesta)

//findIndex: No busca el elemento sino la posicion 
    let respuestas = arreglo.findIndex(function(elemento, posicion, arreglo){
        return elemento === "ruby";
    });

    console.log(respuestas)


//some : Busca en todo el arreglo sin importar posicion 
    let somes = arreglo.some(function(elemento, posicion, arreglo){
        return elemento === "ruby";
    });

    console.log(somes)