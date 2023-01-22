
//El contexto se refiere al uso de la palabra reservada this

 //De forma global this es igual al objeto window

// El contexto empieza a cambiar cuando esta dentro de un objeto

let objeto = {
    demo:function(){
        console.log(this); // Salida  Objeto
    }
}

//Depende de donde se ejecuta el objeto , no donde se declara
objeto.demo();  // Aqui se asigna el this

// El contexto es el objeto que ejecuta la funcion
// Todo depende de quien esta llamando la funcion