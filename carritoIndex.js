const carritoCompras = []

const carritoIndex = (productoId) => {

          const contenedorCarrito = document.getElementById('carrito-contenedor');

          const renderProductosCarrito = () => {
                    let producto = productos.find(producto => producto.id == productoId)
                    // console.log(carritoCompras);

                    carritoCompras.push(producto)

                    producto.cantidad = 1;

                    let div = document.createElement('div');
                    div.classList.add('productoEnCarrito');

                    div.innerHTML = `
                              <img class="carrito-img" src="${producto.img}">
                              <div class="carrito-contenido">
                                        <p>${producto.nombre}</p>
                                        <p>Precio: $${producto.precio}</p>
                                        <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
                                        <button id="Eliminar${producto.id}" class="btn-eliminar"></button>
                              </div>
                    </div>
                    `
                    contenedorCarrito.appendChild(div);
          }

          renderProductosCarrito();
}