
//Son metos que podemos usar deliberadamente para usar el contexto

function Estudiante(){
    this.nombre = "Karol G";
    this.saludar = function(){console.log("Hola soy ", this)};
}

let e = new Estudiante();

e.saludar();

/* Podemos dividir estos metodos en dos grupos:
   - Forma inmediata: call, apply
   - forma lazy: bind
*/ 

// CALL
    e.saludar.call({}, [1,2]) //El contexto se toma del objeto vacio que enviamos
    // En este caso enviamos un objeto vacio, y luego los argumentos que recibe la funcion saludar

// BIND 
    // Permite recibir el contexto de this sin que la funcion se ejecute
    let nuevaFuncion = e.saludar.bind({});
    nuevaFuncion();
    
