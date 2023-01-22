
function Course (){
    Course.prototype.inscribir = function(){
        console.log("Ya llegue");
    }
}


//Estos elementos creados comparten el console.log del prototipo
let javaScript = new Course();
let ruby = new Course();

 
/*Como comparten lo del prototipo, aunque esten creados arriba 
si modifico el prototipo padre aplica en todos 
*/

Course.prototype.inscribir = function(){
    console.log("Ya llegue V2");
}

javaScript.inscribir();
ruby.inscribir();



//EJERCICIO 2

function Courses (){
    Course.prototype.inscribir = function(){
        console.log("Ya llegue");
    }
}

Course.prototype.conteo = 0;

let javaScripts = new Courses();
javaScripts.__proto__.conteo +=1;

let rubys = new Courses();
rubys.__proto__.conteo += 1;

console.log(Course.prototype.conteo) //Salida 2

/* No importa el metodo en donde ejecutemos el prototipo, 
porque va incrementado las veces que lo llaman independiente del 
objeto que modifica el prototipo
*/