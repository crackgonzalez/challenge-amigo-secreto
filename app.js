//**VARIABLES**

//variale array para almacenar los nombres
let amigos = [];

//**FUNCIONES**

//funcion para agregar un amigo al array
function agregarAmigo(){
    //obtengo el valor del input
    let nombreAmigo = document.getElementById('amigo').value;

    if(validarInputVacio(nombreAmigo) == true){
        //si esta vacio se envia un mensaje
        alert('Por favor, inserte un nombre');
    }else{
        //si tiene texto se agrega al array
        amigos.push(nombreAmigo);
        limpiarInput();
    }
        
    return;
}

//funcion para validar si el input tiene texto o esta vacio
function validarInputVacio(texto){
    if(texto == ""){
        return true;
    }else{
        return false;
    }
}

//funcion para limpiar el input
function limpiarInput() {
    document.getElementById('amigo').value = "";
}