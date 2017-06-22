

var Chifoumi = function () {

  var player1 = prompt("Au tour du joueur 1")
  var player2 = prompt("Au tour du joueur 2")

  if (player1 == player2) {return "Egalité"} // EGALITE

  if (player1 == "pierre" && player2 == "papier" || player1 == "ciseaux" && player2 == "pierre" || player1 == "papier" && player2 == "ciseaux")
  {return "Joueur 2 remporte avec " + player2 + "!"} // PLAYER2 GAGNE

  else {return "Joueur 1 remporte avec " + player1 + "!"} // PLAYER1 GAGNE


}

Chifoumi()
