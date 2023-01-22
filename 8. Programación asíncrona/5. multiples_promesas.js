

//MULTIPLES OPERACIONES ASINCRONAS INDEPENDIENTES ENTRE SÍ

    let p1 = new Promise((resolve, reject)=> setTimeout(resolve, 500, "Hola mundo"));

    let p2 = new Promise((resolve, reject)=> setTimeout(resolve, 600, "Segundo hola mundo"));


    // Hacer que se finalize cuando las dos promesas terminen de manera optima

    function finalizado(){
        console.log("Todo finalizó")
    }

    Promise.all([p1,p2]).then(function(resultados){
        console.log(resultados);
        finalizado();
    }).catch(err => console.log(err));


//ENCADENAR PROMESAS QUE SI DEPENDEN ENTRE SI   

    //Ej: p4 solo se podra ejecutar cuando p3 termine

    function primerPromesa(){
        return new Promise((resolve, reject)=> setTimeout(resolve, 500, " Tercer Hola mundo"));
      }


    function segundaPromesa(){
      return new Promise((resolve, reject)=> setTimeout(resolve, 600, "Cuarto hola mundo"));
    }

    primerPromesa().then(segundaPromesa).then(function(r){console.log(r)});

//La regla para encadenar promesas es que retorne una promesa