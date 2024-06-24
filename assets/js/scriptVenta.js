// Propiedades en venta
const propiedadesVenta = [
    {
      id: 1,
      titulo: 'Apartamento de lujo en zona exclusiva',
      descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
      direccion: '123 Luxury Lane, Prestige Suburb, CA 45678',
      habitaciones: 4,
      banos: 4,
      precio: 5000,
      permitirFumar: false,
      permitirMascotas: false,
      imagen: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg'
    },
    {
      id: 2,
      titulo: 'Apartamento acogedor en la montaña',
      descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
      direccion: '789 Mountain Road, Summit Peaks, CA 23456',
      habitaciones: 2,
      banos: 1,
      precio: 1200,
      permitirFumar: true,
      permitirMascotas: true,
      imagen: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg'
    },
    {
      id: 3,
      titulo: 'Penthouse de lujo con terraza panorámica',
      descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
      direccion: '567 Skyline Avenue, Skyview City, CA 56789',
      habitaciones: 3,
      banos: 3,
      precio: 4500,
      permitirFumar: false,
      permitirMascotas: true,
      imagen: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg'
    }
  ];
  
  // Función para renderizar las propiedades en venta
  function renderizarPropiedadesVenta() {
    const ventaSection = document.getElementById('venta');
    let html = '';
  
    propiedadesVenta.forEach(propiedad => {
      // Determinar el icono y el mensaje para permitir fumar y mascotas
      const iconoFumar = propiedad.permitirFumar ? '<i class="fas fa-smoking"></i>' : '<i class="fas fa-smoking-ban"></i>';
      const mensajeFumar = propiedad.permitirFumar ? 'Permitido fumar' : 'No se permite fumar';
  
      const iconoMascotas = propiedad.permitirMascotas ? '<i class="fas fa-paw"></i>' : '<i class="fas fa-ban"></i>';
      const mensajeMascotas = propiedad.permitirMascotas ? 'Mascotas permitidas' : 'No se permiten mascotas';
  
      // Construir el HTML para cada propiedad
      html += `
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="${propiedad.imagen}" class="card-img-top" alt="Imagen del departamento">
            <div class="card-body">
              <h5 class="card-title">${propiedad.titulo}</h5>
              <p class="card-text">${propiedad.descripcion}</p>
              <p><i class="fas fa-map-marker-alt"></i> ${propiedad.direccion}</p>
              <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedad.banos} Baños</p>
              <p><i class="fas fa-dollar-sign"></i> ${propiedad.precio}</p>
              <p class="text-danger">${iconoFumar} ${mensajeFumar}</p>
              <p class="text-success">${iconoMascotas} ${mensajeMascotas}</p>
            </div>
          </div>
        </div>
      `;
    });
  
    // Insertar el HTML generado en el contenedor de propiedades en venta
    ventaSection.innerHTML = html;
  }
  
  // Renderizar las propiedades en venta al cargar la página
  document.addEventListener('DOMContentLoaded', function() {
    renderizarPropiedadesVenta();
  });

  


  /* 2. Generar dos arreglos de propiedades (Uno para venta y otro para alquiler) que
cumplan la siguiente estructura que se muestra de ejemplo. Una vez generados los
arreglos de objetos para las propiedades en alquiler y en venta, añade al menos 4
objetos en cada arreglo. 


const propiedades_alquiler = [
{
nombre: '',
src: '',
descripcion: '',
ubicacion: '',
habitaciones: 0,
costo: 0,
smoke: false,
pets: true
}
]

*/



const propiedades_venta = [
  {
    nombre: 'Apartamento de lujo en zona importante',
    src: 'https://images.unsplash.com/photo-1580041065738-e72023775cdc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    descripcion: 'Este apartamento de lujo está ubicado en una importante zona centrica.',
    ubicacion: '698 Lujo Jacob, Suburbios de prestigio, XD 66852',
    habitaciones: 4,
    costo: 9000,
    smoke: false,
    pets: false
  },
  {
    nombre: 'Apartamento cerca de montaña',
    src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    descripcion: 'Este apartamento está situado en muy cerca de una montaña con impresionantes vistas.',
    ubicacion: '667 Montaña Lago, Lake Road, MM 11123',
    habitaciones: 2,
    costo: 3300,
    smoke: true,
    pets: true
  },
  {
    nombre: 'Penthouse lujoso con terraza panorámica',
    src: 'https://plus.unsplash.com/premium_photo-1681338224373-9669c2497c05?q=80&w=2007&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    descripcion: 'Este penthouse lujoso ofrece una terraza panorámica con vistas increíbles.',
    ubicacion: '657 Skyline Avenida, Toronto, MC 12344',
    habitaciones: 3,
    costo: 9500,
    smoke: false,
    pets: true
  },
  {
    nombre: 'Casa con piscina exclusiva',
    src: 'https://images.unsplash.com/photo-1663293761270-8fafc94e2087?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    descripcion: 'Casa grande con una piscina privada y espacios diseñados para el máximo confort.',
    ubicacion: '778 Valle del Sol, SunsetRiders, SS 33258',
    habitaciones: 4,
    costo: 5500,
    smoke: false,
    pets: true
  },
  {
    nombre: 'Departamento moderno con piscina privada',
    src: 'https://images.unsplash.com/photo-1524234599372-a5bd0194758d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    descripcion: 'Amplio departamento moderna con una piscina privada y espacios diseñados para la máxima exclusividad.',
    ubicacion: '654 Sun Valley Drive, Sunnyside, SS 32555',
    habitaciones: 5,
    costo: 9800,
    smoke: false,
    pets: true
  }
];


/* 3. Utilizar ciclos para recorrer el arreglo de con los objetos de propiedades y la
  interpolación y el innerHTML para generar templates y agregar la de las propiedades
  en su respectiva página HTML */

/* 4. Utilizar condicionales para realizar la lógica asociada en caso de que se permitan
mascotas y fumar en la propiedad */

// Obtener el contenedor donde se agregarán las cards de propiedades en venta
const contenedorVenta = document.getElementById('contenedor-venta');

// Generar las cards de propiedades en venta
propiedades_venta.forEach(propiedad => {
  const cardHTML = `
    <div class="col-md-4 mb-4">
      <div class="card">
        <img src="${propiedad.src}" class="card-img-top" alt="Imagen del departamento">
        <div class="card-body">
          <h5 class="card-title">${propiedad.nombre}</h5>
          <p class="card-text">${propiedad.descripcion}</p>
          <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
          <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones</p>
          <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
          ${propiedad.smoke ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>' : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'}
          ${propiedad.pets ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>' : '<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>'}
        </div>
      </div>
    </div>
  `;
  contenedorVenta.innerHTML += cardHTML;
});
