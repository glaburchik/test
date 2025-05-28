// Скрипт для подсветки активного пункта меню при прокрутке
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('main .section');
  const navLinks = document.querySelectorAll('.nav-list a[href^="#"]');

  function onScroll() {
    let scrollPos = window.scrollY || window.pageYOffset;

    sections.forEach((section) => {
      const top = section.offsetTop - 100;
      const bottom = top + section.offsetHeight;

      if (scrollPos >= top && scrollPos < bottom) {
        const id = section.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }

  window.addEventListener('scroll', onScroll);
  onScroll(); // при загрузке
});
