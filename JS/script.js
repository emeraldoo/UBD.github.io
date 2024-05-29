function UranDecay238_Cal() {
  // E - Erfassen
  var u238_decay = document.getElementById("udecay238_t2").value;
  //V - Verarbeiten
  if (u238_decay < 0) {
   alert("Der Angegebene Wert ist negativ; Resultat ungültig!")
 }
    var solution =
        (-4468000000 *
            Math.log(0.01 * Number(u238_decay)) /
            Math.log(2));
    if (solution < 0) {
        solution = solution * -1;
    } 
    solution = Formattieren(solution);
  document.getElementById("ud238_sol").innerHTML = solution;
}
function Uran238_Cal() {
  // E - Erfassen
  var u238_start = document.getElementById("uran238_t1").value;
  var u238_end = document.getElementById("uran238_t2").value;
  //V - Verarbeiten
  CheckIfBigger(u238_start, u238_end);
  // Formel: return (-1 / 0.000000000155125) * Math.log(u238_t2 / u238_t1);
    var solution =
        (-4468000000 *
            Math.log(Number(u238_end) /Number(u238_start)) /
            Math.log(2));
    solution = Formattieren(solution);
    
  document.getElementById("u238_sol").innerHTML = solution;
}
function Uran235_Cal() {
  // E - Erfassen
  var u235_start = document.getElementById("u235_t1").value;
  var u235_end = document.getElementById("u235_t2").value;
  //V - Verarbeiten
CheckIfBigger(u235_start, u235_end);
    var solution =
        (-703800000 *
            Math.log(Number(u235_end) /Number(u235_start)) /
            Math.log(2));
  solution = Formattieren(solution);
  document.getElementById("u235_sol").innerHTML = solution;
}
function UranDecay235_Cal() {
  // E - Erfassen
  var u235_decay = document.getElementById("ud235_t2").value;
  //V - Verarbeiten
  if (u235_decay < 0) {
   alert("Der Angegebene Wert ist negativ; Resultat ungültig!")
 }
    var solution =
        (-703800000 *
            Math.log(0.01 * Number(u235_decay)) /
            Math.log(2));
    if (solution < 0) {
        solution = solution * -1;
    } 
    solution = Formattieren(solution);
   document.getElementById("ud235_sol").innerHTML = solution;
}
function Formattieren(solution) {
  solution = Math.ceil(solution / 100000) * 100000;
  if (solution >= 1000000000000) {
    solution = (solution / 1000000000000).toFixed(6) + " Bil";
    return solution;
  } else if (solution >= 1000000000) {
    solution = (solution / 1000000000).toFixed(3) + " Mrd";
    return solution;
  } else if (solution >= 1000000) {
    solution = (solution / 1000000).toFixed(1) + " Mio.";
    return solution;
  } else {
    return solution; // Falls die Zahl kleiner als 1 Mio. ist
  }
}
  function CheckIfBigger(start, end) {
    if (start < 0) {
      alert("Der Ursprungswert ist negativ; Resultat ungültig!");
      stop();
    }
    else if (end < 0) {
      alert("Der Endwert ist negativ; Resultat ungültig!");
      stop();
    }
    else if (start > end) {
      alert("Der Endwert ist grösser als der Anfangswert; Resultat ungültig!")
      stop();
    }
  }
