document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.burger-menu');
  const closeMenu = document.querySelector('.close-menu');
  const backdrop = document.querySelector('.backdrop');
  const links = document.querySelectorAll('.backdrop-list-item');

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
    const middleOfScreen = window.innerHeight / 2;
    let currentId = '';

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= middleOfScreen && rect.bottom >= middleOfScreen) {
        currentId = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
    });
  }

  window.addEventListener('scroll', onScroll);
  onScroll(); 
});
