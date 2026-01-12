// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.getElementById('menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', function() {
      const isOpen = mobileMenu.classList.contains('block');
      if (isOpen) {
        mobileMenu.classList.remove('block');
        mobileMenu.classList.add('hidden');
      } else {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('block');
      }
    });

    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('block');
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});

// WhatsApp Floating Button
function initWhatsAppButton() {
  const button = document.getElementById('whatsapp-button');
  if (!button) return;

  // Animation delay
  setTimeout(() => {
    button.classList.remove('opacity-0', 'translate-y-2');
    button.classList.add('opacity-100', 'translate-y-0');
  }, 800);

  // The button links directly to WhatsApp
}