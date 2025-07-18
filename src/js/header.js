document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.burger-menu');
  const backdrop = document.querySelector('.backdrop');
  const headerContent = document.querySelector('.header-section .header-content');
  const links = document.querySelectorAll('.backdrop-list-item');

  menuBtn?.addEventListener('click', () => {
    backdrop.classList.toggle('show');
    headerContent.classList.toggle(backdrop.classList.contains('show'));
  });

  backdrop?.addEventListener('click', e => {
    if (e.target === backdrop) {
      backdrop.classList.remove('show');
    }
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      backdrop.classList.remove('show');
    });
  });
});