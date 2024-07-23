// setDateTime.js
document.addEventListener('DOMContentLoaded', (event) => {
    const datetimeInput = document.getElementById('datetime');
    const now = new Date();
    const formattedDateTime = now.toISOString();
    datetimeInput.value = formattedDateTime;
});