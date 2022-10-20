const contenedorProductos = document.getElementById('card-container');

mostrarProductos ();

function mostrarProductos () {

          productosFiltrados.forEach(producto => {
                    const div = document.createElement('div');
                    div.classList.add('card');

                    div.innerHTML += `
                              <div class="card-header">
                                        <img src="${producto.img}">
                              </div>
                              <div class="card-body">
                                        <div class="card-body-btnComprar">
                                                  <button class="card-btnComprar" id="agregar${producto.id}">Agregar al carrito<span class="material-symbols-outlined carrito-btn-comprar">
                                                  add_shopping_cart
                                                  </span></button>
                                        </div>
                                        <div class="card-desc">
                                                  <h1>${producto.nombre}</h1>
                                                  <h3>${producto.desc}</h3>
                                                  <h4>$ ${producto.precio}</h4>
                                        </div>
                                        <select name="select" class="card-selectTalles">
                                                  <option value="value1">Talle S</option>
                                                  <option value="value2" selected>Talle M</option>
                                                  <option value="value3">Talle L</option>
                                                  <option value="value4">Talle XL</option>
                                        </select>
                              </div>
                              <div class="card-footer">
                                                  <img class="card-footer-img" src="${producto.imgLogo}">
                                        <div class="card-logo-texto">
                                                  <span>${producto.slogan}</span>
                                        </div>
                              </div>
                    </div>
                    `;
                    contenedorProductos.appendChild(div);

                    const btn = document.getElementById(`agregar${producto.id}`)
                    btn.addEventListener('click', () => {

                              // Operador ternario // Operador++
                              validarProductoRepetido(producto) ? producto.cantidad++ : agregarAlCarrito(producto.id);

                              Swal.fire({
                                        title: 'Felicidades!',
                                        text: `Se agrego el producto: ${producto.nombre} con éxito.`,
                                        imageUrl: `${producto.img}`,
                                        icon: 'success',
                                        imageWidht: '150',
                                        imageHeight: '150',
                                        confirmButtonColor: '#d11c1e',
                                        imageAlt: 'Custon image',
                              });
                              actualizarCarrito();
                    });
          });
}