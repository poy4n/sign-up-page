// inputs
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

const nextButton = document.querySelector('.next-btn');
const emailLabel = document.querySelector('#email + .label');
const passwordCount = document.querySelector('.password-count');
const eamilWarning = document.querySelector('.email-warning');

// colors code are taken from config scss file
const secondaryColor = '#276ef9';
const darkGrey = '#333333';
const lightGrey = '#ededed';
const whiteGrey = '#ffffff';
const labelGrey = '#a1a1a1';
const warning = '#f53d3b';

// if input is not empty keep the label on border
const onBlur = function(event) {
    if(event.target.value.trim()) {
        event.target.classList.add('dynamic');
    } else {
        event.target.classList.remove('dynamic');
    }
}

// enable the button
// instead of using classList - add/remove class to button
// updating the button is done in js
nextButton.disabled = true;
nextButton.style.background = lightGrey;
nextButton.style.color = darkGrey;

const enableButton = function() {
    if(name.value !== '' && email.value !== '' && password.value !== '' 
    && email.value.includes('@') === true && password.value.length > 8) {
        nextButton.style.background = secondaryColor;
        nextButton.style.color = whiteGrey;
        nextButton.disabled = false;
    } 
}

// validate email address
// this block displays the warning to the user in case '@' is missing as per the task
// in-built input type 'email' validate the string to make sure it is a valid email address once button is pressed
const validateEmail = function() {
    if(email.value !== '' && email.value.includes('@') === false) {
        email.style.border = `1px solid ${warning}`;
        emailLabel.style.color = `${warning}`;

        eamilWarning.classList.remove('email-warning');
        eamilWarning.classList.add('email-warning-show');
    } else {
        email.style.border = `1px solid ${labelGrey}`;
        emailLabel.style.color = `${labelGrey}`;
        
        eamilWarning.classList.remove('email-warning-show');
        eamilWarning.classList.add('email-warning');
    }
}

// validate password
const validatePassword = function() {
    if(password.value.length < 8) {
        passwordCount.style.color = `${warning}`;
    } else {
        passwordCount.style.color = `${labelGrey}`;
    }
}

name.addEventListener('change', enableButton);
email.addEventListener('change', enableButton);
email.addEventListener('change', validateEmail);
password.addEventListener('change', enableButton);
password.addEventListener('change', validatePassword);