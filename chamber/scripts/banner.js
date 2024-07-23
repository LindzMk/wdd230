document.addEventListener('DOMContentLoaded', function () {
    const banner = document.getElementById('event-banner');
    const closeButton = document.getElementById('close-banner');

    function checkDay() {
        const today = new Date().getDay();
        // 1 = Monday, 2 = Tuesday, 3 = Wednesday
        if (today === 1 || today === 2 || today === 3) {
            banner.classList.remove('hidden');
        } else {
            banner.classList.add('hidden');
        }
    }

    closeButton.addEventListener('click', function () {
        banner.classList.add('hidden');
    });

    // Check day when the page loads
    checkDay();
});