function verTablas(turnoElegido, mtzAlumnos)
{
    orden=0;

    t01 = "<table>";
    t01 += "<tr>";
    t01 += "<th class='titulo' colspan='3'>Datos personales</th>";
    t01 += "</tr>";
    t01 += "<tr>";
    t01 += "<th>No.</th> <th>Apellidos y Nombres</th> <th>Genero</th>";
    t01 += "</tr>";

    if(mtzAlumnos.length > 0){
        for (var i = 0; i < mtzAlumnos.length; i++) {
            //mtzGenero = mtzAlumnos[i][4];     //Genero
             turnoMtz = mtzAlumnos[i][3];        //Turno
            if(turnoMtz == turnoElegido){
                orden++;
                apeNom = mtzAlumnos[i][2] +", "+ mtzAlumnos[i][1];  //[i][4] es para ubicar la posicion del elemento en una lista
                genero = fnGenero(mtzAlumnos[i][4]);

                t01 += "<tr>";
                t01 += "<td>"+orden+"</td> <td>"+apeNom+"</td> <td>"+genero+"</td>";
                t01 += "</tr>";
            }
        }
    }

    t01 += "<table>";
    document.getElementById("marco").innerHTML = t01;

  if (turnoElegido=="") {
    document.getElementById("marco").innerHTML = "Resultado aqui..."
  }
}
 
function fnGenero(xGenero){      //xGenero = mtzAlumnos[i][4] esto aplica por que arriba ya creo la funcion fnGenero con parametro.
    if(xGenero=="M"){
        return "Masculino";
    } else if(xGenero == "F"){
        return "Femenino"
    }
	
}

function borrarMarco(){
    document.getElementById("marco").innerHTML = "Resultado borrado..."
	
}
