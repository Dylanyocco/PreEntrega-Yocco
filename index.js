const bbdd = [{
    usuario:'dylan',
    contraseña:'1234'},

{   usuario:'marin',
    contraseña:1234},

{   usuario:'paola',
    contraseña:'12345'}
]
const user = { 
    usuario:'',
    contraseña:'',
}

const OPCION_SALIR = 4;
const IVA = 1.21;
const INTERES = 1.40;
const PRECIOPRILIA = 5000
const PRECIOGUZZI = 8000
const PRECIOPIAGGIO = 3500
const ArrayDeProductos = [];
let idUniversal= 1

const buttonLogin = document.getElementById("login-button");
const app = document.querySelector("#app");
let isAuth = JSON.parse(localStorage.getItem("autenticacion"));
const inputs = document.querySelectorAll("input");
if(isAuth === null){
    isAuth = { isLogin : false }
}

const bienvenidaAlUsuario = nombre => {
    app.innerHTML = `<h1 class='title'>Bienvenido sr/sra ${nombre}</h1>`
}

if(isAuth.isLogin){
    bienvenidaAlUsuario(isAuth.name);
}

buttonLogin.addEventListener("click",()=>{
    const usuarioEncontrado = bbdd.find(el => el.usuario === user.usuario && el.contraseña === user.contraseña)
    if(usuarioEncontrado){
        bienvenidaAlUsuario(usuarioEncontrado.usuario);
        localStorage.setItem("autenticacion", JSON.stringify({ name: usuarioEncontrado.usuario, isLogin: true}));        
    }else{
        console.log("No crack no existis.")
    }
});


inputs.forEach( (elemento) => {
    elemento.addEventListener("input",(e)=>{
        const { target } = e;
        const { name, value } = target 
        user[name] = value
    })
})


class Productos{
    constructor( nombre, precio, description, categoria){
        this.nombre = nombre;
        this.precio = precio;
        this.description = description;
        this.categoria = categoria;
    }
}

const RoyalEnfield1 = new Productos(idUniversal++,"interceptor", 7000,"moto hurbana","Royal Enfield");
ArrayDeProductos.push(RoyalEnfield1);

const RoyalEnfield2 = new Productos(idUniversal++,"meteor", 4000,"moto hurbana","Royal Enfield");
ArrayDeProductos.push(RoyalEnfield2);

const RoyalEnfield3 = new Productos(idUniversal++,"himalayan", 5000,"off-road","Royal Enfield");
ArrayDeProductos.push(RoyalEnfield3);

const Vespa1 = new Productos(idUniversal++,"Vxl 150", 3500,"moto hurbana","Vespa");
ArrayDeProductos.push(Vespa1);

const Vespa2 = new Productos(idUniversal++,"Gts300", 4500, "moto hurbana","Vespa");
ArrayDeProductos.push(Vespa2);

const Aprilia = new Productos(idUniversal++,"Tuareg", 12000,"off-Road","Aprilia");
ArrayDeProductos.push(Aprilia);

const Aprilia1 = new Productos(idUniversal++,"RSV4",20000,"Deportiva","Aprilia");
ArrayDeProductos.push(Aprilia1);

const mostrarProductosPorCategoria=(categoria) =>{
const filtrado = ArrayDeProductos.filter((el)=> el.categoria === categoria);
let mostrarMensaje='';
filtrado.forEach((el) => {
    mostrarMensaje+="\nProducto: " + el.nombre + " " + "\Precio: " + el.precio
});
alert(mostrarMensaje)
}
let opcion = parseInt(prompt("Elige la opción que deseas:\n1- Ver Productos\n2- Calcular Cuotas\n3- Prestamo\n4- Salir"));

while (opcion !== OPCION_SALIR) {
switch (opcion) {
case 1:
verProductos();
break;
case 2:
calcularCuotas();
break;
case 3:
prestamo();
break;
case 4:
break;
default:
alert("Ingresaste una opción inválida");
break;
}

opcion = parseInt(prompt("Elige la opción que deseas:\n1- Ver Productos\n2- Calcular Cuotas\n3- Prestamo\n4- Salir"));
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
opcion = parseInt(prompt("Elige la opción que deseas:\n1- aprilia\n2- Royal-Enfield\n3- Vespa\n4- volver"));

while (opcion !== OPCION_SALIR) {
    switch (opcion) {
    case 1:
        mostrarProductosPorCategoria("Aprilia");
        break;
    case 2:
        mostrarProductosPorCategoria("Royal Enfield");
        break;
    case 3:
        mostrarProductosPorCategoria("Vespa");
        break;
    case 4:
        break;
    default:
        alert("Ingresaste una opción inválida");
        break;
    }
    opcion = parseInt(prompt("Elige la opción que deseas:\n1- aprilia\n2- Royal-Enfield\n3- Vespa\n4- volver"));
}
}

function calcularCuotas() {
const total = parseInt(prompt("Ingrese el total:"));
const cuotas = parseInt(prompt("Ingrese la cantidad de cuotas:"));
const resultado = total * INTERES / cuotas;
alert("El valor de cada cuota es: $" + resultado);
}
