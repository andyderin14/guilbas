const comprarProductos = document.getElementById('comprarProducto');

comprarProductos.addEventListener('click', (e) => {
          e.preventDefault();
          if (carritoCompras.length === 0) {
                    Swal.fire({
                              title: 'El carrito está vacío.',
                              text: 'Agregá algún producto al carrito. ',
                              icon: 'error',
                              confirmButtonColor: '#d11c1e',
                          });
          } else {
            Swal.fire({
              title: 'Gracias por tu compra.',
              text: 'Tu cumpra se ah realizado con éxito!',
              icon: 'success',
              confirmButtonColor: '#d11c1e',
          });
                carritoCompras.length = 0;
                guardarLocalStorage(carritoCompras);
                actualizarCarrito();
          }
});