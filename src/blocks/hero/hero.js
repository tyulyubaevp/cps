const carouselButtons = document.querySelectorAll('.hero__carousel-button');
const toggleReadMoreButton = document.querySelector('.hero__more-button')
const toggleReadMoreButtonText = toggleReadMoreButton.querySelector('.hero__more-button-text')
const toggleReadMoreButtonExpandIcon = toggleReadMoreButton.querySelector('.hero__expand-icon')
const textSecond = document.querySelector('.hero__text_second');
const textAdd = document.querySelector('.hero__add-text');
const textThird = document.querySelector('.hero__text_third');

let expanded = false;

carouselButtons.forEach(btn => {
  btn.addEventListener('click', function () {
    const isActive = btn.classList.contains('hero__carousel-button_active');

    if (!isActive) {
      carouselButtons.forEach(btn => btn.classList.remove('hero__carousel-button_active'));
      btn.classList.add('hero__carousel-button_active');
    }
  });
});

toggleReadMoreButton.addEventListener('click', function () {
  expanded = !expanded;
  toggleReadMoreButtonText.textContent = expanded ? 'Скрыть' : 'Читать далее';
  toggleReadMoreButtonExpandIcon.classList.toggle('hero__expand-icon_active')

  if (window.innerWidth >= 320 && window.innerWidth < 768) {
    textSecond.classList.toggle('hero__text_visible')
    textAdd.classList.toggle('hero__add-text_visible')
    textThird.classList.toggle('hero__text_visible')
  } else if (window.innerWidth >= 768 && window.innerWidth < 1120) {
    textAdd.classList.toggle('hero__add-text_visible')
    textThird.classList.toggle('hero__text_visible')
  } else {
    textThird.classList.toggle('hero__text_visible')
  }
})
