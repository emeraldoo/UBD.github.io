function Uran238_Cal() {
    // E - Erfassen
    var u238_start = document.getElementById("u238_t1").value;
    var u238_end = document.getElementById("u238_t2").value;
    //V - Verarbeiten
    if  (Number(u238_start) < 0) {
        alert("Der Ursprungswert des Uran-238 ist negativ, Lösung somit ungültig!");
    }
    else if (Number(u238_end) < 0) {
        alert("Der Jetztige wert des Uran-238 ist negativ, Lösung somit ungültig!");
    }
}

function Uran235_Cal() {
    // E - Erfassen
    var u235_start = document.getElementById("u235_t1").value;
    var u235_end = document.getElementById("u235_t2").value;
    //V - Verarbeiten
    if  (Number(u235_start) < 0) {
        alert("Der Ursprungswert des Uran-235 ist negativ, Lösung somit ungültig!");
    }
    else if (Number(u235_end) < 0) {
        alert("Der Jetztige wert des Uran-235 ist negativ, Lösung somit ungültig!");
    }
}
