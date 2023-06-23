function verTablas(turnoElegido, generoElegido, mtzAlumnos) {
    var orden = 0;
    var t01 = "<table>";
    t01 += "<tr>";
    t01 += "<th class='titulo' colspan='3'>Datos personales</th>";
    t01 += "</tr>";
    t01 += "<tr>";
    t01 += "<th>No.</th> <th>Apellidos y Nombres</th> <th>Género</th>";
    t01 += "</tr>";

    if (mtzAlumnos.length > 0) {
        for (var i = 0; i < mtzAlumnos.length; i++) { //i=contador Es un salto entre los elementos de la lista. Asi revisa lo que tiene ubicandolos por posiciones que empieza desde 0.
            var turnoMtz = mtzAlumnos[i][3]; // Turno
            var generoMtz = mtzAlumnos[i][4]; // Género

            if ((turnoMtz === turnoElegido || turnoElegido === "") && (generoMtz === generoElegido || generoElegido === "")) {
                orden++;
                var apeNom = mtzAlumnos[i][2] + ", " + mtzAlumnos[i][1];
                var genero = fnGenero(generoMtz); // Es igual 

                t01 += "<tr>";
                t01 += "<td>" + orden + "</td> <td>" + apeNom + "</td> <td>" + genero + "</td>";
                t01 += "</tr>";
            }
        }
    }

    t01 += "</table>";
    document.getElementById("marco").innerHTML = t01;
}

function fnGenero(xGenero) { //xgenero = generoMtz ---porque hay una funcion arriba con el mismo nombre de la funcion.
    if (xGenero === "M") {
        return "Masculino";
    }if (xGenero === "F") {
        return "Femenino";
    } else {
        return "No especificado";
    }
}

function fnborrarMarco() {
    document.getElementById("marco").innerHTML = "Resultado borrado...";
}
