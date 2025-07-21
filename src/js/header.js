document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.burger-menu');
  const closeMenu = document.querySelector('.close-menu');
  const backdrop = document.querySelector('.backdrop');
  const links = document.querySelectorAll('.backdrop-list-item, header-list-item');

  function toggleMenu(show) {
    menuBtn.style.display = show ? 'none' : 'block';
    closeMenu.style.display = show ? 'block' : 'none';
    backdrop.classList.toggle('show', show);
  }

  menuBtn?.addEventListener('click', () => toggleMenu(true));
  closeMenu?.addEventListener('click', () => toggleMenu(false));
  backdrop?.addEventListener('click', e => {
    if (e.target === backdrop) toggleMenu(false);
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu(false); 
    });
  });

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.backdrop-link, .header-link');

  function onScroll() {
    let currentId = '';
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (window.scrollY >= top - height / 2) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle(
        'active',
        link.getAttribute('href') === `#${currentId}`
      );
    });
  }

  window.addEventListener('scroll', onScroll);
  onScroll();
});
