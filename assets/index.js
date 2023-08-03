const form = document.getElementById('form')
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const password = document.getElementById('password')
const button = document.querySelector('#btn')


form.addEventListener('submit', function(ev) {
    ev.preventDefault()
    checkFirstName()
    checklastName()
    checkEmail()
    checkPassword()
})

function checkFirstName() {
    const firstNameValue = firstName.value

    if (firstNameValue === '') {
        //show error
        document.getElementsByClassName('error-firstName')[0].style.display = 'block'
        document.getElementById('firstName').style.borderColor = 'hsl(354, 100%, 66%)'
    } else {
        //hide error
        document.getElementsByClassName('error-firstName')[0].style.display = 'none'
        document.getElementById('firstName').style.borderColor = 'hsl(120, 100%, 31%)' 
    }
}

function checklastName() {
    const lastNameValue = lastName.value

    if (lastNameValue === '') {
        //show error div
        document.getElementsByClassName('error-lastName')[0].style.display = 'block'
        document.getElementById('lastName').style.borderColor = 'hsl(354, 100%, 66%)'
    } else {
        //hide error div
        document.getElementsByClassName('error-lastName')[0].style.display = 'none'
        document.getElementById('lastName').style.borderColor = 'hsl(120, 100%, 31%)' 
    }
}

function checkEmail() {
    const emailValue = email.value
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(emailValue)) {
        //hide error div
        document.getElementsByClassName('error-email')[0].style.display = 'none'
        document.getElementById('email').style.borderColor = 'hsl(120, 100%, 31%)'

    } else {
        //show error div
        document.getElementsByClassName('error-email')[0].style.display = 'block'
        document.getElementById('email').style.borderColor = 'hsl(354, 100%, 66%)'
    }
}

function checkPassword() {
    const passwordValue = password.value

    if (passwordValue.length < 7) {
        //show error div
        document.getElementsByClassName('error-password')[0].style.display = 'block'
        document.getElementById('password').style.borderColor = 'hsl(354, 100%, 66%)'
    } else {
        //hide error div
        document.getElementsByClassName('error-password')[0].style.display = 'none'
        document.getElementById('password').style.borderColor = 'hsl(120, 100%, 31%)'
    }
}

button.addEventListener('click', function() {
    let check = document.getElementById('check')
    let textCheck = document.getElementById('textCheck')

    if (firstName.value !== '' && lastName.value !== '' && password.value.length >= 7) {
        form.style.display = 'none'
        check.style.display = 'block'
        textCheck.innerHTML = `Welcome ${firstName.value}, we are happy to have you here.`
    } else {
        form.style.display = 'block'
        check.style.display = 'none'
    }
})
