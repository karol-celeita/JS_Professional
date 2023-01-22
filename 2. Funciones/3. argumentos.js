
function saludar(nombre, apellido = "Celeita"){
    console.log(nombre, apellido)
}

saludar("Karol")

// Los argumentos con default van despues de los que no tienen



//PASE POR VALOR O REFERENCIA

//Argumento por valor: cuando se envia una copia del argumento original, no afecta al valor original
//Argumento por referencia: cuando se envia el argumento original, afecta al valor original

let edad = 20;

function modificador(edad){ //Este dato se esta enviando como valor por eso no interfieren los valores
    edad= 25;  
    console.log('Dentro de la funcion', edad)

}

console.log(edad);  //20
modificador(edad);  //25
console.log(edad);  //20



// Los objetos y arreglos se envian como referencia:

let edades = [20];

function modificador(edades){ //Este dato se esta enviando como valor por eso no interfieren los valores
    edades[0]= 25;  
    console.log('Dentro de la funcion', edades)
}

console.log(edades);  //20
modificador(edades);  //25
console.log(edades);  //25


//FUNCIONES PURAS: Es aquella que no produce efectos secundarios


//First Class Citizen o Fists Class Objects
// - Debe ser posible retornar
// - Debe ser posible asignarlo a una variable
// - Debe ser posible enviarlo como argumento

//Ejemplos de esto son los numeros, cadenas, funciones, objetos, booleanos y arreglos

 return 2;
 let number = 2;
 hola(2);



