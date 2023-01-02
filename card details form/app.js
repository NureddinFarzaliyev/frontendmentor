// Card elements
const cardNumber = document.getElementsByClassName('card-number')
const cardName = document.getElementsByClassName('card-name')
const cardExp = document.getElementsByClassName('card-exp')

// Input elements
const inputNumber = document.getElementsByClassName('number')
const inputName = document.getElementsByClassName('name')
const inputMonth = document.getElementsByClassName('month')
const inputYear = document.getElementsByClassName('year')

setInterval(() => {
    let name = inputName[0].value
    let number = inputNumber[0].value
    let month = inputMonth[0].value
    let year = inputYear[0].value

    if(name != ''){
        cardName[0].innerHTML = name
    }
    if(number != ''){
        cardNumber[0].innerHTML = number
    }
    if(month != '' && year != ''){
        exp = month + '/' + year;
        cardExp[0].innerHTML = exp;
    }
}, 100);