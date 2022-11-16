// function inicialitzaMines() {

//    //FILAS 
//     x = document.getElementById("X").valueAsNumber;
//     //COLUMNAS
//     y = document.getElementById("Y").valueAsNumber;

//     let tabla = document.write("<table border>");
//     let resultado = x * y;
//     for (let i = 0; i < x; i++) {
//         //creamos las filas
//         let trs = document.write("<tr>");
//         for (let j = 0; j < y; j++ ) {
//             //creamos las columnas
//            let tds = document.write("<td>")
//             //imprimimos el valor de resultado 
//             let R = document.write(resultado);
           
           
//             //restamos 1 a resultado ya que comienza en 0
//             resultado --;
//             //cerramos el td de las columnas
//             tds = document.write("</td>");
//         }
//         //cerramos el tr de las filas
//         trs = document.write("</tr>");

//     }
//     //cerramos la tabla
//     tabla = document.write("</table>");
// }

var columna;
let matrix = [];
function CreaTaula() {

     let x = document.getElementById("X").valueAsNumber;
     let y = document.getElementById("Y").valueAsNumber;

   // Obtenemos la referencia del elemento body
var body = document.getElementsByTagName("body")[0];
// Creamos un elemento <table> y un elemento <tbody>
var tabla = document.createElement("table");
var tblBody = document.createElement("tbody");
// Creamos las celdas
for (var i = 0; i < y; i++) {
  // CREAMOS LAS FILAS
  var fila = document.createElement("tr");
  for (var j = 0; j < x; j++) {

    // var
    columna = document.createElement("td");
    //INTROCUCIR CONTENIDO EN LAS CELDAS
    columna.textContent = '0';
    //ESTILIZAR LA TABLA
    columna.style.border = "2px solid";
    columna.style.color = "grey";
    columna.style.width = "12%";

    fila.appendChild(columna);

  }
// agregamos la hilera al final de la tabla (al final del elemento tblbody)
tblBody.appendChild(fila);
}
// posicionamos el <tbody> debajo del elemento <table>
tabla.appendChild(tblBody);
// appends <table> into <body>
 body.appendChild(tabla);
 let rows = document.querySelector("tbody").children

 for (var i = 0; i < rows.length; i++) {
  matrix.push(rows[i].children)
}

}
//variable que genera minas
// var mines = Math.floor(Math.random()* 2-0)
 
let mina = [];  


function inicialitzaMines() {
    let numMinasEsparcidas = 0;
    let nMines = document.getElementById("NumeroMinas").valueAsNumber;
    let X = document.getElementById("X").valueAsNumber;
    let Y = document.getElementById("Y").valueAsNumber;
    for (let a = 0; a < X; a++) {
        mina[a] = [];
        for (let b = 0; b < Y; b++) {
            mina[a][b] = 0;  
        }
    }

    
    
     while (numMinasEsparcidas < nMines){
         
         let fila = Math.floor(Math.random() * Y);
 
         let columna = Math.floor(Math.random() * X);
 
         if (mina[fila][columna] == 0){
            
             mina[fila][columna] = 1; 
 
            
             numMinasEsparcidas++;
         }
     }


     for (let a = 0; a < X; a++) {
            for (let b = 0; b < Y; b++) {
                if (mina[a][b] == 1) {
                    matrix[a][b].style.backgroundColor = "red";
                }
            }
        }

}

        



