const passworldField = document.querySelector('.js-password-field'),
    lengthItem = document.querySelector('.js-length-item'),
    lengthRange = document.querySelector('.js-length-range'),
    number = document.querySelector('.js-number'),
    sumbols = document.querySelector('.js-sumbols'),
    btnGenerate = document.querySelector('.js-btn-generate'),
    errorMessage = document.querySelector('.error-message');

const charsNumbers = "0123456789";
const charsSumbols = "!@#$%^&*()_+-=/?.,][`~|";

lengthRange.addEventListener('input', function () {
    lengthItem.value = lengthRange.value;
});

lengthItem.addEventListener('input', function () {
    lengthRange.value = lengthItem.value;
});

lengthRange.addEventListener('input', function () {
    if (lengthRange.value < 5) {
        lengthRange.value = 4;
        errorMessage.textContent = "Пароль не может быть меньше 5 символов";
    } else if (lengthRange.value > 30) {
        lengthRange.value = 31;
        errorMessage.textContent = "Пароль не может быть больше 30 символов";
    } else {
        errorMessage.textContent = "";
    }
    lengthItem.value = lengthRange.value;
});

lengthItem.addEventListener('input', function () {
    if (lengthItem.value < 5) {
        lengthItem.value = 4;
        errorMessage.textContent = "Пароль не может быть меньше 5 символов";
    } else if (lengthItem.value > 30) {
        lengthItem.value = 31;
        errorMessage.textContent = "Пароль не может быть больше 30 символов";
    } else {
        errorMessage.textContent = "";
    }
    lengthRange.value = lengthItem.value;
});


btnGenerate.addEventListener('click', () => {
    let password = "";
    let charsLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    if (number.checked) {
        charsLetters += charsNumbers;
    }
    if (sumbols.checked) {
        charsLetters += charsSumbols;
    }

    for (let i = 0; i < lengthItem.value; i++) {
        password += charsLetters[Math.floor(Math.random() * charsLetters.length)];
    }
    passworldField.innerHTML = password;
});
