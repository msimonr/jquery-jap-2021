let cantTareas = 0; //Controlar la cantidad de tareas.

$(document).ready(function() {
    $('img').hide(); //Escondo imagen.
    $('#agregar').click(function() { //Evento click en el boton.
        let tarea = $('input').val(); //Obtiene el valor del input.
        if (tarea !== '') {
            let elem = $('<li>').html(tarea); //Crea elemento li
            $('.lista').append(elem); //Agrega elem a lista
            cantTareas++; //Suma 1 a tareas activas
            if (cantTareas > 4) {
                $('img').show(); //muestra imagen
            }
        }
    });
});