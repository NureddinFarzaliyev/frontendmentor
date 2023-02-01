const adviceDiv = document.getElementsByClassName('advice')[0];
const adviceIdDiv = document.getElementsByClassName('advice-id')[0];
const button = document.getElementsByClassName('dice')[0];
const adviceUrl = 'https://api.adviceslip.com/advice';

fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then(
        function adviceWrite(data) {
            adviceDiv.innerHTML = '"' + data.slip.advice + '"';
            adviceIdDiv.innerHTML = 'ADVICE #' + data.slip.id;
        }
    )

button.addEventListener('click', () => {
    fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then(
            function adviceWrite(data) {
                adviceDiv.innerHTML = '"' + data.slip.advice + '"';
                adviceIdDiv.innerHTML = 'ADVICE #' + data.slip.id;
            }
        )
})

    .then((data) => adviceDiv.innerHTML = '"' + data.slip.advice + '"')