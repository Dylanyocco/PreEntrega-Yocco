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
console.log('Producto agregado al carrito:', producto);

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

