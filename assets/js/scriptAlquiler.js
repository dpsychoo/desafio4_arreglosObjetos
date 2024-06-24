// Datos Propiedades en alquiler
const propiedadesAlquiler = [
    {
      id: 1,
      titulo: 'Apartamento en el centro de la ciudad',
      descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
      direccion: '123 Main Street, Anytown, CA 91234',
      habitaciones: 2,
      banos: 2,
      precio: 2000,
      permitirFumar: false,
      permitirMascotas: true,
      imagen: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60'
    },
    {
      id: 2,
      titulo: 'Apartamento luminoso con vista al mar',
      descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
      direccion: '456 Ocean Avenue, Seaside Town, CA 56789',
      habitaciones: 3,
      banos: 3,
      precio: 2500,
      permitirFumar: true,
      permitirMascotas: true,
      imagen: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 3,
      titulo: 'Condominio moderno en zona residencial',
      descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
      direccion: '123 Main Street, Anytown, CA 91234',
      habitaciones: 2,
      banos: 2,
      precio: 2200,
      permitirFumar: false,
      permitirMascotas: false,
      imagen: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60'
    }
  ];
  
  // Función para renderizar las propiedades en alquiler
  function renderizarPropiedadesAlquiler() {
    const alquilerSection = document.getElementById('alquiler');
    let html = '';
  
    propiedadesAlquiler.forEach(propiedad => {
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
  
    // Insertar el HTML generado en el contenedor de propiedades en alquiler
    alquilerSection.innerHTML = html;
  }
  
  // Renderizar las propiedades en alquiler al cargar la página
  document.addEventListener('DOMContentLoaded', function() {
    renderizarPropiedadesAlquiler();
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

  const propiedades_alquiler = [
    {
      nombre: 'Departamento ciudad',
      src: 'https://images.unsplash.com/photo-1603003568133-55b07aaf1860?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      descripcion: 'Este departamento de 3 habitaciones está ubicado en la ciudad',
      ubicacion: '234 Calle, Chile, AR 32156',
      habitaciones: 3,
      costo: 3500,
      smoke: true,
      pets: true
    },
    {
      nombre: 'Apartamento frente a la playa',
      src: 'https://plus.unsplash.com/premium_photo-1694475071020-92863068b1e0?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      descripcion: 'Este hermoso apartamento tiene vista a la playa.',
      ubicacion: '325 Avenida del mar, La Serena, LS 48963',
      habitaciones: 4,
      costo: 5000,
      smoke: true,
      pets: false
    },
    {
      nombre: 'Condominio antiguo',
      src: 'https://images.unsplash.com/photo-1600729123691-f884cefc5cc2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      descripcion: 'Este elegante condominio antiguo está ubicado en zona turistica.',
      ubicacion: '654 Calle Vicuña, Gabriela Mistral, VC 123546',
      habitaciones: 2,
      costo: 1500,
      smoke: false,
      pets: false
    },
    {
      nombre: 'Casa con jardín primaveral',
      src: 'https://images.unsplash.com/photo-1624040016644-9c0c77fa954d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      descripcion: 'Espaciosa casa primaveral con un fantastico jardín, perfecta para familias.',
      ubicacion: '932 Arboleda, Villa Verde, VB 88521',
      habitaciones: 5,
      costo: 4500,
      smoke: false,
      pets: true
    },
    {
      nombre: 'Departamento New York',
      src: 'https://images.unsplash.com/photo-1512498369875-56977abee2e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      descripcion: 'Espacioso departamento en New York con vista increíble a la ciudad',
      ubicacion: '666 California, NewYork, NY 66699',
      habitaciones: 6,
      costo: 8500,
      smoke: false,
      pets: true
    }
  ];


  /* 3. Utilizar ciclos para recorrer el arreglo de con los objetos de propiedades y la
  interpolación y el innerHTML para generar templates y agregar la de las propiedades
  en su respectiva página HTML */

  /* 4. Utilizar condicionales para realizar la lógica asociada en caso de que se permitan
mascotas y fumar en la propiedad */


  // Obtener el contenedor donde se agregarán las cards de propiedades en alquiler
const contenedorAlquiler = document.getElementById('contenedor-alquiler');

// Generar las cards de propiedades en alquiler
propiedades_alquiler.forEach(propiedad => {
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
  contenedorAlquiler.innerHTML += cardHTML;
});


