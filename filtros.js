function agregarEventoCategorias(){
          filtrarPorCategorias.onsubmit=(e)=>{
              let filtroCategorias = document.getElementById("filtroCategorias");
              const form = new FormData(filtroCategorias);
              e.preventDefault();
              const categoriaSeleccionada = (form.get("categorias"));
              filtrarPorGenero(categoriaSeleccionada);
          }
};


function filtrarPorCategorias(productoId) {
          const nuevoArray = stockProductos.filter(producto => producto.categoria == productoId);

          
            //   divBuscado.remove();
          
          arrayCategorias = nuevoArray;
          
        //   crearDivsProductos(arrayCategorias);
}


function agregarEventoReestablecer(arrayCategorias){
          let botonRestablecer=document.getElementById("filtroIdReestablecer");
          botonRestablecer.onclick = (e) => {
            e.preventDefault();
              for (let productoBuscado of arrayCategorias){
                  let divBuscado = document.getElementById(productoBuscado.id);
                  divBuscado.remove();
              }
          arrayCategorias = stockProductos;
          console.log(agregarEventoReestablecer);
          }
}

function crearDivsProductos(arrayCategorias){
          let cardContainer = document.getElementById("cardContainer");
          for (let producto of arrayCategorias){

              div.setAttribute("id", producto.id);
              cardContainer.appendChild(div);
          }
          agregarAlCarrito(arrayCategorias);
}

// function crearDivsJuegos(arrayJuegos){
//           let galeria=document.getElementById("galeria");
//           for(let juego of arrayJuegos){
//               let divJuego=document.createElement("div");
//               divJuego.className=("galeria__elemento");
//               divJuego.setAttribute("id",juego.id);
//               galeria.appendChild(divJuego);
//           }
//           agregarImagenJuegos(arrayJuegos);
//           agregarTituloJuegos(arrayJuegos);
//           agregarPrecioJuegos(arrayJuegos);
//           agregarBotonComprar(arrayJuegos);
//       }












































// function filterProductos(value) {
//           let filtroBtnProductos = document.querySelectorAll('.filtro-btn-value');
//           filtroBtnProductos.forEach((button) => {
//                     if (value.toUpperCase() == button.innerText.toUpperCase()) {
//                               button.classList.add('active');
//                     }
//                     else {
//                               button.classList.remove('active');
//                     }
//           })
// }

// window.onload = () => {
//           filterProductos('Todos');
// }

// document.getElementById('filtro-serch-container').addEventListener('click', () => {
//           let searchInput = document.getElementById('serch-input').value;
//           let elements = document.querySelector('.product-name');
//         console.log(searchInput);
// })



// let elementos =  document.querySelectorAll('.card-container')
// elementos.forEach((elements) => {
//           if (value == 'Todos') {
//                     elements.classList.remove('hide');
//           }
//           else {
//                     if (elements.classList.contains(value)) {
//                               elements.classList.remove('hide');
//                     }
//                     else {
//                               elements.classList.add('hide');
//                     }
//           }
// });