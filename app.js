//**VARIABLES**

//variale array para almacenar los nombres
let amigos = [];

//**FUNCIONES**

//funcion para agregar un amigo al array
function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value.trim();//obtengo el valor del input

    if(nombreAmigo == ""){
        alert('Por favor, inserte un nombre')//si esta vacio se envia un mensaje;
    }else{
        amigos.push(nombreAmigo);//si tiene texto se agrega al array
        limpiarInput();
        agregarNombreLista();
    }
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

//funcion que realiza el sorteo del amigo secreto
function sortearAmigo(){
    if(amigos.length > 0){
        numeroAleatorio = Math.floor(Math.random() * amigos.length);//generacion de un numero aleatorio
        let nombreSorteado = amigos[numeroAleatorio];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = "El amigo secreto sorteado es: " + nombreSorteado;
    }
}
