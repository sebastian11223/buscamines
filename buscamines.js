let matrix = [];
var columna;
function CreaTaula() {

      x = document.getElementById("X").valueAsNumber;
      y = document.getElementById("Y").valueAsNumber;

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



function paintAll() {
   for (let i =0; i < matrix.length ; i++) { // files
       for (let j = 0; j < matrix[i].length ;j++ ) { // columnes
           matrix[i][j].style.backgroundColor = "red";
       }
   }
}

function paintCheckerboard() {

  for (let i = 0; i < matrix.length; i+=2) { // afegir codi
      for (let j = 0; j < matrix[i].length; j+=2) { // afegir codi
 
          matrix[i][j].style.backgroundColor = "red";
      }
  }
  for (let y = 1; y < matrix.length; y+=2) {
      for (let e = 1; e < matrix[y].length; e+=2) {
          matrix[y][e].style.backgroundColor = "red";
      }
  }
  let rows = document.querySelector("tbody").children
 
  for (var i = 0; i < rows.length; i++) {
      matrix.push(rows[i].children)
  }
 
}


 function matriuBinaria(matrix) {
    var matrix2 =[];
   for (var i = 0; i < matrix.length; i++) {
      let files = [];
       for (var j = 0; j < matrix[0].length; j++) {
           if (matrix[i][j].style.backgroundColor == "red"){
                files.push(1);

          }else {
            files.push(0);
          }
       }
       matrix2.push(files)
   } 
    return matrix2;
 }


