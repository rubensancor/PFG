function cambiarColor() {
    $('#cp8Fondo').colorpicker().on('changeColor', function(e) {
        $('#colmenaDiv').css("background", e.color.toString('rgba'));
    });
}