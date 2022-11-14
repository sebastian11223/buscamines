Ara ja tenim el taulell del joc. A continuació hi posarem mines.

Per tal de guardar la **posició de les mines** farem servir una **variable global** anomenada `mines` que serà una **matriu binaria** amb:

 - 1 a les posicions amb mines
 - 0 a les posicions sense mines.


# Exercici 1

Feu una funció anomenada `inicialitzaMines`  que l'hi passis els paràmetres:

- nMines: nombre de mines
- midaX: Mida de la matriu horitzontal.
- midaY: Mida de la matriu vertical

i  **retorni** una matriu de `midaX` per `midaY` amb tantes mines com indicades pel paràmetre `nMines` posades de manera aleatòria.

# Exercici 2

Feu que la funció `inicialitzaMines` es cridi quan premem el botó de començar el joc i que ompli la variable global mines.

# Exercici 3

Poseu un color diferent a les cel·les que continguin mines per tal de visualitzar que funcioni correctament.