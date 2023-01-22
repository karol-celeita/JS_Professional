
/*
Para crear promesas usamos el constructor promise que a su vez lleva una funcion con dos 
argumentos, uno llamado resolve  para recibir y marcar como fullfille
 y otro llamado reject para rechazar la promesa y marcar como reject

*/

//Ejemplo 1
let promesa = new Promise(function(resolve,reject){
    resolve(10);
    reject("Algo salio mal")
});


//Ejemplo 2

let request = require('request');

//Creamos la promesa
    function leerPagina(url){
        return new Promise(function(resolve, reject){
            request(url,function(error,response){
                if(error) return reject(error);

                resolve(response)
            })
        })
    }

//Usamos la promesa
    let promesas = leerPagina("https://www.google.com");
    promesa.then(r => console.log("Finalice exitosamente"))
            .catch(r => console.log("Todo salio mal"));

