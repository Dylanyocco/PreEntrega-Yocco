const botonesAgregarAlCarrito = document.getElementsByClassName('boton-item');
let carrito = obtenerCarritoGuardado();
const carritoList = document.querySelector('#carrito-list');
const eliminarArticulo = document.querySelector('eliminar-item')
for (let i = 0; i < botonesAgregarAlCarrito.length; i++) {
const button = botonesAgregarAlCarrito[i];
button.addEventListener('click', agregarAlCarrito);
}

function agregarAlCarrito(event) {
const button = event.target;
const item = button.parentElement;
const titulo = item.querySelector('.titulo-item').textContent;
const precio = item.querySelector('.precio-item').textContent;
const imagen = item.querySelector('.img-item').src;

const producto = {
    titulo: titulo,
    precio: precio,
    imagen: imagen,
};

carrito.push(producto);
guardarCarritoEnLocalStorage();
Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Producto guardado',
    showConfirmButton: false,
    timer: 1500
})
}

function obtenerCarritoGuardado() {
const carritoGuardado = localStorage.getItem('carrito');
return carritoGuardado ? JSON.parse(carritoGuardado) : [];
}

function guardarCarritoEnLocalStorage() {
localStorage.setItem('carrito', JSON.stringify(carrito));
}

function actualizarCantidadCarrito() {
    cantidadCarrito.textContent = carrito.length;
}

carritoList.addEventListener("click", (event) => {
    if (event.target.classList.contains("eliminar-item")) {
    const button = event.target;
    const item = button.closest(".item");
    const index = Array.from(carritoList.children).indexOf(item);
    eliminarDelCarrito(index);
    }
});

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    guardarCarritoEnLocalStorage();
}

carritoList.addEventListener("click", () => {
    carritoList.innerHTML = 'Carrito';
    carrito.forEach((el) => {
        const item = document.createElement("div");
        item.classList.add("item");
        item.innerHTML = `
            <div class="item">
                <img class="img-item" src="${el.imagen}">
                <h2 class="titulo-item">${el.titulo}</h2>
                <p class="precio-item">${el.precio}</p>
                <button class="boton-item eliminar-item">Eliminar</button>
            </div>`;
        carritoList.appendChild(item);
    });
});

function calcularTotalCarrito() {
    let total = 0;
    carrito.forEach((producto) => {
        const precioNumerico = parseFloat(producto.precio.slice(1)); // Convertir el precio a número quitando el signo '$'
        total += precioNumerico;
    });
    return total.toFixed(2); // Redondear el total a 2 decimales
}
function actualizarTotalCarrito() {
    const totalPrecioElement = document.getElementById('total-precio');
    const total = calcularTotalCarrito();
    totalPrecioElement.textContent = total;
}
carritoList.addEventListener('click', () => {
    actualizarTotalCarrito();
});

actualizarTotalCarrito();