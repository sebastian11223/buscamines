var columna;
let matrix = [];
// Obtenemos la referencia del elemento body
var body = document.getElementsByTagName("body")[0];
body.style.backgroundColor = "rgb(86 100 120)";

function CreaTaula() {

     let x = document.getElementById("X").valueAsNumber;
     let y = document.getElementById("Y").valueAsNumber;


// Creamos un elemento <table> y un elemento <tbody>
var tabla = document.createElement("table");
var tblBody = document.createElement("tbody");
// Creamos las celdas
for (var i = 0; i < y; i++) {
  // CREAMOS LAS FILAS
  var fila = document.createElement("tr");
  for (var j = 0; j < x; j++) {

    // var
    columna = document.createElement("TD");
    //INTROCUCIR CONTENIDO EN LAS CELDAS
    columna.textContent = ' ';
    //ESTILIZAR LA TABLA
    columna.style.border = "2px solid";
    columna.style.color = "#ffdc08de";
    columna.style.backgroundColor = "green";
    columna.style.width = "80px";
    columna.style.height = "50px";
  
    columna.setAttribute("id",  j + " " + i);

    fila.appendChild(columna);

  }
// agregamos la hilera al final de la tabla (al final del elemento tblbody)
tblBody.appendChild(fila);
}
// posicionamos el <tbody> debajo del elemento <table>
tabla.appendChild(tblBody);
// appends <table> into <body>
 body.appendChild(tabla);
 
 //estilos
// tblBody.style.backgroundColor = "grey";
 tabla.style.marginLeft = "auto";       
 tabla.style.marginRight = "auto";
 


 let rows = document.querySelector("tbody").children

 for (var i = 0; i < rows.length; i++) {
  matrix.push(rows[i].children)
 }
 
        ///////////////////// FUNCION COORDENADAS 
        //añadimos click en las celdas para que reconozca donde se la clicado
        //despues añadimos la funcion coordenadas donde obtendremos las coordenadas
        tblBody.addEventListener("click", coordenadas);
        tblBody.addEventListener("click", paintAllNeighbours);
        
        /////////////////////

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
                 if (mina[a][b] == 1 ) {
                     matrix[a][b].style.backgroundColor = "red";
                 } 
            }
        }
        
}


//funcion que devuelve las coordenadas
function coordenadas(event) {
    //split para determinar lo que separa los elementos
    let x = event.target.id.split(' ')[1];
    let y = event.target.id.split(' ')[0];

    if (event.target.tagName == "TD") {
        //con event.target.id obtenemos las coordenadas
        console.log(event.target.id);
    }

    if (mina[x][y] == 1) {
         alert("¡¡¡¡¡BOOOOM!!!!!");
        //mina[x][y].style.backgroundColor = "red";
    }
    else {
        return console.log("No hay mina");
    }
}

//funcion contar vecinos
function countNeighbours(x,y) {
 
    let count = 0;
  
    for (let i = y-1; i<= y+1; i++ ) {
        for (let j = x-1; j<= x+1; j++) {
            try {
                if(i==x && j==y){

                }
            else if (matrix[i][j].style.backgroundColor == "red") {
                count++;
            }
            } catch {

            }
        }
    }
            
     return count; 
}




//pintar todos los vecinos 
function paintAllNeighbours(event) {
    let x = parseInt(event.target.id.split(' ')[0]);
    let y = parseInt(event.target.id.split(' ')[1]);
    for (let i = x-1; i<= x+1; i++ ) {
        for (let j = y-1; j<= y+1; j++) {
            count = countNeighbours(i,j); 
            matrix[j][i].innerText = count;
            matrix[j][i].style.backgroundColor = "blue";
            
        }
    }
       
}


////////////////////////////////////////////


////////////////////////////////////////////