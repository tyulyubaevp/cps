import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const brands = document.querySelectorAll('.brands__brand-card')
const toggleBrandsButton = document.querySelector('.brands__more-button')
const toggleBrandsButtonText = toggleBrandsButton.querySelector('.brands__more-button-text')
const toggleBrandsButtonExpandIcon = toggleBrandsButton.querySelector('.brands__expand-icon')
let expanded = false;
let swiper = null;
let limit = 6;

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

    if (isMobile && !swiper) {
        swiper = new Swiper('.swiper', {
            modules: [Pagination],
            direction: 'horizontal',
            loop: false,
            pagination: {
                clickable: true,
                el: '.swiper-pagination',
            },
            grabCursor: true,
            slidesPerView: 'auto',
            spaceBetween: 16,
        })
    }

    if (!isMobile && swiper) {
        swiper.destroy(true, true)
        swiper = null
    }

    showCards();
}

toggleBrandsButton.addEventListener('click', toggleBrands)
window.addEventListener('load', toggleSwiper)
window.addEventListener('resize', toggleSwiper)