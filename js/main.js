import {todasLasTarjetas} from './data.js';

function agregartitulos(){
    //DOM
    let root = document.querySelector("#root");

    todasLasTarjetas.forEach( function(deporte){
        //CREAR UN ELEMENTO DENTRO DEL DOM
        let titulo = document.createElement("div");

        //SE AGREGA CONTENIDO AL ELEMENTO
        titulo.innerHTML = 
        '<div class="tarjetas">' +
            deporte +
        '</div>';

        //SE AGREGA AL DOM
        root.appendChild(titulo);
} );

}

agregartitulos();
