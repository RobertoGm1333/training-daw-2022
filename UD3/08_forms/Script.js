// Hago que cargue todo cuando aparece la página y atribuyo un const a cada parte del código con su ID
window.onload = function() {
    const form = document.getElementById("main_form")
    const submitButton = document.getElementById("submit")
    const checkboxCondiciones = document.getElementById("condiciones")
    const checkboxPrivacidad = document.getElementById("privacidad")
    const preguntaSi = document.getElementById("pregunta_si")
    const opcionesSelect = document.getElementById("opciones")
    const nameInput = document.getElementById("name")
    const surnameInput = document.getElementById("surname")
    const descriptionInput = document.getElementById("description")

    // Compruebo que las checkboxes están las dos checkboxeadas
    function checkCheckboxes() {
        submitButton.disabled = !(checkboxCondiciones.checked && checkboxPrivacidad.checked)
    }
    checkboxCondiciones.onchange = checkCheckboxes
    checkboxPrivacidad.onchange = checkCheckboxes

    // Compruebo que el check esté en si para que se pueda acceder al otro menú
    function toggleSelect() {
        opcionesSelect.disabled = !preguntaSi.checked
    }
    preguntaSi.onchange = toggleSelect
    document.getElementById("pregunta_no").onchange = toggleSelect
    document.getElementById("pregunta_nsnc").onchange = toggleSelect

    
    // Creo la secuencia para que compruebe si todo ha ido bien
    form.onsubmit = function(event) {
        // Hago que salte la siguiente alerta cuando no se introduce el nombre o el apellido
        event.preventDefault()
        if (!nameInput.value.trim() || !surnameInput.value.trim()) {
            alert("Nombre y Apellidos son obligatorios.")
            return
        }
        // Salta la siguiente alerta si supera los 80 caracteres
        if (descriptionInput.value.length > 80) {
            alert("La descripción no puede tener más de 80 caracteres.")
            return
        }
        submitButton.disabled = true
        form.submit()
    }

    toggleSelect()
    checkCheckboxes()
}
