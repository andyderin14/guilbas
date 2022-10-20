let carritoCompras = []

const contenedorCarrito = document.getElementById('carrito-contenedor');
const contadorCarrito = document.getElementById('contador-carrito');
const precioTotal = document.getElementById('modal-precioTotal');


document.addEventListener('DOMContentLoaded', () => {
    fetchData();
    if (localStorage.getItem('stockCarrito')) {
        carritoCompras = obtenerLocalStorage();
        actualizarCarrito();
    }
});

const fetchData = async () => {
    try {
              const response = await fetch('./stock.json');
              const data = await response.json();

              console.log(data);
              mostrarProductos(data);
    } catch (error) {
              console.log('Ocurrió un error: ', error);
    }
}


const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = "";
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

        // Operador++
        cantidadCarrito += producto.cantidad;

        // Guardo el local Storage
        guardarLocalStorage(carritoCompras);
    });

    contadorCarrito.innerText = cantidadCarrito;
    precioTotal.innerText = carritoCompras.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
}

const eliminarDelCarrito = (productoId) => {
    Swal.fire({
        title: 'Estas seguro?',
        icon: 'warning',
        text: 'El producto se eliminará del carrito.',
        showCancelButton: true,
        confirmButtonColor: '#d11c1e',
        cancelButtonColor: '#424242',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar',
    }).then((result) => {
        if (result.isConfirmed) {

            const item = carritoCompras.find((producto) => producto.id === productoId);
            const indice = carritoCompras.indexOf(item);
            carritoCompras.splice(indice, 1);
            Swal.fire({
                title: 'Eliminado',
                text: 'El producto ha sido eliminado con éxito del carrito.',
                icon: 'success',
                confirmButtonColor: '#d11c1e',
            });
            actualizarCarrito();
        }
        guardarLocalStorage(carritoCompras);
        // Operador lógico AND
        carritoCompras.length === 0 && Swal.fire({
            text: 'El carrito de compras está vacío.',
            icon: 'info',
            confirmButtonColor: '#d11c1e',
        });
        actualizarCarrito();
    });
};

const agregarAlCarrito = (productoId) => {
    const item = stockProductos.find((producto) => producto.id === productoId);
    carritoCompras.push(item);
    guardarLocalStorage(carritoCompras);
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

const guardarLocalStorage = (carritoCompras) => {
    localStorage.setItem('stockCarrito', JSON.stringify(carritoCompras));
};

const obtenerLocalStorage = () => {
    const carritoStorage = JSON.parse(localStorage.getItem('stockCarrito'));
    return carritoStorage;
};