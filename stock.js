const stockProductos =
[
          {
                    id: 1,
                    estacion: 'Verano',
                    nombre: 'Remera',
                    desc: 'Outfits clásico urbano',
                    precio: 2500,
                    img: 'img/remera.jpg',
                    imgLogo: 'img/guilbas logo.png',
                    slogan: 'Guilbas Urban Wear',
                    cantidad: 1,
          },
          {
                    id: 2,
                    estacion: 'Verano',
                    nombre: 'Musculosa',
                    desc: 'Cancheras estilo urbana/surf',
                    precio: 2000,
                    img: 'img/musculosa.jpg',
                    imgLogo: 'img/guilbas logo.png',
                    slogan: 'Guilbas Urban Wear',
                    cantidad: 1,
          },
          {
                    id: 3,
                    estacion: 'Verano',
                    nombre: 'Bermuda',
                    desc: 'Estilo camuflado combinan cualquier estilo',
                    precio: 4400,
                    img: 'img/bermuda.jpg',
                    imgLogo: 'img/guilbas logo.png',
                    slogan: 'Guilbas Urban Wear',
                    cantidad: 1,
          },
          {
                    id: 4,
                    estacion: 'Invierno',
                    nombre: 'Campera',
                    desc: 'Impermeable, doble polar, capucha y bolsillo interno',
                    precio: 15000,
                    img: 'img/camperaDeAbrigo.jpg',
                    imgLogo: 'img/guilbas logo.png',
                    slogan: 'Guilbas Urban Wear',
                    cantidad: 1,
          },
          {
                    id: 5,
                    estacion: 'Invierno',
                    nombre: 'Buzo de polar',
                    desc: 'Ideal para estación otoño/invierno',
                    precio: 8000,
                    img: 'img/buzoDePolar.jpg',
                    imgLogo: 'img/guilbas logo.png',
                    slogan: 'Guilbas Urban Wear',
                    cantidad: 1,
          },
          {
                    id: 6,
                    estacion: 'Invierno',
                    nombre: 'Jogging',
                    desc: 'Pantalón de frisa cómodo para todos los días',
                    precio: 5500,
                    img: 'img/joggingDeFrisa.jpg',
                    imgLogo: 'img/guilbas logo.png',
                    slogan: 'Guilbas Urban Wear',
                    cantidad: 1,
          }
];

let arrayCategorias = stockProductos;
// crearDivsProductos(stockProductos);
agregarEventoCategorias();
filtrarPorCategorias();
agregarEventoReestablecer();