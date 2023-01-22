//JSON : Javascript Object Notation

let curso = {
    titulo: "Curso JS",
    formato : "video",
    bloques:["Introduccion","Funciones"],
    inscribir : function(){
        console.log("Inscrito");
    }
}

console.log(curso["titulo"]);
console.log(curso.titulo);

//No hay limite de datos
// Puede ser cualquier objeto Firsts Class
//Se pueden sobreescribir
    curso.titulo = "Curso de Python"
    curso["Inscribir"] = function(){ console.log("Inscribir v2");}


//SHORTHAND SYNTAX (funciones), SHORTHAND PROPERTIES (propiedades)

    //Ecma2015 crea una sintaxis para json
    // Para las propiedades se usa cuando tienen el mismo nombre

    let nombre = "karol";
    let usuario = { nombre: nombre}   //Forma tradicional
    let users= {nombre}  //Shorthan properties

    console.log(usuario.nombre);

    //SHORTHAND SYNTAX : Para las funciones no es necesario poner la palabra function


//DUPLICAR O COMBINAR OBJETOS: Se hace usando el spread operator

    //Crear copias y añadirle elementos
    let user = {
        edad:20,
        nombre: "karol",
    }
    
    let duplicado = {...user, permisos: true};  


    //Combinar Json
    let esquemaPermisos = {
        nivel:2
    }

    let combinar = {...user , ...esquemaPermisos}

    //Tambien podemos usar Object assign para hacer lo mismo de spread operator
    let duplicado2 = Object.assign(user, {permisos: true});