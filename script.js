// script.js

// Funktion for at sende brugerinput til GPT-assistenten
function askGPT(userInput) {
    // Erstatt nedenstående URL med det rigtige API-endepunkt fra OpenAI
    const apiUrl = 'https://eksempel.com/api/gpt';

    // Send brugerinput til GPT-assistenten
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input: userInput }),
    })
    .then(response => response.json())
    .then(data => {
        // Vis svaret fra GPT-assistenten
        displayResponse(data.output);
    })
    .catch(error => {
        console.error('Fejl ved kommunikation med GPT-assistenten:', error);
    });
}

// Funktion for at vise GPT-assistentens svar på websiden
function displayResponse(response) {
    // Erstat dette med koden for at vise svaret på din webside
    console.log('GPT-assistentens svar:', response);
}

// Lyt efter brugerinput fra HTML-formen
document.getElementById('userInputForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Hent brugerinput fra inputfeltet
    const userInput = document.getElementById('userInput').value;

    // Send brugerinput til GPT-assistenten og vis svaret
    askGPT(userInput);
});
