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
        //Función para limpiar campo de entrada
        document.getElementById("amigo").value = "";

    //Si en caso no se cumple la validación, mostraremos un alert
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }

}