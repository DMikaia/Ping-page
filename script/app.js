const
    form = document.getElementById("form"),
    email = document.getElementById("email"),
    textError = document.getElementById("text-error");

form.addEventListener('submit', (e) =>{
    if (!validateEmail(email)) {
        e.preventDefault();
    };
})

const setError = (element, id) => {
    id.classList.add('error-text');
    element.classList.add('email-error');
}

const setSuccess = (element, id) => {
    id.classList.remove('error-text');
    element.classList.remove('email-error');
}

const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

function validateEmail(email) {
    const emailValue = email.value.trim();

    if ((emailValue === '') || (emailValue === null) || (!isValidEmail(emailValue))) {
        setError(email, textError);
        return false;
    } else {
        setSuccess(email, textError);
        return true;
    }
}
