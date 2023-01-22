
// En JS las clases no existen, JS esta orientado a objetos pero basado en prototipos
// Son una sintaxis alternativa para definir objetos

class Curso{
    constructor(titulo){
        this.titulo = titulo;
    }

    inscribir(){
        console.log("Isncrito");
    }
}

let javascript= new Curso("Curso de JavaScript");

let curso = class{ } // Otra forma de escribirlas de forma rapida

console.log(javascript.titulo);
javascript.inscribir;


//DEFINIR METODOS Y PROPIEDADES

    // Podemos definir porpiedades asignandolas a this, que en la clase representan al objeto instanciado
    // Cualquier metodo puede recibir una porpiedad con this

    class Course{
        constructor(titulo){
            this.titulo = titulo;
        }

        inscribir(nombre){
            this.nombre = nombre;
            console.log("Isncrito");
        }
    }

//ALCANCE DE PROPIEDADES

    /*En JS las propiedades y metodos de una clase son publicos por defecto, 
    existe una sintaxis para metodos privados aun no implementada por completo,
    Para ello usamos hash antes de la variable, y solo podremos acceder a ella dentro de la clase, veamos: */

    class Tema{
        #title= "Javascript";
    }

    let javascrip = new Tema();
    console.log(javascrip.#title) //Salida: Private field Error Syntax

    // Usandolo correctamente:
    
    class Tema{
        #title= "Javascript";
        bienvenida(){
            console.log("Bienvenido al curso: ", this.#title);
        }
    }

    let objetos = new Tema();
    objetos.bienvenida() //Salida: Bienvenida al curso Javascript
