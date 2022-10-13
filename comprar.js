const comprarProductos = document.getElementById('comprarProducto');
// const volverPagInicio = document.getElementById('redireccionarPagInicio');

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
          location.href = 'comprar.html';
          }
});

// volverPagInicio.addEventListener('click', (e) => {
//           e.preventDefault();
//           location.href = 'index.html';
// });