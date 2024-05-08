function Uran238_Cal() {
    // E - Erfassen
    var u238_start = document.getElementById("u238_t1").value;
    var u238_end = document.getElementById("u238_t2").value;
    //V - Verarbeiten
    if  (Number(u238_start) < 0) {
        alert("Der Ursprungswert des Uran-238 ist negativ, Lösung somit ungültig!");
    }
    if (Number(u238_end) < 0) {
        alert("Der Jetztige wert des Uran-238 ist negativ, Lösung somit ungültig!");
    }
    // formel: return (-1 / 4'468'000'000) * Math.log(u238_t2 / u238_t1);
    var solution = (-1 / 4468000000) * Math.log(u238_end / u238_start);
    document.getElementById("u238_sol").innerHTML = solution;
}

function Uran235_Cal() {
    // E - Erfassen
    var u235_start = document.getElementById("u235_t1").value;
    var u235_end = document.getElementById("u235_t2").value;
    //V - Verarbeiten
    if  (Number(u235_start) < 0) {
        alert("Der Ursprungswert des Uran-235 ist negativ, Lösung somit ungültig!");
    }
    if (Number(u235_end) < 0) {
        alert("Der Jetztige wert des Uran-235 ist negativ, Lösung somit ungültig!");
    }
    var solution = (-1 / 703800000) * Math.log(u238_start / u238_end);
    document.getElementById("u238_sol").innerHTML = solution;

}
