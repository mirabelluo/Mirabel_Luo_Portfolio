window.addEventListener('scroll', () => {
    const bag = document.querySelector('.bag-image');
    const scrollY = window.scrollY;
    if (bag) {
      bag.style.transform = `translateY(${-scrollY * 0.2}px)`;
    }
  });
  