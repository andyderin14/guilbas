const modalContenedor = document.querySelector('.modal-container');
const abrirCarrito = document.getElementById('carrito-modal');
const cerrarCarrito = document.getElementById('modal-cerrar');
const modalCarrito = document.querySelector('.modal-carrito');

abrirCarrito.addEventListener('click', () => {
          modalContenedor.classList.toggle('modal-active');
})