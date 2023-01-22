
//SREAD SINTAX O SEPARADOR DE EXPANSION

    //Cualquier obj de JS que se separe en elementos es iterable
    // Spread permite tomar estos elementos y permite enviarlos individualmente

    let arreglo = [1,2,3];

    // Forma tradicional
    console.log(arreglo); //Salida: [1,2,3]

    //Spread sintax
    console.log(...arreglo); 
    
    //Salida: 
    // 1
    // 2
    // 3

//REST SINTAX O UNIFICADOR DE EXPANSION

    // Es el inverso de spread, este envia los datos unificados en un mismo elemento

    function demo(...arr){
        console.log(arr);
    }

    demo(10,2) // Salida: [10, 2]