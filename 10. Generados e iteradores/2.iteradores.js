

//Ejemplo de iterador:

let iterator = {
    currentValue : 1,
    next(){

        let result = {
            value:null,
            done: true  //Indica si ya acabo el generador
        }

    if(this.currentValue >0 && this.currentValue <=5){
        result= {value: this.currentValue, done:false};
        this.currentValue +=1;
    } else{
        result={done:true};
    }
    return result;
    }
};

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
// Esto hace lo mismo de arriba
let item = iterator.next();
while(!item.done){
    console.log(item.value);
    item=iterator.next();
}

//No hay arreglos, es decir que se trata un solo dato a la vez
// La interaccion es perezosa es decir que solo llamo a los elementos que quiera , si quiero no la llamo
//No hay forma de reiniciarlo, cada llamada retorna el valor final del anterior llamado