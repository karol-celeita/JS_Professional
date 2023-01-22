
//HERENCIA DE CLASES

    // Un objeto puede heredar de su padre, usamos extends para hacerlo
    // Puede heredar metodos y propiedades

        //Clase padre
            class Human{
                especie = "Humano";
            }

        // Heredamos a la clase hijo
            class Admin extends Human{
                //Toma las propiedades de su padre
            }

        let admin = new Admin();
        console.log(admin.especie); //Salida: Humano


    //Tambien podemos heredar de clases definidas en JS:
        class CustomDate extends Date{}
        class CustomArray extends Array{}


    // Podemos sobreescribir los metodos o propiedades heredadas:
        class User{
            saludar(){console.log("Hola usuario");}
        }

         //Podemos tener acceso a un objeto super que se refiere a la clase padre:
        class Admin extends User{
            saludar(){
                super.saludar(); // Clase que trae todo del padre
                console.log("Hola soy admin");
            }
        }