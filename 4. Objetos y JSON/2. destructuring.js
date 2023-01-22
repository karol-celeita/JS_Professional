
 /* Destructuring nos permite: 
 
    Asignar varias propiedades de un objeto a distintas variables.
    Obtener solo algunas de las propiedades de un objeto y excluir otras.
    Separar las propiedades de un objeto que recibamos como argumento de una función en distintas variables.
    Separar el retorno de una función en distintas variables.
 */

let user = {
        edad:20,
        nombre: "karol",
    }

// Colocamos del lado izq las llaves y dentro las variables que vamos a separa, del lado der de donde tomaremos esa informacion
let {nombre: username} = user;  // Podemos guardar el dato en una nueva variable llamada username
console.log(username);  // Salida "Karol"


//FUNCIONES CONSTRUCTORAS

// Se llaman asi cuando instancian a un objeto

function Course (){
    this.title = title;
    this.inscribir = function(){}
}

let objeto = new Course("Curso de JS");
let objeto2 = new Course("Curso de Python");

console.log(objeto);

// Podemos instanciar muchas veces de la misma clase constructora