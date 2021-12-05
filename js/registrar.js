function registrarse(){
    let nombre =$("#nombre").val()
    let correo = $("#usuario").val()
    let contraseña = $("#contraseña").val()
    let contraseña2 = $("#contraseña2").val()
    let datos={
        email : $("#email").val(),
        password : $("#contraseña").val(),
        name : $("#nombre").val()
    }
    let datosPeticion = JSON.stringify(datos);
    console.log(datosPeticion);
    console.log(contraseña2);
    if(contraseña==contraseña2){
        $.ajax({
            url: "http://localhost:8080/api/user/new",
            data: datosPeticion,
            type: 'POST',
            contentType: "application/JSON",
            dataType: 'json',
            success: function (respuesta) {
                console.log(respuesta);
                validacion(respuesta)	
            },
            error: function (xhr, status) {		
                console.log("error en la solicitud");	
            },
        });
    }else{
        alert("Las contraseñas no coinciden")
    }
}
function validacion(respuesta){
    let id = respuesta.id
    let nombre= respuesta.name

    if (id==null)
        alert("Usuario no registrado : " + nombre)
    else
        alert("Bienvenido : " + id + " "+ nombre)

}