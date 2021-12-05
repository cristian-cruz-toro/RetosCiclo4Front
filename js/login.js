function login(){
    let email = $("#usuario").val()
    let password = $("#contraseña").val()
    $.ajax({
        url: "http://localhost:8080/api/user/"+ email + "/" + password,
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            console.log(respuesta);
            validacion(respuesta)	
        },
        error: function (xhr, status) {		
            console.log("error en la solicitud");	
        },
    });
}
function validacion(respuesta){
    let id = respuesta.id
    let nombre= respuesta.name

    if (id==null)
        alert("Datos de usuario o contraseña no validos")
    else
        alert("Aceso permitido: " + nombre)

}