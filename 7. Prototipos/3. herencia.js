
/* Cuando usamos el metodo Object.create, automaticamente el nuevo objeto
hereda todas las porpiedades de su creador  

Tambien podemos sobreescribir la propiedad por ejemplo title
asi si inspeccionamos encontramos dos titles dentro del onjeto ruby
uno del prortipo padre y otro del creado para este
*/


function Course (title){this.title = title;}

let java = new Course("Curso de Java");
let ruby= Object.create(java);

console.log(ruby); //Salida : title: curso porfesional de Javascript

tuby.title = "Curso de ruby":

/*En resumen:
- En Js la herencia de prototipos funcionan al incluir el prototype de una clase en la cadena 
   de prototipos de un objeto
   
- Un objeto puede heredar de toro si lo usamos como primer argumento de Vbject.create

- Una funcion constructora puede heredar de otra si usamos el prototype de la clase base 
como primer argumento de Object.create y asignamos ese resultado al prototype de la clase hija
*/