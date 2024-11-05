let currentId = 1; // Variable para manejar el ID autoincremental

function onClick() {
    let tbody = document.getElementsByTagName('tbody')[0];

    let tr = document.createElement('tr');

    // Columna ID autoincremental
    let td = document.createElement('td');
    td.innerText = currentId;
    tr.appendChild(td);

    // Columna Name
    td = document.createElement('td');
    td.innerText = 'Nombre';
    tr.appendChild(td);

    // Columna Surname
    td = document.createElement('td');
    td.innerText = 'Apellido';
    tr.appendChild(td);

    // Columna Acciones con enlace de edición
    td = document.createElement('td');
    let link = document.createElement('a');
    link.href = `http://localhost/edit/${currentId}`;
    link.innerText = 'Editar';
    td.appendChild(link);
    tr.appendChild(td);

    tbody.appendChild(tr);
    
    // Incrementar el ID para el próximo registro
    currentId++;
    console.log('add');
}
