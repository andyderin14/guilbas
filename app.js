const contenedor = document.getElementById('card-container');

productos.forEach(producto => {
          const div = document.createElement('div');
          div.classList.add('card');
          div.innerHTML += `
          <div class="card-header">
                    <img src="${producto.img}">
          </div>
          <div class="card-footer">
                    <button class="card-btnComprar">Agregar al carrito<span class="material-symbols-outlined carrito-btn-comprar">
                    add_shopping_cart
                    </span></button>
                    <div class="card-desc">
                              <h1>${producto.nombre}</h1>
                              <h2>${producto.estacion}</h2>
                              <h3>${producto.desc}</h3>
                              <h4>$ ${producto.precio}</h4>
                    </div>
                    <div class="card-logo">
                                        <img src="${producto.imgLogo}">
                              <div class="card-logo-texto">
                                        <span>${producto.slogan}</span>
                              </div>
                    </div>
          </div>
          `;
          contenedor.appendChild(div);
});