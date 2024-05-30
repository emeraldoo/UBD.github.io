function toggleDropdown() {
  document.getElementById("dropdownMenu").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function toggleQRCode() {
  var qrOverlay = document.getElementById("qrOverlay");
  qrOverlay.classList.toggle("show");
}

function UranDecay238_Cal() {
  var u238_decay = document.getElementById("udecay238_t2").value;
  document.getElementById("ud238_sol").innerHTML = "-";
  if (Number(u238_decay) < 0) {
    alert("Der Angegebene Wert ist negativ!");
  } else if (Number(u238_decay) > 100) {
    alert("Der Angegebene Wert darf nicht grösser als 100 sein!");
  } else {
    var solution = (-4468000000 * Math.log(0.01 * Number(u238_decay)) / Math.log(2));
    solution = Formattieren(solution);
    document.getElementById("ud238_sol").innerHTML = solution;
  }
}

function Uran238_Cal() {
  var u238_start = document.getElementById("uran238_t1").value;
  var u238_end = document.getElementById("uran238_t2").value;
  document.getElementById("u238_sol").innerHTML = "-";
  if (Number(u238_start) < 0) {
    alert("Der Ursprungswert ist negativ!");
    stop();
  } else if (Number(u238_end) < 0) {
    alert("Der Endwert ist negativ!");
    stop();
  } else if (Number(u238_end) > Number(u238_start)) {
    alert("Der Endwert ist grösser als der Anfangswert!");
    stop();
  } else {
    var solution = (-4468000000 * Math.log(Number(u238_end) / Number(u238_start)) / Math.log(2));
    solution = Formattieren(solution);
    document.getElementById("u238_sol").innerHTML = solution;
  }
}

function Uran235_Cal() {
  var u235_start = document.getElementById("u235_t1").value;
  var u235_end = document.getElementById("u235_t2").value;
  document.getElementById("u235_sol").innerHTML = "";
  if (Number(u235_start) < 0) {
    alert("Der Ursprungswert ist negativ!");
    stop();
  } else if (Number(u235_end) < 0) {
    alert("Der Endwert ist negativ!");
    stop();
  } else if (Number(u235_end) > Number(u235_start)) {
    alert("Der Endwert ist grösser als der Anfangswert!");
    stop();
  } else {
    var solution = (-703800000 * Math.log(Number(u235_end) / Number(u235_start)) / Math.log(2));
    solution = Formattieren(solution);
    document.getElementById("u235_sol").innerHTML = solution;
  }
}

function UranDecay235_Cal() {
  var u235_decay = document.getElementById("ud235_t2").value;
  document.getElementById("ud235_sol").innerHTML = "-";
  if (Number(u235_decay) < 0) {
    alert("Der Angegebene Wert ist negativ!");
  } else if (Number(u235_decay) > 100) {
    alert("Der Angegebene Wert darf nicht grösser als 100 sein!");
  } else {
    var solution = (-703800000 * Math.log(0.01 * Number(u235_decay)) / Math.log(2));
    solution = Formattieren(solution);
    document.getElementById("ud235_sol").innerHTML = solution;
  }
}

function Formattieren(solution) {
  solution = Math.ceil(solution / 100000) * 100000;
  if (solution >= 1000000000000) {
    solution = (solution / 1000000000000).toFixed(6) + " Bil.";
    return solution;
  } else if (solution >= 1000000000) {
    solution = (solution / 1000000000).toFixed(3) + " Mrd.";
    return solution;
  } else if (solution >= 1000000) {
    solution = (solution / 1000000).toFixed(1) + " Mio.";
    return solution;
  } else {
    return solution; // Falls die Zahl kleiner als 1 Mio. ist
  }
}
