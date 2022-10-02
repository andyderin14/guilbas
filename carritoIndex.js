const carritoCompras = []

const contenedorCarrito = document.getElementById('carrito-contenedor');
const contadorCarrito = document.getElementById('contador-carrito');
const precioTotal = document.getElementById('modal-precioTotal');

const actualizarCarrito = () => {
          contenedorCarrito.innerHTML = ""
          let cantidadCarrito = 0;
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
                    cantidadCarrito += producto.cantidad;
          });

          contadorCarrito.innerText = cantidadCarrito;
          precioTotal.innerText = carritoCompras.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
}

const eliminarDelCarrito = (productoId) => {
          const item = carritoCompras.find((producto) => producto.id === productoId);
          const indice = carritoCompras.indexOf(item);
          carritoCompras.splice(indice, 1);
          actualizarCarrito();
};

const agregarAlCarrito = (productoId) => {
          const item = stockProductos.find((producto) => producto.id === productoId);
          carritoCompras.push(item);
          actualizarCarrito();
          console.log(carritoCompras);
};

const validarProductoRepetido = (p) => {
          const productoRepetido = carritoCompras.find(producto => producto.id === p.id);
          if (productoRepetido) {
              return true;
          } else {
              return false;
          }
};