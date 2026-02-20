document.write("Una agenda");
let seguir = true;
let datos = [];

while(seguir) { 
    let opcion = parseInt(prompt("Escoge una opción: \n 1-Agregar \n 2-listar \n 3-salir"));
    switch(opcion) {
        case 1:
            alert("Escogiste la opción 1");
            let id = parseInt(datos.length + 1);
            let nombre = prompt("Ingresa tu nombre");
            let lastName = prompt("Ingresa tu apellido");
            let facultad = prompt("Ingresa tu facultad");
            let telefono = parseInt(prompt("Ingresa tu número de telefono"));
            let edad = parseInt(prompt("Ingresa tu edad"));
    
            
            let agenda = {id, nombre, lastName, facultad, telefono, edad}
            datos.push(agenda);


            console.table(datos);
            break;
        case 2:
            let todos = "";
            for (let i = 0; i < datos.length; i++) {
                todos += `id: ${datos[i].id}`;
                todos += `Nombre: ${datos[i].nombre} \n`;
                todos += `Apellido: ${datos[i].lastName} \n`;
                todos += `facultad: ${datos[i].facultad} \n`;
                todos += `telefono: ${datos[i].telefono} \n`;
                todos += `edad: ${datos[i].edad} \n`;
            }
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