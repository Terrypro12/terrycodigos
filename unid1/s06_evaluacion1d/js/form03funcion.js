function fnGenerarTabla(res,num,nom,ape,turno,genero)
{
    document.write("<table>");
        document.write("<tr>");
            document.write("<th class='titulo' colspan='4'>Datos personales "+res+"</th>");
        document.write("</tr>");
        document.write("<tr>");
            document.write("<td id='tdIzq'>Nombres:</td>");
            document.write("<td rowspan='4'><img src='img/f"+num+".jpg'></td>");
            document.write("<td id='tdIzq'>Turno:</td>");
        document.write("</tr>");
        document.write("<tr>");
            document.write("<td id='tdDer'>"+nom+"</td>")
            document.write("<td id='tdDer'>"+turno+"</td>");
        document.write("</tr>");
        document.write("<tr>");
            document.write("<td id='tdIzq'>Apellidos:</td>")
            document.write("<td id='tdIzq'>Genero:</td>")
        document.write("</tr>");
        document.write("<tr>");
            document.write("<td id='tdDer'>"+ape+"</td>");
            document.write("<td id='tdDer'>"+genero+"</td>");
        document.write("</tr>")
    document.write("</table> <br>");
}

function fnTurno(turno) /*Funcion para retornar o imprimir entre M o N segun el valor que tenga turno (case=caso)*/
{
    switch(turno)
    {
        case 'M': return "Dia";
        case 'N': return "Noche";
    }
}
function fnGenero(genero) /*Funcion para retornar o imprimir M o F segun el valor que tenga turno (case=caso)*/
{
    switch(genero)
    {
        case 'M': return "Masculino";
        case 'F': return "Femenino";
    }
}