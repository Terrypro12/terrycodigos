function fnValidar02()
{
    let xNombre = document.getElementById("txtNombres").value;
    if (xNombre == "" || /^\s+$/.test(xNombre)) {
        alert("Escriba su nombre");
        return false;
    }

    let xApellido = document.getElementById("txtApellidos").value;
    if (xApellido == "" || /^\s+$/.test(xApellido)) {
        alert("Escriba su apellido");
        return false;
    }

    let xDireccion = document.getElementById("txtDireccion").value;
    if (xDireccion == "" || /^\s+$/.test(xDireccion)) {
        alert("Escriba su Direccion");
        return false;
    }

    let xEdad = document.getElementById("numEdad").value; /*"Declara una variable llamada xEdad y asígnale el valor actual del campo de entrada con el ID"*/
    if (xEdad == "" || /^\s+$/.test(xEdad)) { /* /^\s+$/.test=Testiar si hay espacios en blanco  */
        alert("Escriba su Edad");
        return false;
    }
    if (Number(xEdad)<1) {
        alert("Edad no existente");
        
        return false;
    }


    return true;   
}