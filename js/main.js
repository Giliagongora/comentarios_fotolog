/*aquí va tu código*/


/* sessionStorage */
/* En esta llamamos al id para inicial la funcion en un boton*/
function star(){
	var btn = document.getElementById("btnSumar");
	btnSumar.addEventListener("click", more);
	more();
}

function more(){
 	/* llamo a los elementos y los inserto en un nuevo var */
	var nombre = document.getElementById("clave").value;
	var mensaje = document.getElementById("valor").value;

	/*El método setItem() de la interfaz Storage, cuando reciba
	una clave y un valor, añadirá estos al almacén, o actualizará
	el valor si la clave ya existe. */
	sessionStorage.setItem(name,clave);

	/* inserto el elemento en el div ale de mi html */
	var contenido = document.getElementById("ale");
	contenido.innerHTML = "";

	/* recorremos e insertamos en var */
    for(var i = 0; i < localStorage.length; i++){
        var nombre = localStorage.key(i);
        var comentario = localStorage.getItem(nombre);

        /* creamos los elementos e insertamos en variables */
        var elemenNombre = document.createElement('h5');
        var elemenMensaje = document.createElement('p');

        /* creamos nodos de los elementos */
        var elemenOne = document.createTextNode(nombre);
        var elemenTwo = document.createTextNode(comentario);

        /* insertamos los create.elements en los nodos */
        elemenNombre.appendChild(elemenOne);
        elemenMensaje.appendChild(elementTwo);

        /* damos atributos a los elementos creados de createElement */
        elemenNombre.setAttribute("class", usuario);
        elemenMensaje.setAttribute("class", mensaje);

        document.getElementById("ale").appendChild(elemenNombre);
        document.getElementById("ale").appendChild(elemenMensaje);


	}

}
star();

/*
function saveData(){
	var nombre = document.getElementById("clave").value;
	var mensaje = document.getElementById("valor").value;
	sessionStorage.setItem(name,clave);
}
saveData();


function posteos(clave, valor){

    for(var i = 0; i < localStorage.length; i++){
        var nombre = localStorage.key(i);
        var comentario = localStorage.getItem(nombre);
	}

var nombre = document.getElementById("clave").value;
var mensaje = document.getElementById("valor").value;


var nuevo-post = document.createElement("div");
div.setAttribute("ale");


var contenedor-nombre = document.createElement("p");
contenedor-nombre.setAttribute("comentador")


var contenedor-mensaje = document.createElement("p");


}

*/