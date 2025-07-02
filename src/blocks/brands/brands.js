import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const swiperContainers = document.querySelectorAll('.swiper');
const brands = document.querySelectorAll('.brands__brand-card')
const toggleBrandsButton = document.querySelector('.brands__more-button')
const toggleBrandsButtonText = toggleBrandsButton.querySelector('.brands__more-button-text')
const toggleBrandsButtonExpandIcon = toggleBrandsButton.querySelector('.brands__expand-icon')
let expanded = false;
let limit = 6;
let swipers = [];

function updateVisibleCardsLimit() {
    limit = window.innerWidth < 1120 ? 6 : 8
}

function showCards() {

    brands.forEach((brandCard, index) => {
        if (!expanded && index >= limit) {
            brandCard.classList.add('hidden')
        } else {
            brandCard.classList.remove('hidden')
        }
    })

    toggleBrandsButtonExpandIcon.classList.toggle('brands__expand-icon_active', expanded)
    toggleBrandsButtonText.textContent = expanded ? 'Скрыть' : 'Показать всё'
}

function toggleBrands() {
    expanded = !expanded
    showCards()
}

function toggleSwiper() {
    const isMobile = window.innerWidth < 768

    updateVisibleCardsLimit()

    if (isMobile && swipers.length === 0) {
      swiperContainers.forEach(container => {
        const swiperInstance = new Swiper(container, {
          modules: [Pagination],
          direction: 'horizontal',
          loop: false,
          pagination: {
            clickable: true,
            el: container.querySelector('.swiper-pagination'),
          },
          grabCursor: true,
          slidesPerView: 'auto',
          spaceBetween: 16,
        })

        swipers.push(swiperInstance)
      })
    }

    if (!isMobile && swipers.length > 0) {
        swipers.forEach(swiperInstance => swiperInstance.destroy(true, true))
        swipers = []
    }

    showCards();
}

toggleBrandsButton.addEventListener('click', toggleBrands)
window.addEventListener('load', toggleSwiper)
window.addEventListener('resize', toggleSwiper)
