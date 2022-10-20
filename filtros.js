const filtrar = document.getElementById('filtroIdFiltrar');

const restablecer= document.getElementById('filtroIdReestablecer');

filtrar.addEventListener('click', () => {

  let formulario = document.getElementById("filtroCategorias");
  let form = new FormData(formulario);
  let categoria = (form.get("categorias"));

  productosFiltrados.filter((producto) => producto.categoria === categoria);
  contenedorProductos.innerHTML= '';

  mostrarProductos ();

  console.log(productosFiltrados);

});

restablecer.addEventListener('click', () => {
  contenedorProductos.innerHTML= '';
  mostrarProductos ();
});