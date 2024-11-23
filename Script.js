// Get references to sections and navigation links
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('.content-section');
const welcomeText = document.getElementById('welcome-text');

// Show the selected section and hide others
function showSection(sectionId) {
  sections.forEach((section) => {
    if (section.id === sectionId) {
      section.classList.remove('hidden');
    } else {
      section.classList.add('hidden');
    }
  });
}

// Add click events to navigation links
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const sectionId = e.target.getAttribute('data-section');

    // Add fade-out effect to welcome text when switching sections
    if (!welcomeText.classList.contains('hidden')) {
      welcomeText.classList.add('fade-out');
      setTimeout(() => {
        welcomeText.classList.add('hidden');
        showSection(sectionId);
      }, 1000);
    } else {
      showSection(sectionId);
    }

    // Show welcome text again when Profile is clicked
    if (sectionId === 'profile') {
      setTimeout(() => {
        welcomeText.classList.remove('hidden');
        welcomeText.classList.add('fade-in');
      }, 1000);
    }
  });
});
