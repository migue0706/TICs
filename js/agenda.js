document.write("Una agenda");

let opcion = parseInt(prompt("Escoge una opción:  1-Agregar 2-listar 3-salir"));

document.writeln(opcion);
let seguir = true;
let datos = [];
while(seguir) { 
    let opcion = parseInt(prompt("Escoge una opción:  1-Agregar 2-listar 3-salir"));
    switch(opcion) {
        case 1:
            alert("Escogiste la opción 1");
            let nombre = prompt("Ingresa tu nombre");
            datos.push(nombre);
            console.table(datos);
            break;
        case 2:
            alert("Escogiste la opción 2");
            break;
        case 3:
            alert("Escogiste la opción 3");
            seguir = false;
            break;
        default:
            alert("No recibí una opción válida");
            break;
    }
}