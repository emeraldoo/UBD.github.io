const form = document.querySelector('form');
const alterElement = document.getElementById('alter');
const fehlermargeElement = document.getElementById('fehlermarge');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const uran238 = parseFloat(document.getElementById('uran238').value);
    const uran235 = parseFloat(document.getElementById('uran235').value);
    const blei206 = parseFloat(document.getElementById('blei206').value);
    const blei207 = parseFloat(document.getElementById('blei207').value);

    // Berechnung des Alters und der Fehlermarge hier einfügen
    // (z.B. mit Formeln aus Wikipedia)

    alterElement.textContent = alter; // Alter in Jahren
    fehlermargeElement.textContent = fehlermarge; // Fehlermarge in Jahren
});
