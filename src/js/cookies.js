document.addEventListener('DOMContentLoaded', function () {
  const accept = document.querySelector('.cookies-accept');
  const decline = document.querySelector('.cookies-decline');
  const container = document.querySelector('.cookies-wrap');

  let value = localStorage.getItem('cookies-privacy');

  if (value === 'false' || value === null) {
    container.style.display = 'flex';
  }

  if (accept) {
    accept.addEventListener('click', () => {
      localStorage.setItem('cookies-privacy', true);
      container.style.display = 'none';
    });
  }

  if (decline) {
    decline.addEventListener('click', () => {
      localStorage.setItem('cookies-privacy', false);
      container.style.display = 'none';
    });
  }
});