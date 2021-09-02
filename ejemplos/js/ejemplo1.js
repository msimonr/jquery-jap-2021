/*

//Cuando carga todo el HTML
document.addEventListener('DOMContentLoaded', function() {

    //Al darle click
    document.getElementById('agregar').addEventListener('click', function() {

        //Creando el elemento img
        let img = document.createElement('img');
        img.setAttribute('src', 'img/pikachu.png');
        img.style.width = '100px';

        //Agregandolo al DOM
        document.getElementById('contenedor').appendChild(img);
    });
});

*/






//Cuando carga todo el HTML
$(document).ready(function() {

    //Al darle click
    $('#agregar').click(function() {

        //Creando el elemento img
        let img = $('<img>', { 'src': 'img/pikachu.png' }).css('width', '100px');

        //Agregandolo al DOM
        $('#contenedor').append(img);
    });
})