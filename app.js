//**VARIABLES**

//variale array para almacenar los nombres
let amigos = [];

//**FUNCIONES**

//funcion para agregar un amigo al array
function agregarAmigo(){
    //obtengo el valor del input
    let nombreAmigo = document.getElementById('amigo').value.trim();

    if(nombreAmigo == ""){
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

//funcion para limpiar el input
function limpiarInput() {
    document.getElementById('amigo').value = "";
}

//funcion que agrega nombres a la lista
function agregarNombreLista() {
    
    let listaAmigos = document.getElementById('listaAmigos');
    let nuevoAmigo = amigos[amigos.length - 1]; // Último amigo agregado
    
    let li = document.createElement('li');
    li.textContent = nuevoAmigo;
    listaAmigos.appendChild(li);

}
