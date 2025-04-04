const hamburger = document.querySelector('.hamburger'); 
const navMenu = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links a'); // Select all links

// Toggle menu on hamburger click
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active'); // Remove active class
  });
});
