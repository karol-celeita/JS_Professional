
// Sintaxis alternativa al declarar funciones

    let demo = () => console.log("Hola") // Si la funcion es de una sola linea se omiten las llaves

    // Se coloca una flecha que reemplaza la palabra function
    // El nombre de la funcion se toma como el nombre de la variable

    let demo2 = () =>{
        console.log("Hola")
    }

// Contexto de las arrow functions

/* Tienen una sintaxis mas corta que usar function
   Heredan el valor de this del contexto en el que fueron creadas, y no se reasigna
*/

//Ejemplo con function y con arrow

let estudiante = {
    nombre: "Karol",
    saludar: ()=>{console.log("Hola soy ", this.nombre)},
    saludarAlt: function(){console.log("Hola soy ", this.nombre)}
}

estudiante.saludar();    // Salida "Hola soy undefined"
estudiante.saludarAlt(); // Salida "Hola soy Karol"

// Son diferentes porque al ejecutar saludarAlt se adopta el valor del objeto que ejecuta la funcion
// saludar lo toma del contexto al momento de ser definida, en este caso es el objeto window


//Con una clase constructora definimos el arrow functions y funciona

function Estudiante(){
    this.nombre = "Karol G";
    this.saludar = ()=>console.log("Hola soy ", this.nombre);
}

let e = new Estudiante();

e.saludar(); // Salida "Hola soy Karol"


//function adopta el contexto en la ejecucion
//Arrow adopta el contexto en la creacion