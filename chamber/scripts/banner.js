// Function to check if the banner should be shown
function checkBannerVisibility() {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0: Sunday, 1: Monday, ..., 6: Saturday

    // Show banner only on Monday, Tuesday, and Wednesday (1, 2, 3)
    if (dayOfWeek >= 1 && dayOfWeek <= 3) {
        document.getElementById('event-banner').style.display = 'block';
    }
}

// Add event listener to the close button
document.getElementById('close-banner').addEventListener('click', () => {
    document.getElementById('event-banner').style.display = 'none';
});

// Call the function to check banner visibility
checkBannerVisibility();