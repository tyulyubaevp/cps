import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const brands = document.querySelectorAll('.brands__brand-card')
const toggleBrandsButton = document.querySelector('.brands__more-button')
const toggleBrandsButtonText = toggleBrandsButton.querySelector('.brands__more-button-text')
const toggleBrandsButtonExpandIcon = toggleBrandsButton.querySelector('.brands__expand-icon')
let expanded = false;
let swiper = null;

function toggleSwiper() {
    const isMobile = window.innerWidth < 768

    if (isMobile && !swiper) {
        swiper = new Swiper('.swiper', {
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

}

window.addEventListener('load', toggleSwiper)
window.addEventListener('resize', toggleSwiper)


function toggleBrands() {
    let limit = 5

    if (window.innerWidth < 1120) {
        limit = 5
    } else {
        limit = 7
    }

    if (!expanded) {
        brands.forEach((brandCard, index) => {
            if (index > limit) {
                brandCard.classList.add('hidden')
            }
        })

        toggleBrandsButtonExpandIcon.classList.remove('brands__expand-icon_active')
        toggleBrandsButtonText.textContent = 'Показать всё'
    }

    if (expanded) {
        brands.forEach((brandCard, index) => {
            if (index > limit) {
                brandCard.classList.remove('hidden')
            }
        })

        toggleBrandsButtonExpandIcon.classList.add('brands__expand-icon_active')
        toggleBrandsButtonText.textContent = 'Скрыть'
    }

    expanded = !expanded
}

toggleBrands()

toggleBrandsButton.addEventListener('click', toggleBrands)