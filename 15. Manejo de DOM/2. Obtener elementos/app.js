
//Obtener ID del elemento y modificar el titulo del documento

const title = document.getElementById('title');
console.log('Elemento por ID', title)
title.innerHTML= "Cursos"

console.log(title.textContent);


//Obtener elemento por su clase
//Usamos getElements cuando sabemos que existen varios elementos

const items = document.getElementsByClassName('list-group-item');
console.log('Elemento por clase', items)

for (var i =0; i< items.length; i++){
    let elements = items[i];
    // console.log(elements)
}

//Obtener elementos por etiqueta HTML, todos los elementos tienen el atributo tagName

const lista = document.getElementsByTagName('li');
console.log('Elemento por etiqueta', items)

for (var i =0; i< lista.length; i++){
    if (i %2 ==0){
        let element = lista[i];
        element.style.background = '#f2f2f2' //Esto permite añadir estilos
    }

}


//Obtener elementos por atributo CSS

const nueva = document.querySelector('#first-course') //Query selector solo trae un elemento
console.log('Elementos por CSS unicas',nueva)

const nuevas = document.querySelectorAll('list-group-item') //Query selector solo trae un elemento
console.log('Elementos por CSS multiples',nuevas)


//Elementos hijos

const list = document.querySelector('ul');
console.log('# de hijos',list.childElementCount) //Cuenta cuantos hijos tiene
console.log('Lista de hijos', list.children) //Muestra los hijos que tiene , podemos recorrerlo
//console.log('Lista de hijos', list.children [2]) //Podemos ver una posicion exacta
// Podemos ver el primer y ultimo con firtsElementChild y lastElementChild


//Elementos ancestros y hermanos

const data = document.querySelector('div.row > ul.list-group >li')
console.log('Elementos padres', data.parentElement)
console.log('Elementos abuelos', data.parentElement.parentElement)
console.log('Elementos hermano', data.nextElementSibling)
console.log('Elementos hermano siguiente', data.nextElementSibling.nextElementSibling)
//console.log('Elementos hermano previo', data.previousElementSibling)


//Nodos: Son los elementos mas pequeños de nuestro arbol de DOM

const nado = document.getElementById('first-course');
console.log(nado.childElementCount)
console.log(nado.childNodes) 

//Podemos obtener tambien hermanos y padres nodos con nextSibling y parentNodes


//Atributo innerHTML

//Importan los saltos de linea
// Si tengo etiquetas o propiedades dentro de la etiqueta a cambiar el inner HTMl la eliminara

