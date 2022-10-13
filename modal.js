const modalContenedor = document.querySelector('.modal-container');
const abrirCarrito = document.getElementById('carrito-modal');
const cerrarCarrito = document.getElementById('modal-cerrar');
const modalCarrito = document.querySelector('.modal-carrito');
const botonVaciarCarrito = document.getElementById('vaciarCarrito');

abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.remove('modal-active')
});

modalContenedor.addEventListener('click', () => {
    cerrarCarrito.click();
});

modalCarrito.addEventListener('click', (e) => {
    e.stopPropagation();
});

botonVaciarCarrito.addEventListener('click', () => {
    if (carritoCompras.length === 0) {

        Swal.fire({
            title: 'El carrito está vacío.',
            text: 'Agregá algún producto al carrito. ',
            icon: 'error',
            confirmButtonColor: '#d11c1e',
        });

    } else { Swal.fire({
        title: 'Estas seguro?',
        icon: 'warning',
        text: 'Se eliminaran todos los productos del carrito.',
        showCancelButton: true,
        confirmButtonColor: '#d11c1e',
        cancelButtonColor: '#424242',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                carritoCompras.length = 0;
                guardarLocalStorage(carritoCompras);
                actualizarCarrito();
                Swal.fire({
                    title: 'Carrito vacío.',
                    text: 'Se han eliminado todos los productos del carrito.',
                    icon: 'info',
                    confirmButtonColor: '#d11c1e',
                });
                actualizarCarrito();
            }
        });
    }
});