
const carrito = []

const botonesAgregarAlCarrito = document.getElementsByClassName('boton-item');
for(let i=0; i<botonesAgregarAlCarrito.length;i++){
    const button = botonesAgregarAlCarrito[i];
    button.addEventListener('click', agregarAlCarritoClicked);
}

function agregarAlCarritoClicked(event){
    const button = event.target;
    const item = button.parentElement;
    const titulo = item.getElementsByClassName('titulo-item')[0];
    const precio = item.getElementsByClassName('precio-item')[0];
    const imagenSrc = item.getElementsByClassName('img-item')[0];
console.log(titulo,precio)
}
