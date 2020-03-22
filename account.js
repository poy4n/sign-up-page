// inputs
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

const nextButton = document.querySelector('.next-btn');
const emailLabel = document.querySelector('#email + .label');
const passwordCount = document.querySelector('.password-count');
const eamilWarning = document.querySelector('.email-warning-hide');
const container = document.querySelector('.container');

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
    && email.value.includes('@') === true && email.value.includes('.com') === true 
    && password.value.length > 8) {
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

        eamilWarning.classList.remove('email-warning-hide');
        eamilWarning.classList.add('email-warning-show');
    } else {
        email.style.border = `1px solid ${lightGrey}`;
        emailLabel.style.color = `${labelGrey}`;
        
        eamilWarning.classList.remove('email-warning-show');
        eamilWarning.classList.add('email-warning-hide');
    }
}

// validate password
// this is added to red flag min requirements of the password when not met
const validatePassword = function() {
    if(password.value.length < 8) {
        passwordCount.style.color = `${warning}`;
    } else {
        passwordCount.style.color = `${labelGrey}`;
    }
}

// page count and dots to be dynamic and created in JS
// event listener added to next button to render next count
let page = document.createElement('p');
page.textContent = 'Step 1 of 3';
page.classList.add('page-count');
container.appendChild(page);

let dot1 = document.createElement('p');
dot1.textContent = '.';
dot1.classList.add('dot-dark');
page.appendChild(dot1);

let dot2 = document.createElement('p');
dot2.textContent = '.';
dot2.classList.add('dots');
page.appendChild(dot2);

let dot3 = document.createElement('p');
dot3.textContent = '.';
dot3.classList.add('dots');
page.appendChild(dot3);

const changePageNum = function() {
    page.textContent = 'Step 2 of 3';

    let dot1 = document.createElement('p');
    dot1.textContent = '.';
    dot1.classList.add('dots');
    page.appendChild(dot1);

    let dot2 = document.createElement('p');
    dot2.textContent = '.';
    dot2.classList.add('dot-dark');
    page.appendChild(dot2);
    
    let dot3 = document.createElement('p');
    dot3.textContent = '.';
    dot3.classList.add('dots');
    page.appendChild(dot3);
}

name.addEventListener('change', enableButton);
email.addEventListener('change', enableButton);
email.addEventListener('change', validateEmail);
password.addEventListener('change', enableButton);
password.addEventListener('change', validatePassword);
nextButton.addEventListener('click', changePageNum);