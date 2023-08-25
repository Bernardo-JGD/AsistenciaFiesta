const invitados = [];

const nombre = document.getElementById('inputNombre');
const edad = document.getElementById('inputEdad');
const formulario = document.getElementById('formulario');
const radios = document.getElementsByName('permiso');


function retornarRadioSeleccionado(){
    //Recorriendo los radio buttons para encontrar el que tiene check
    for(let radio of radios){
        if(radio.checked){
            return radio;
        }
    }
}

function validarCampos(){
    if(nombre.value !== "" && edad.value >=12){
        return true;
    }else{
        return false;
    }
}

formulario.addEventListener("submit", e =>{
    e.preventDefault();

    if(validarCampos()){
        registrarInvitadoEnArreglo()
    }
});

function registrarInvitadoEnArreglo(){
    /*Encontré esta forma en internet para acceder al radio con check, yo hice la función retornar... XD
    permisoInvitado: Array.from(radios).find(radio => radio.checked).value
    */
    const invitado = {
        nombreInvitado: nombre.value,
        edadInvitado: edad.value,
        permisoInvitado: retornarRadioSeleccionado().value
    }

    invitados.push(invitado);
    limpiarCampos();
    console.log(invitados);
}

function actualizarTabla(){

}

function limpiarCampos(){
    nombre.value= "";
    edad.value = "";
    document.getElementById('nose').
}
