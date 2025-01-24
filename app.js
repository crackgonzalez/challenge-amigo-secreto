//**VARIABLES**

//variale array para almacenar los nombres
let amigos = [];

//**FUNCIONES**

//funcion para agregar un amigo al array
function agregarAmigo(){
    //obtengo el valor del input
    let nombreAmigo = document.getElementById('amigo').value.trim();

    if(validarInputVacio(nombreAmigo) == true){
        //si esta vacio se envia un mensaje
        alert('Por favor, inserte un nombre');
    }else{
        //si tiene texto se agrega al array
        amigos.push(nombreAmigo);
        limpiarInput();
        agregarNombreLista();
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

//funcion que agrega nobres a la lista
function agregarNombreLista() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo) => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}
