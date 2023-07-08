const botonesAgregarAlCarrito = document.getElementsByClassName('boton-item');
const carrito = [];
const carritoList = document.querySelector('#carrito-list');


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
console.log( carrito);
}

carritoList.addEventListener("click", () => {
    carritoList.innerHTML = '';
    carrito.forEach((el) => {
    const item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML = `
        <div class="item">
        <img class="img-item" src="${el.imagen}">
        <h2 class="titulo-item">${el.titulo}</h2>
        <p class="precio-item">${el.precio}</p>
        </div>`;
    carritoList.appendChild(item);
    });
});
