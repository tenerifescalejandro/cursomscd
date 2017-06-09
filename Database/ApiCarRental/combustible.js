$(document).ready(function () {

    function GetMarcas() {
        var urlAPI = 'http://localhost:52673/api/combustible';

        $.get(urlAPI, function (respuesta, estado) {

            console.log(respuesta);
            $('#resultados').html('');
            // COMPRUEBO EL ESTADO DE LA LLAMADA
            if (estado === 'success') {
                // SI LLEGO HASTA AQUÍ QUIERE DECIR

                var relleno = '';

                $.each(respuesta.dataMarcas, function (indice, elemento) {

                    relleno = '<ul>';
                    relleno += '    <li>';
                    relleno += elemento.denominacion;
                    relleno += '    </li>';
                    relleno += '</ul>';

                    $('#resultados').append(relleno);
                });
            }
        });
    }

    $('#btnAddMarca').click(function () {
        debugger;
        var nuevaMarca = $('#txtMarcaDenominacion').val();
        var urlAPI = 'http://localhost:52673/api/combustible';
        var data = {
            id: 0,
            denominacion: nuevocombustible
        };
        debugger;
        $.ajax({
            url: urlapi,
            type: "post",
            data: JSON.stringify({
                id: 0,
                denominacion: nuevocombustible
            }),
            //data: {
            //    id: 0,
    
            complete: function (respuesta, estado) {
                debugger;
                console.log(respuesta);
            }
        });
        //$.post(urlAPI, data, function (result) {
        //    debugger;
        //    $("span").html(result);
        //});


    });

    Getcombustible();
});