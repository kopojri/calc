function solveExpression() {
  var vyraz = document.getElementById("vyraz").value;
  /*

      Dobrý den. Tady se realizujte. Děkuji.

  */

  const performCalculation = {
    "/": (firstOperand, secondOperand) => firstOperand / secondOperand,

    "*": (firstOperand, secondOperand) => firstOperand * secondOperand,

    "+": (firstOperand, secondOperand) => firstOperand + secondOperand,

    "-": (firstOperand, secondOperand) => firstOperand - secondOperand,

    "%": (firstOperand, secondOperand) => firstOperand % secondOperand,

    "=": (firstOperand, secondOperand) => secondOperand
  };

  document.getElementById("vysledek").innerHTML = "Výsledek je: " + vyraz;
}

var input = document.getElementById("vyraz");

// Spustí funkci, když uživatel zmáčkne Enter
input.addEventListener("keyup", function(event) {
  // Zruší výchozí funkci klávesy, pokud nějaká existuje
  event.preventDefault();
  // 13 je hodnota klávesy Enter
  if (event.keyCode === 13) {
    solveExpression();
  }
});
