const OPCION_SALIR = 4;
const IVA = 1.21;
const INTERES = 1.40;

let opcion = parseInt(prompt("Elige la opción que deseas:\n1- Ver Productos\n2- Calcular Cuotas\n3- Calcular IVA\n4- Salir"));

while (opcion !== OPCION_SALIR) {
switch (opcion) {
    case 1:
    verProductos();
    break;
    case 2:
    calcularCuotas();
    break;
    case 3:
    calcularIVA();
    break;
    case 4:
    break;
    default:
    alert("Ingresaste una opción inválida");
    break;
}

opcion = parseInt(prompt("Elige la opción que deseas:\n1- Ver Productos\n2- Calcular Cuotas\n3- Calcular IVA\n4- Salir"));
}

function verProductos() {
let opcion;
opcion = parseInt(prompt("Elige la opción que deseas:\n1- Motos\n2- Accesorios\n3- Indumentaria\n4- volver"));

while (opcion !== OPCION_SALIR) {
    switch (opcion) {
    case 1:
        mostrarMotos();
        break;
    case 2:
        mostrarAccesorios();
        break;
    case 3:
        mostrarIndumentaria();
        break;
    case 4:
        break;
    default:
        alert("Ingresaste una opción inválida");
        break;
    }
    opcion = parseInt(prompt("Elige la opción que deseas:\n1- Motos\n2- Accesorios\n3- Indumentaria\n4- volver"));
}
}
function mostrarMotos() {
    let opcion;
    opcion = parseInt(prompt("Elige la opción que deseas:\n1- aprilia\n2- moto guzzi\n3- piaggio\n4- volver"));
    
    while (opcion !== OPCION_SALIR) {
        switch (opcion) {
        case 1:
            aprilia();
            break;
        case 2:
            motoguzzi();
            break;
        case 3:
            piaggio();
            break;
        case 4:
            break;
        default:
            alert("Ingresaste una opción inválida");
            break;
        }
        opcion = parseInt(prompt("Elige la opción que deseas:\n1- aprilia\n2- moto guzzi\n3- piaggio\n4- volver"));
    }
    }

function calcularIVA() {
    const total = parseFloat(prompt("Ingrese el total:"));
    const resultado = IVA * total;
    alert("El total es: $" + total + "\n El total con IVA es: $" + resultado);
}

function calcularCuotas() {
    const total = parseInt(prompt("Ingrese el total:"));
    const cuotas = parseInt(prompt("Ingrese la cantidad de cuotas:"));
    const resultado = total * INTERES / cuotas;
    alert("El valor de cada cuota es: $" + resultado);
}
