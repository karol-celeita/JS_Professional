
// SCOPE O ALCANCE : Reglas que definen en que parte del codigo esta disponible una varianle y en donde no
// Hay dos tipos: Global y Local

//Scope Global : Se pone fuera del bloque, se pueden modificar cualquier momento
//Recomendado no usarlas tanto para evitar bugs y cargas

var nombre = 'Karol';

function hola (){
    console.log(nombre);
}

hola ();


// Scope Local: Principio de menor acceso: Las variables estan solo en el alcane necesario

function hola (){
    var nombre = 'Karol';
    console.log(nombre);
}

hola ();


// Dos variables pueden compartir el nombre siempre y cuando no esten de ntro del mismo scoér
//(Se pueden crear variables sin var, let o const, pero no es buena practica y JS lo asigna al scope global)

var nombre = 'Dylan';

function hola (){
    var nombre = 'Karol';
    console.log(nombre);
}

hola ();


//ALCANCE LOCAL: POR FUNCION Y POR BLOQUE

// VAR:

function aloha(nombre){
    if (nombre){                   
        var saludo = "Hola" + nombre;  //Aqui hay scope por bloque
    }
    console.log(saludo);
}

// Lo que sea por bloque solo puede ser accedido dentro de este, pero si usamos var se aumenta el alcance al scope funcion


// LET - CONST:

function aloha(nombre){
    if (nombre){                   
        let saludo = "Hola" + nombre;  //Aqui hay scope por bloque
        console.log(saludo)
    }
   // console.log(saludo); Aqui no funcionara
}

// Let y const solo llegan al scope de bloque


// CONST para un dato que sera fijo y no cambiara
// VAR para que este un bloque y sirva tambien para la funcion
// LET Usar para todo lo demas