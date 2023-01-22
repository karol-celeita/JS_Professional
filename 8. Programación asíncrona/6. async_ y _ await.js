
//ASYNC
    //Para declarar funciones asincronas en js usamos la palabra async
    //Siempre va a retornar una promesa 
    // Si la funcion retorna ya una promesa como el ejemplo #2  se debe usar el await
    // Si la funcion retorna un valor u otro dato , retorna una promesa con el valor o resultado, ejemplo #1


    //Ejemplo #1
    async function suma (valor1, valor2){
        return valor1+valor2;
    }

    //Ejemplo #2
    async function calcular(){
        return new Promise((resolve, reject)=>{
            setTimeout(resolve,400,5)
        })
    }

//AWAIT
    /*- Hace que una la ejecucion se haga apenas este resuelta una promesa
    - con await ya no necesitariamos usar then 
    - se debe usar con async para que funcione
    */

    async function calculadora(){
        let promesa = await new Promise((resolve, reject)=>{
            setTimeout(resolve,400,5)
        })
    }

//MANEJO DE ERRORES
    //Para manejar errores en las promesas se usa try y catch

    async function(){
        try{
            let promesa = await Promise.reject("Error");
        } catch(err){
            console.log(err);
        }
    }