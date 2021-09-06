let cantTareas = 0; //Controlar la cantidad de tareas.

$(document).ready(function() {
    $('img').hide(); //Escondo imagen.
    $('#agregar').click(function() { //Evento click en el boton.
        let tarea = $('input').val(); //Obtiene el valor del input.
        if (tarea !== '') {
            let elem = $('<li>').html(tarea);
            $('.lista').append(elem);
            cantTareas++;
            if (cantTareas > 4) {
                $('img').show();
            }
        }
    });

});