const botonesAgregarAlCarrito = document.getElementsByClassName('boton-item');
const carrito = [];
const carritoList = document.getElementById('carrito-list');


for (let i = 0; i < botonesAgregarAlCarrito.length; i++) {
const button = botonesAgregarAlCarrito[i];
button.addEventListener('click', agregarAlCarrito);
}

function agregarAlCarrito(event) {
const button = event.target;
const item = button.parentElement;
const titulo = item.querySelector('.titulo-item').textContent;
const precio = item.querySelector('.precio-item').textContent;

const producto = {
    titulo: titulo,
    precio: precio
};

carrito.push(producto);
console.log('Producto agregado al carrito:', producto);
}
