const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit',onSubmit)

function onSubmit(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    if (!email.value || !password.value ) {
        alert('Ви повинні заповнити всі поля!');
        return
    }
    console.log(email.value);
    console.log(password.value);

    const data = {
        email: email.value,
        password: password.value,
    };
    console.log(data);
    formEl.reset();
        
};
