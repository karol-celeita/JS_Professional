
/* 
 - Podemos definir un metodo constructor que se diferencia
    en que este se ejecuta de manera automatica cuando instanciamos un objeto.
 - Se crea para dar instrucciones de inicializacion del objeto 
 - Se define con constructor() 
 - Solo se puede tener una sola vez por clase
 - Recibe parametros que se asignan con el operador new
 - Los argumentos tambien pueden tener valores por defecto
 - Tambien cuenta con el objeto argument, para ver todos los argumentos enviados
 */

 class Curso{
     constructor(titulo, color = "red", argument){
         this.titulo = titulo;
     }
 }

 new Curso("Curso Profesional de Java") // Este argumento lo recibe el constructor 