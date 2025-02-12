window.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.fade-in');
  sections.forEach((section, index) => {
      setTimeout(() => {
          section.style.animation = 'fadeIn 1s forwards';
      }, index * 300);
  });
});
