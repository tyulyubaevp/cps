const carouselButtons = document.querySelectorAll('.hero__carousel-button');
const toggleReadMoreButton = document.querySelector('.hero__more-button')
const toggleReadMoreButtonText = toggleReadMoreButton.querySelector('.hero__more-button-text')
const toggleReadMoreButtonExpandIcon = toggleReadMoreButton.querySelector('.hero__expand-icon')
const textSecond = document.querySelector('.hero__text_second');
const textAdd = document.querySelector('.hero__add-text');

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


  if (expanded) {
    toggleReadMoreButtonExpandIcon.classList.add('hero__expand-icon_active')
    toggleReadMoreButtonText.textContent = 'Скрыть';
  } else {
    toggleReadMoreButtonExpandIcon.classList.remove('hero__expand-icon_active')
    toggleReadMoreButtonText.textContent = 'Читать далее';
  }


  if (window.innerWidth >= 320 && window.innerWidth < 768) {
    if (expanded) {
      textSecond.classList.add('hero__text_visible')
      textAdd.classList.add('hero__add-text_visible')
    } else {
      textSecond.classList.remove('hero__text_visible')
      textAdd.classList.remove('hero__add-text_visible')
    }

  } else if (window.innerWidth >= 768 && window.innerWidth < 1440) {
    if (expanded) {
      textAdd.classList.add('hero__add-text_visible')
    } else {
      textAdd.classList.remove('hero__add-text_visible')
    }
  }
})

window.addEventListener('resize', () => {
  if (!expanded) return; 

  if (window.innerWidth >= 320 && window.innerWidth < 768) {
    textSecond.classList.add('hero__text_visible');
    textAdd.classList.add('hero__add-text_visible');
  } else if (window.innerWidth >= 768 && window.innerWidth < 1440) {
    textSecond.classList.remove('hero__text_visible');
    textAdd.classList.add('hero__add-text_visible');
  } else {
    textSecond.classList.remove('hero__text_visible');
    textAdd.classList.remove('hero__add-text_visible');
  }
});
