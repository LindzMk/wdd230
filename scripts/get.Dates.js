// Set the current year in the footer's first paragraph
document.getElementById('year').textContent = new Date().getFullYear();

// Set the last modified date in the footer's second paragraph
document.getElementById('lastModified').textContent = "Last Modified: " + document.lastModified;