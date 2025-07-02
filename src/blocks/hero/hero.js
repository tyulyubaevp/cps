const carouselButtons = document.querySelectorAll('.hero__carousel-button');

carouselButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    const isActive = btn.classList.contains('hero__carousel-button_active');

    if (!isActive) {
      carouselButtons.forEach(btn => btn.classList.remove('hero__carousel-button_active'));
      btn.classList.add('hero__carousel-button_active');
    }
  });
});
