function Uran238_Cal() {
    // E - Erfassen
    var u238_start = document.getElementById("u238_t1").value;
    var u238_end = document.getElementById("u238_t2").value;
    //V - Verarbeiten
    if (Number(u238_start) < 0) {
      alert(
        "Der Ursprungswert des Uran-238 ist negativ, Lösung somit ungültig!"
      );
    }
    if (Number(u238_end) < 0) {
      alert(
        "Der Jetztige wert des Uran-238 ist negativ, Lösung somit ungültig!"
      );
    }
    // formel: return (-1 / 0.000000000155125) * Math.log(u238_t2 / u238_t1);
    var solution = (-1 / 0.000000000155125) * Math.log(Number(u238_end) / Number(u238_start));
    Formattieren(solution);
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
    }
    if (Number(u235_end) < 0) {
      alert(
        "Der Jetztige wert des Uran-235 ist negativ, Lösung somit ungültig!"
      );
    }
    // test
    var solution = (-1 / 0.00000000098485) * Math.log(Number(u235_start) / Number(u235_end));
    Formattieren(solution);
    document.getElementById("u238_sol").innerHTML = solution;
  }

  function Formattieren(solution) {
    if (solution >= 1000000000000) {
        solution = (solution / 1000000000000).toFixed(6) + "Bil";
        return solution;
    }
    else if (solution >= 1000000000) {
        solution = (solution / 1000000000).toFixed(3) + "Mrd";
        return solution;
    } 
    else if (solution >= 1000000) {
        solution = (solution / 1000000).toFixed(1) + "Mil";
        return solution;
    }
  }