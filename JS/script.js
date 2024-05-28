function Uran238_Cal() {
  // E - Erfassen
  var u238_start = document.getElementById("uran238_t1").value;
  var u238_end = document.getElementById("uran238_t2").value;
  //V - Verarbeiten
  if (Number(u238_start) < 0) {
    alert(
      "Der Ursprungswert des Uran-238 ist negativ, Lösung somit ungültig!"
    );
    return;
  }
  if (Number(u238_end) < 0) {
    alert(
      "Der jetzige Wert des Uran-238 ist negativ, Lösung somit ungültig!"
    );
    return;
  }
  // Formel: return (-1 / 0.000000000155125) * Math.log(u238_t2 / u238_t1);
  var solution =
    (1 / 0.000000000155125) *
    Math.log(Number(u238_start) / Number(u238_end));
  solution = Formattieren(solution);
  document.getElementById("u238_sol").innerHTML = solution;
}

function Uran235_Cal() {
  // E - Erfassen
  var u235_start = document.getElementById("u235_t1").value;
  var u235_end = document.getElementById("u235_t2").value;
  //V - Verarbeiten
  if (Number(u235_start) < 0) {
    alert(
      "Der Ursprungswert des Uran-235 ist negativ, Lösung somit ungültig!"
    );
    return;
  }
  if (Number(u235_end) < 0) {
    alert(
      "Der jetzige Wert des Uran-235 ist negativ, Lösung somit ungültig!"
    );
    return;
  }
  var solution =
    (1 / 0.00000000098485) * Math.log(Number(u235_start) / Number(u235_end));
  solution = Formattieren(solution);
  document.getElementById("u235_sol").innerHTML = solution;
}
function Uran235Decay_Cal() {
  // E - Erfassen
  var u235_decay = document.getElementById("ud235_t2").value;
  //V - Verarbeiten
  if (Number(u235_decay) < 0) {
    alert("Der Angegebene Wert ist Negativ; Lösung ungültig!");
    return;
  }
  var solution = (-1 / 0.00000000098485) * Math.log(0.1 * Number(u235_decay));
  solution = Formattieren(solution);
  docu
function Uran238Decay_Cal() {
  // E - Erfassen
  var u238_decay = document.getElementById("ud238_t2").value;
  //V - Verarbeiten
  if (Number(u238_decay) < 0) {
    alert("Der Angegebene Wert ist Negativ; Lösung ungültig!");
    return;
  }
  var solution = (-1 / 0.00000000098485) * Math.log(0.1 * Number(u235_decay));
  solution = Formattieren(solution);
  document.getElementById("ud238_sol").innerHTML = solution;
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