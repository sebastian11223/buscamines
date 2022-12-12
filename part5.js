var columna;
let matrix = [];
// Obtenemos la referencia del elemento body
var body = document.getElementsByTagName("body")[0];
body.style.backgroundColor = "rgb(86 100 120)";

var tabla = document.createElement("table");
var tblBody = document.createElement("tbody");
function CreaTaula() {

     let x = document.getElementById("X").valueAsNumber;
     let y = document.getElementById("Y").valueAsNumber;


// Creamos un elemento <table> y un elemento <tbody>

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
 
      

}
  ///////////////////// FUNCION COORDENADAS 
        //añadimos click en las celdas para que reconozca donde se la clicado
        //despues añadimos la funcion coordenadas donde obtendremos las coordenadas
        tblBody.addEventListener("click", coordenadas);
        tblBody.addEventListener("click", paintAllNeighbours);
        
        //tblBody.addEventListener("click", puntuacion);
    
        /////////////////////

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
               
                    matrix[a][b].addEventListener("click", function (){
                        if (mina[a][b] == 1) {
                            matrix[a][b].style.backgroundColor = "red";
                            matrix[a][b].innerHTML = '<i class="fa-solid fa-bomb" style="color: black; margin-left: 40%; margin-right: 60%; "></i>';

                        }

                        
                    });
       }         
    }        
}




//funcion contar vecinos
function countNeighbours(x,y) {
 
    let count = 0;
  
    for (let i = y-1; i<= y+1; i++ ) {
        for (let j = x-1; j<= x+1; j++) {
            try {
                if(i==x && j==y){
                    //count++;
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
            if (matrix[j][i].style.backgroundColor == "red") {
                matrix[j][i].innerText = null;
                matrix[j][i].innerHTML = '<i class="fa-solid fa-bomb" style="color: black; margin-left: 40%; margin-right: 60%; "></i>';
                //matrix[j][i].style.backgroundColor = "green";
            }else if (matrix[j][i].innerHTML == '<i class="fa-solid fa-flag" style="color: yellow; margin-left: 40%; margin-right: 60%;"></i>') {
                matrix[j][i].innerText = count;
                matrix[j][i].innerHTML = '<i class="fa-solid fa-flag" style="color: yellow; margin-left: 40%; margin-right: 60%;"></i>';
            }
            else {
                matrix[j][i].style.backgroundColor = "blue";
                matrix[j][i].innerText = count;
            }
        }
    } 
}







//////////////////////////////////////////////////////////////////////////////////////
//funcion meter banderitas con click derecho
//bloqueamos en menu predeterminado del boton derecho y añadimos la funcion para que aparezcan banderas
    document.oncontextmenu = rightClick;
    //document.oncontextmenu = destapar;
    //document.onclick = puntuacion;
    function rightClick(clickEvent) {
        let x = event.target.id.split(' ')[1];
        let y = event.target.id.split(' ')[0];
        clickEvent.stopPropagation();
        clickEvent.preventDefault(); 
       
        if (mina[x][y] == 0 || mina[x][y] == 1 && mina[x][y].innerHTML != '<i class="fa-solid fa-flag" style="color: yellow; margin-left: 40%; margin-right: 60%;"></i>'){
                //matrix[x][y].style.backgroundColor = "green";   
                matrix[x][y].innerHTML = '<i class="fa-solid fa-flag" style="color: yellow; margin-left: 40%; margin-right: 60%;"></i>';   
                
            }
                
            }
        

     
                    
  

        
    
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//parte 5 (añadido)
//funcion que devuelve las coordenadas
function coordenadas(event) {
    //split para determinar lo que separa los elementos
    let x = event.target.id.split(' ')[1];
    let y = event.target.id.split(' ')[0];

    if (event.target.tagName == "TD") {
        //con event.target.id obtenemos las coordenadas
        console.log(event.target.id);
    }
//mina[x][y] == 1
    if (matrix[x][y].style.backgroundColor == "red") {
        clearInterval(tiempo);
        swal.fire({
            title: "¡MINA ENCONTRADA!, HAS PERDIDO" + "\n" + "Presiona aceptar para jugar de nuevo",
            confirmButtonText: "Aceptar", 
            confirmButtonColor: "green",
            width: "50%",
            DenyButtonText: "Seguir",
            showDenyButton: true
        }).then(response => {
            if (response.isConfirmed) {
                location.reload();
            }else if(response.isDenied) {
               
                tblBody.removeEventListener("click", coordenadas, false);
                tblBody.removeEventListener("click", paintAllNeighbours, false);
                //desactivar hacer banderas al peder
                document.oncontextmenu = null;
                clearInterval(tiempo);
                
                
            }
              
        });
    }
    else {
        return console.log("No hay mina");
    }
    cuadro.innerHTML = n-1;
}

///////////

////////////////////////////////////////////
var tiempo;
var n = 0;
function iniciarJuego() {
        //cuadro
        
        CreaTaula();
        inicialitzaMines();
        //puntuacion
        var puntos = 0;   
        //temporizador
           
           var mil = 1000;
           var l = document.getElementById("reloj");
        
           
                tiempo =  setInterval(function(){
                    l.innerHTML = n; n++;}, 1000);       
                    puntos = n;
                   
                  
}
    


var cuadro = document.getElementById("cuadroPUNTUACION");
function pararJuego(){

    
    for (let i = 0; i < matrix.length; i++ ) { 
        for (let j = 0; j < matrix[i].length; j++) { 
            //matrix[i][j].style.backgroundColor = "black";
             if (matrix[i][j].style.backgroundColor == "blue") {
                //return alert("hola que tal");
                swal.fire({
                    title: "¡HAS GANADO!",
                    confirmButtonText: "jugar de nuevo", 
                    confirmButtonColor: "green",
                    width: "50%",
                    DenyButtonText: "seguir sin jugar",
                    showDenyButton: true
                }).then(response => {
                    if (response.isConfirmed) {
                        location.reload();
                    }else if(response.isDenied) {
                       
                        tblBody.removeEventListener("click", coordenadas, false);
                        tblBody.removeEventListener("click", paintAllNeighbours, false);
                        //desactivar hacer banderas al peder
                        document.oncontextmenu = null;
                                    
                        
                        
                    }
                      
                });
            
                
                }else if (matrix[i][j].style.backgroundColor != "blue"){
                    swal.fire({
                        title: "¡HAS PERDIDO! Tu puntuación ha sido de " + n-1,
                        confirmButtonText: "jugar de nuevo", 
                        confirmButtonColor: "green",
                        width: "50%",
                        DenyButtonText: "seguir sin jugar",
                        showDenyButton: true
                    }).then(response => {
                        if (response.isConfirmed) {
                            location.reload();
                        }else if(response.isDenied) {
                           
                            tblBody.removeEventListener("click", coordenadas, false);
                            tblBody.removeEventListener("click", paintAllNeighbours, false);
                            //desactivar hacer banderas al peder
                            document.oncontextmenu = null;
                                        
                            
                            
                        }
                          
                    }); 
                }
            }
        }
        
        clearInterval(tiempo);
        cuadro.innerHTML = n-1;
    }       



//recorrer matriz







// function juegosperdido(event) {
    
//     return alert("¡has perdido!");
// }



//refrescar la pagina
let refresh = document.getElementById('refresh');
refresh.addEventListener('click', _ => {
            location.reload();
})
//para habilitar el boton derecho del ratón 
//javascript:void(document.oncontextmenu=null);



////////////////////////////////////////////
