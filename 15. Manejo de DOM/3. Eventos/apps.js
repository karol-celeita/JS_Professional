
//Los eventos son la forma de controlar acciones en la pagina web

//Evento de Clic

const button = document.querySelector('.clic-button');
button.addEventListener('click',function(){ 
    console.log('Button clic')

});

//Evento de Doble Clic

const button2 = document.querySelector('#description');
button2.addEventListener('dblclick',function(){ 
    console.log('Doble clic')

});


//Objeto target: Almacena el atributo que dispara el evento

const btn = document.querySelector('.ocultar');
btn.addEventListener('click',function(e){ 

   // console.log(e)

    if(title.style.display != 'none'){
        title.style.display = 'none';
       e.target.textContent='Ocultar titulo'
    }
    else{
        title.style.display = 'block';
        e.target.textContent='Mostrar titulo'

    }

});

//Eventos del mouse:
    //mouseenter: Efecto hover
    //mouseout: afuera del elemento


//SetTimeOut: funcion que permite poner un tiempo de espera
window.setTimeout(function(){
    console.log('Hello')
} , 3000)


//Eventos del teclado
const input = document.getElementById('input');
input.addEventListener('keydown', function(e){
    
    //Para saber la tecla presionada usamos el atributo key o keycode
    console.log('Tecla presionada '+ e.key + ' con un codigo '+e.keyCode);
    
});


//Evento Submit

const form = document.getElementById('course-form');
form.addEventListener('submit',function(e){

    e.preventDefault(); //Evitamos que se recargue la pagina y envie los datos

    let title=document.getElementById('title-form').value;
    let description=document.getElementById('description-form').value;

    console.log(title)
    console.log(description)
});

//Eventos por cambio de valor

const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', function(){
    console.log('Cambio de valor')
});

//DocumentLoaded
// Es lanzado  cuando el Dom se construye, y los scripts van arriba en el head
// Aunque por lo general debe ser al final del html


//Propagacion de eventos  o Event Bubbling
//Los eventos creados se propagan a sus familias ancestras

const element= document.querySelector('li');
const list= document.querySelector('ul');
const div_row=  document.querySelector('.row');
const div_container=  document.querySelector('.container');
const body=  document.querySelector('body');

element.addEventListener('click', showMessages);

list.addEventListener('click', showMessages);
div_row.addEventListener('click', showMessages);
div_container.addEventListener('click', showMessages);
body.addEventListener('click', showMessages);


function showMessages(e){
    console.log('Elemento actual ' + this.tagName); //This modifica el valor segun se propague el evento
    console.log('Elemento que disparo el evento ',e.target.tagName)  //Muestra el elemento que disparo el evento
    console.log("\n")

    // Detiene la propagacion del evento
    //e.stopPropagation();
}

