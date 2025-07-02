const sidebar = document.querySelector('.sidebar')
const menuButton = document.querySelector('.header__menu-button');
const closeButton = sidebar.querySelector('.sidebar__close-button')
const sidebarOverlay = document.querySelector('.sidebar-overlay')

menuButton.addEventListener('click', function () {
  sidebar.classList.add('sidebar_visible')
  sidebarOverlay.classList.add('sidebar-overlay_visible')
})

closeButton.addEventListener('click', function () {
  sidebar.classList.remove('sidebar_visible')
  sidebarOverlay.classList.remove('sidebar-overlay_visible')
})

sidebarOverlay.addEventListener('click', function () {
  sidebar.classList.remove('sidebar_visible')
  sidebarOverlay.classList.remove('sidebar-overlay_visible')
})
