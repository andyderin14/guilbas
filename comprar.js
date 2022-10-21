const comprarProductos = document.getElementById('comprarProducto');

const formularioCompraProductos = document.getElementById('comprarContainer');

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

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_fo5iyya';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Enviado!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});