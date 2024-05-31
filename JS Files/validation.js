const form = document.getElementById('form');
const username = document.getElementById('nameInput');
const password = document.getElementById('pwInput');
const password2 = document.getElementById('pwInput2');
const dateOfBirth = document.getElementById('dateInput');
const male = document.getElementById('male');
const female = document.getElementById('female');
const agreement = document.getElementById('agreement');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const dateOfBirthValue = dateOfBirth.value.trim();
    
    if(usernameValue === '') {
        setError(username, 'Username is required');
    } 
    else if (usernameValue.length < 5){
        setError(username, 'Username must be at least 5 characters')
    } else {
        setSuccess(username);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 characters')
    } else if (!checkAlphaNum (passwordValue)){
        setError (password, 'Password must be alphanumeric')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

    if (dateOfBirthValue === ''){
        setError(dateOfBirth, 'Please fill in your date of birth');
    } else {
        setSuccess(dateOfBirth);
    }

    if (!male.checked && !female.checked){
        alert('Gender must be selected!');
    } else if (!agreement.checked){
        alert('Agreement must be checked!');
    } 

};

function checkAlphaNum (password){
    var isNum = false;
    var isAlpha = false;
    for (var i = 0; i < password.length; i++){
        if (isNaN(password[i])){
            isAlpha = true;
        }
        else {
            isNum = true;
        }
        if (isAlpha && isNum){
            return true;
        }
    }
    return false;
}