window.addEventListener('DOMContentLoaded', () => {
    // Cargar l'arxiu html
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'Curriculum.xml'); // Nom del nostre arxiu
    xhr.onload = () => {
      if (xhr.status === 200) {
        const xmlDoc = xhr.responseXML;
        
        // Obtenir els elements de l'XML
        const nombre = xmlDoc.querySelector('nombre').textContent;
        const direccion = xmlDoc.querySelector('direccion').textContent;
        const telefono = xmlDoc.querySelector('telefono').textContent;
        const correo = xmlDoc.querySelector('correo').textContent;
        const empresa1 = xmlDoc.querySelector('empresa1').textContent;
        const puesto = xmlDoc.querySelector('puesto').textContent;
        const fecha = xmlDoc.querySelector('fecha').textContent;
        const empresa2 = xmlDoc.querySelector('empresa2').textContent;
        const puesto2 = xmlDoc.querySelector('puesto2').textContent;
        const fecha2 = xmlDoc.querySelector('fecha2').textContent;
        const titulo = xmlDoc.querySelector('titulo').textContent;
        const institucion = xmlDoc.querySelector('institucion').textContent;
        const fecha3 = xmlDoc.querySelector('fecha3').textContent;
        const habilitat1 = xmlDoc.querySelector('habilitat1').textContent;
        const habilitat2 = xmlDoc.querySelector('habilitat2').textContent;
        const habilitat3 = xmlDoc.querySelector('habilitat3').textContent;


        // Asignar les dades al HTML
        document.getElementById('nombre').textContent = nombre;
        document.getElementById('direccion').textContent = direccion;
        document.getElementById('telefono').textContent = telefono;
        document.getElementById('correo').textContent = correo;
        document.getElementById('empresa1').textContent = empresa1;
        document.getElementById('puesto').textContent = puesto;
        document.getElementById('fecha').textContent = fecha;
        document.getElementById('empresa2').textContent = empresa2;
        document.getElementById('puesto2').textContent = puesto2;
        document.getElementById('fecha2').textContent = fecha2;
        document.getElementById('titulo').textContent = titulo;
        document.getElementById('institucion').textContent = institucion;
        document.getElementById('fecha3').textContent = fecha3;
        document.getElementById('habilitat1').textContent = habilitat1;
        document.getElementById('habilitat2').textContent = habilitat2;
        document.getElementById('habilitat3').textContent = habilitat3;


        // Resto de las asignaciones de datos al HTML
        
      }
    };
    xhr.send();
  });
  
  /* .menu {
  background-color: #000000;
  padding: 10px;
  display: flex; /* Habilitar el modelo de diseño flexbox 
  justify-content: center; /* Centrar verticalmente el menú 
  align-items: center; /* Centrar horizontalmente el menú 
} */
  