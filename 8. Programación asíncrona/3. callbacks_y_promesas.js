
/* Un callback es una funcion que se pasa como argumento a una funcion asincrona 
con la espectativa de que la funcion sea ejecutada una vez que la operacion termine
Es decir se ejecuta un callback cuando la cola de actividades acabo sus tareas

    Ej de tareas asincronas: Carga de archivos, peticiones a la red o a BD

    Para el ejercicio debemos instalar:
    PS C:\Users\buho\Documents\JS Professional> npm install request

    */

    let request = require('request');// importar paquete de node

    request('https://www.google.com', function(){
        console.log("Termine la peticion")
    })

    console.log("Yo sucedo despues");
    // Aunque esta despues de la otra, la imprime primero pues el lenguaje puede ejecutar este 
    //mientras realiza la que es mas tardada



/*Las promesas son unas sintaxis alternativa al callback, es mas expresiva, consisa y facil de
entender.
- El callback hell es cuando hay unas funciones dentro de otras y se vuelve imposible de leer

Para eso instalamos:
PS C:\Users\buho\Documents\JS Professional> npm install request-promises

*/

let requests = require('request-promises');// importar paquete de node
let promesas = requests('https://www.google.com')

promesas.then(function(){console.log("Termine la peticion")});
promesas.catch(function(err){console.log('err')})

console.log("Yo sucedo despues");

//En este caso la operacion asincrona retorna un objeto /
// Una promesa es un obj que puede que devuleva un valor en el futuro
/*Las promesas pasan por distintos estados:
    -fullfile: Completada, la promesa se completo con exito
    -rejected: Rechazada, no se completo con exito
    -pending:  Pendiente, cuando la operacion no ha terminado ni cumplido
    -settled:  Finalizada. cuando la promesa termino ya sea con exito o con error
*/

/* Hay 3 metodos para los distintos estados de las promesas:
    then: Cuando esta fullfile o settled con exito
    catch: Cuando fue rejected o settled con error
    finally: Ejecuta codigo sin importar si se ejecuto con exito o fallo
*/

promesas.then(function(){console.log("Termine la peticion")})
        .catch(function(err){console.log('err')})
        .finally(function(err){console.log('Finalicé')});