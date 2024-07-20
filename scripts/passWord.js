// Password confirmation validation
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    const password = document.getElementById('password').value;
    const password2 = document.getElementById('password2').value;
    if (password !== password2) {
        event.preventDefault();
        document.getElementById('formmessage').textContent = 'Passwords do not match. Please try again.';
        document.getElementById('password').value = '';
        document.getElementById('password2').value = '';
        document.getElementById('password').focus();
    }
});

// Range value display
const range = document.getElementById('r');
const rangeValue = document.getElementById('rangevalue');
range.addEventListener('input', function () {
    rangeValue.textContent = range.value;
});