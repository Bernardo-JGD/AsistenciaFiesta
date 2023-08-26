let invitados = [];

const nombre = document.getElementById('inputNombre');
const edad = document.getElementById('inputEdad');
const formulario = document.getElementById('formulario');
const radios = document.getElementsByName('permiso');

var invitadosContador = 0;

function retornarRadioSeleccionado(){
    //Recorriendo los radio buttons para encontrar el que tiene check
    for(let radio of radios){
        if(radio.checked){
            return radio;
        }
    }
}

function validarCampos(){
    //Para que compare correctamente tengo que parsear el int
    if(nombre.value !== "" && parseInt(edad.value) >=12){
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
    invitadosContador++;
    console.log(invitadosContador);
    const invitado = {
        numeroInvitado: invitadosContador,
        nombreInvitado: nombre.value,
        edadInvitado: edad.value,
        permisoInvitado: retornarRadioSeleccionado().value
    }

    invitados.push(invitado);
    limpiarCampos();
    console.log(invitados);
    actualizarTabla();
}

function actualizarTabla(){
    //para que retorne bien, tengo que colocar el la misma línea del return la comilla de apertura
    const tablaHtml = invitados.map(invitado =>{
        return `
            <tr class="fila" >
                <td>${invitado.nombreInvitado}</td>
                <td>${invitado.edadInvitado}</td>
                <td>${invitado.permisoInvitado}</td>
                <td><button class="botonEliminar" data-id=${invitado.numeroInvitado} >Eliminar</button></td>
            </tr>
            `;
    });

    const cuerpoTabla = document.getElementById('cuerpoTabla');
    cuerpoTabla.innerHTML = tablaHtml.join("");

    document.querySelectorAll('.botonEliminar').forEach(botonEliminar =>{
        botonEliminar.addEventListener('click', e =>{
            //Si no le pongo el parseInt, no detecta el valor del data-id
            const id = parseInt(botonEliminar.getAttribute('data-id')) ;
            invitados = invitados.filter(invitado => invitado.numeroInvitado !== id);
            actualizarTabla();
        });
    });
}


function limpiarCampos(){
    nombre.value= "";
    edad.value = "";
    //document.getElementById('nose')
}
