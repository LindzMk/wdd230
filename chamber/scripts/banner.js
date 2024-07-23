document.addEventListener('DOMContentLoaded', () => {
    const bannerContainer = document.getElementById('event-banner');
    const closeBannerButton = document.getElementById('close-banner');
    const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    if (today === 1 || today === 2 || today === 3) {
        bannerContainer.classList.remove('hidden');
    }

    closeBannerButton.addEventListener('click', () => {
        bannerContainer.classList.add('hidden');
    });
});