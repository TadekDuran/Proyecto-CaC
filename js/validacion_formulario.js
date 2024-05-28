function validar(){
    let form = document.form
    let checkboxes = document.querySelectorAll('input[type="checkbox"][name="movilidad"]');
    let checked = false;
    
    if (form.nombre.value == "") {
        alert('Ingresa tu nombre');
        form.nombre.value = "";
        form.nombre.focus();
        return false;
    }

    if (form.apellido.value == "") {
        alert('Ingresa tu apellido');
        form.apellido.value = "";
        form.apellido.focus();
        return false;
    }

    if (form.provincia.value == "") {
        alert('Ingresa tu provincia de residencia');
        form.provincia.value = "";
        form.provincia.focus();
        return false;
    }

    for (let i = 0; i<checkboxes.length; i++) {
        if(checkboxes[i].checked){
            checked = true;
        break;
        }
    }

    if (checkboxes[3].checked && (checkboxes[2].checked || checkboxes[1].checked || checkboxes[0].checked)) {
        alert('Seleccioná una combinación válida');
        return false;
    }

    if (!checked) {
        alert('Selecciona al menos una opción de movilidad.');
        return false;
    }
    
    //Validación comentada para que no entre en conflicto con Formspree
    /*if (form.cv.value == "") {
        alert('Carga tu cv')
        form.cv.value = ""
        form.cv.focus()
        return false
    }*/

    if (form.text_area.value == "") {
        alert('Completá este campo por favor');
        form.text_area.value = "";
        form.text_area.focus();
        return false;
    }
    form.submit()
}