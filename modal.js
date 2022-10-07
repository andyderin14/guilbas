const modalContenedor = document.querySelector('.modal-container');
const abrirCarrito = document.getElementById('carrito-modal');
const cerrarCarrito = document.getElementById('modal-cerrar');
const modalCarrito = document.querySelector('.modal-carrito');
const botonVaciarCarrito = document.getElementById('vaciarCarrito');

abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

cerrarCarrito.addEventListener('click', ()=> {
    modalContenedor.classList.remove('modal-active')
});

modalContenedor.addEventListener('click', () =>{
    cerrarCarrito.click();
});

    modalCarrito.addEventListener('click', (e) =>{
        e.stopPropagation();
});

botonVaciarCarrito.addEventListener('click', () => {
    carritoCompras.length = 0;
    guardarLocalStorage(carritoCompras);
    actualizarCarrito();
});