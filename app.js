//Creamos un array para almacenar los nombres de los amigos Secretos
let amigos = [];
console.log(amigos);

//Función para agregar amigos
function agregarAmigo() {
    //Capturamos los nombres ingresados por el usuario
    let nombreAmigo = document.getElementById("amigo").value;

    //Validamos que el nombre no esté vacío ni contenga caracteres especiales o números.
    if(nombreAmigo!== '' && /^[a-zA-Z\s]+$/.test(nombreAmigo)){
        amigos.push(nombreAmigo);
        console.log(amigos);
        //Limpia el campo de entrada
        document.getElementById("amigo").value = "";
        //Función para visualizar los amigos en pantalla
        actualizarAmigos();

    //Si en caso no se cumple la validación, mostraremos un alert
    } else {
        alert("Por favor, inserte un nombre.");
    }

}

//Función para sortear amigo
function sortearAmigo() {
    //Si la lista de amigos no esta vacia
    if(amigos.length !== 0) {
        //Sorteamos al amigo secreto
        let amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
        //Mostramos el amigo secreto
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "El amigo secreto es: " + amigoSecreto;
        document.getElementById("listaAmigos").innerHTML = "";
        amigos = [];      
      //Si en caso no se cumple la validación, mostraremos un alert 
    } else {
        alert("No hay amigos para sortear.");
    }
}

//Función para actualizar la lista de amigos
function actualizarAmigos() {
    let amigosList = document.getElementById("listaAmigos");
    //Limpiamos la lista para evitar duplicados
    amigosList.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        //Usamos el elemento <li> para los nombres
        let amigoItem = document.createElement("li");
        amigoItem.textContent = amigos[i];
        amigosList.appendChild(amigoItem);
    }
}