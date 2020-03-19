
// // inputs
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

const nextButton = document.querySelector('.next-btn');
const emailLabel = document.querySelector('#email + .label');
const passwordCount = document.querySelector('.password-count');
const eamilWarning = document.querySelector('.email-warning');


// colors
const secondaryColor = '#276ef9';
const darkGrey = '#333333';
const lightGrey = '#ededed';
const whiteGrey = '#ffffff';
const labelGrey = '#a1a1a1';
const warning = '#f53d3b';

// dynamic functions
const onBlur = function(event) {
    if(event.target.value.trim()) {
        event.target.classList.add('dynamic');
    } else {
        event.target.classList.remove('dynamic');
    }
}

// enable button
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