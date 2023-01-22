
//Las funciones y variables en JS se pueden usar antes de ser declaradas esto 
//suceda porque se JS sube estas a la parte superior del scope, esto se llama hoisting

console.log(x);
var x;

// Solo se aplica con VAR y funciones


// La asignacion  no siver para hoisting

console.log(x); // resultado: undefined
var x = 20;

// No es comun usar esto pero existe en el lenguaje 
//La buena practica es siempre definir las variables antes de llamarlas