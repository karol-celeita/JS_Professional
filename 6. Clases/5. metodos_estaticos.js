
// Con la palabra static se pueden crear propiedades y metodos estaticos

class Api{
    static get(){console.log("Soy un metodo estatico");}
}

Api.get();

 // Las propiedades estaticas sirven para cachear y almacenar configuracion fija
 // Los metodos estaticos son de utilidad, crear o clonar objetos