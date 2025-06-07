// Hamburger menu for mobile navigation
const navToggle = document.getElementById('nav-toggle');
const navUl = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
  navUl.classList.toggle('active');
});
// FAQ Accordion
document.querySelectorAll('.accordion').forEach(btn => {
  btn.addEventListener('click', function() {
    // Toggle active class
    this.classList.toggle('active');
    // Toggle panel
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});
