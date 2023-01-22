
/* METODOS ACCESORES
 -Se basa en el encapsulamiento: Ocular los detalles del objeto sin acceder directamente a la propiedad
 -Usamos los metodos get y set y se usan para obtener o leer una propiedad
 - Los getter al llamarlos no usamos los parentesis para ejecutarlos
 - Los setter se usan para asignar un valor nuevo  a las propiedades, se llaman cuando se usa el igual
 */

class User{
    get nombre(){ return "Uriel";}
    set nombre(nombre){console.log(nombre);}
}

let user = new User();
console.log(user.nombre);

user.nombre; //getter
user.nombre = "Karol"; // Indica JS que busque la porpiedad nombre o un setter , setter

