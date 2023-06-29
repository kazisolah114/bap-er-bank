const loginButton = document.getElementById('button');
loginButton.addEventListener('click', function () {
    const emailField = document.getElementById('email-input');
    const email = emailField.value;
    const passwordField = document.getElementById('password-input');
    const password = passwordField.value;
    if (email === 'kazisolayman123@gmail.com' && password === 'Fayez') {
        window.location.href = './home.html';
    } else {
        alert("Sorry, wrong combination of email and password.")
    }
})