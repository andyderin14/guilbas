const carritoCompras = []

const contenedorCarrito = document.getElementById('carrito-contenedor');
const contadorCarrito = document.getElementById('contador-carrito');
const precioTotal = document.getElementById('modal-precioTotal');

const agregarAlCarrito = (productoId) => {
          const existe = carritoCompras.some((producto => producto.id === productoId));
          if (existe) {
                    const producto = carritoCompras.map (producto => {
                              if (producto.id === productoId)
                              producto.cantidad++;
                    });
          } else {
                    const item = stockProductos.find((producto) => producto.id === productoId);
                    carritoCompras.push(item);
                    console.log(carritoCompras);
}
actualizarCarrito();
}

const actualizarCarrito = () => {
          contenedorCarrito.innerHTML = ""
          carritoCompras.forEach((producto) => {
                    const div = document.createElement('div');
                    div.classList.add('productoEnCarrito');

                    div.innerHTML = `
                              <img class="carrito-img" src="${producto.img}">
                                        <div class="class="carrito-contenido">
                                                  <p>${producto.nombre}</p>
                                                  <p>Precio: $${producto.precio}</p>
                                                  <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
                                                  <button onclick="eliminarDelCarrito(${producto.id})" class="btn-eliminar"><span class="material-symbols-outlined icon-delete">delete</span></button>
                                        </div>
                              </div>
                    `
                    contenedorCarrito.appendChild(div);
          });

          contadorCarrito.innerText = carritoCompras.length;
          precioTotal.innerText = carritoCompras.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
}

const eliminarDelCarrito = (productoId) => {
          const item = carritoCompras.find((producto) => producto.id === productoId);
          const indice = carritoCompras.indexOf(item);
          carritoCompras.splice(indice, 1);
          actualizarCarrito();
}