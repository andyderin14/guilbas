const carritoCompras = []

const carritoIndex = (productoId) => {
          const contenedorCarrito = document.getElementById('carrito-contenedor');

          const renderproductosCarrito = () => {
                    let producto = productos.find(producto => producto.id === productoId)
                    console.log(carritoCompras);

                    carritoCompras.push(producto)

                    producto.cantidad = 1

                    let div = document.createElement('div');
                    div.classList.add('productoEnCarrito');

                    div.innerHTML = `<p>${producto.nombre}</p>
                                 <p>Precio: ${producto.precio}</p>
                                 <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
                                 <button id="Eliminar${producto.id}" class="btn-eliminar"></button>
                    `
                    contenedorCarrito.appendChild(div);
          }

          renderproductosCarrito();
}