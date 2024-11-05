window.onload = function(e) {
    console.log('documento cargado');
    
    // Agregamos los eventos a cada enlace
    document.getElementById('enlace_1').onclick = function() {
        toggleSection('contenidos_1', 'enlace_1');
    };

    document.getElementById('enlace_2').onclick = function() {
        toggleSection('contenidos_2', 'enlace_2');
    };

    document.getElementById('enlace_3').onclick = function() {
        toggleSection('contenidos_3', 'enlace_3');
    };
}

// Con esto oculto
function toggleSection(sectionId, linkId) {
    const section = document.getElementById(sectionId);
    const link = document.getElementById(linkId);

    // Miro que no se vea
    if (section.style.display === 'none') {
        // Si está oculta, la mostramos y cambiamos el texto del enlace
        section.style.display = 'block';
        link.innerHTML = 'Ocultar contenidos';
    } else {
        // Si está visible, la ocultamos y cambiamos el texto del enlace
        section.style.display = 'none';
        link.innerHTML = 'Mostrar contenidos';
    }
}
