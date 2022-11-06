const filtrar = document.getElementById('filtroIdFiltrar');

const restablecer= document.getElementById('filtroIdReestablecer');

filtrar.addEventListener('click', () => {

  let formulario = document.getElementById("filtroCategorias");
  let form = new FormData(formulario);
  let categoria = (form.get("categorias"));
  console.log(categoria);
  productosFiltrados = stockProductos.filter((producto) => producto.categoria === categoria);
  contenedorProductos.innerHTML= '';
  console.log(productosFiltrados);
  mostrarProductos(stockProductos);

});

restablecer.addEventListener('click', () => {
  productosFiltrados = stockProductos;
  contenedorProductos.innerHTML= '';
  mostrarProductos(stockProductos);
});