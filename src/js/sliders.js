import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const swiperContainers = document.querySelectorAll('.swiper');
const brands = document.querySelectorAll('.brands__brand-card')
const toggleBrandsButton = document.querySelector('.brands__more-button')
const toggleBrandsButtonText = toggleBrandsButton.querySelector('.brands__more-button-text')
const toggleBrandsButtonExpandIcon = toggleBrandsButton.querySelector('.brands__expand-icon')

const devices = document.querySelectorAll('.devices__device-card');
const toggleDevicesButton = document.querySelector('.devices__more-button');
const toggleDevicesButtonText = toggleDevicesButton.querySelector('.devices__more-button-text');
const toggleDevicesButtonExpandIcon = toggleDevicesButton.querySelector('.devices__expand-icon');

let brandsExpanded = false;
let devicesExpanded = false;
let brandsLimit = 6;
let devicesLimit = 3;
let swipers = [];

function updateVisibleCardsLimit() {
  brandsLimit = window.innerWidth < 1120 ? 6 : 8

  if (window.innerWidth < 768) {
    toggleDevicesButton.style.display = 'none'
  } else if (window.innerWidth > 768 && window.innerWidth < 1120) {
    devicesLimit = 3
    toggleDevicesButton.style.display = 'flex'
  } else if (window.innerWidth > 1120 && window.innerWidth < 1715) {
    devicesLimit = 4;
    toggleDevicesButton.style.display = 'flex'
  } else if (window.innerWidth > 1715) {
    devicesLimit = 5
    toggleDevicesButton.style.display = 'none'
  }
}

function showBrandCards() {

  brands.forEach((brandCard, index) => {
    if (!brandsExpanded && index >= brandsLimit) {
      brandCard.classList.add('hidden')
    } else {
      brandCard.classList.remove('hidden')
    }
  })

  toggleBrandsButtonExpandIcon.classList.toggle('brands__expand-icon_active', brandsExpanded)
  toggleBrandsButtonText.textContent = brandsExpanded ? 'Скрыть' : 'Показать всё'
}

function toggleBrands() {
  brandsExpanded = !brandsExpanded
  showBrandCards()
}

function showDevicesCards() {

  devices.forEach((deviceCard, index) => {
    if (!devicesExpanded && index >= devicesLimit) {
      deviceCard.classList.add('hidden')
    } else {
      deviceCard.classList.remove('hidden')
    }
  })

  toggleDevicesButtonExpandIcon.classList.toggle('brands__expand-icon_active', devicesExpanded)
  toggleDevicesButtonText.textContent = devicesExpanded ? 'Скрыть' : 'Показать всё'
}

function toggleDevices() {
  devicesExpanded = !devicesExpanded
  showDevicesCards()
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

  showDevicesCards()
  showBrandCards();
}

toggleBrandsButton.addEventListener('click', toggleBrands)
toggleDevicesButton.addEventListener('click', toggleDevices)
window.addEventListener('load', toggleSwiper)
window.addEventListener('resize', toggleSwiper)
