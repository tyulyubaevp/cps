const modalCall = document.querySelector('.modal-call');
const closeButton = modalCall.querySelector('.modal-call__close-button');
const headerPhoneButton = document.querySelector('.header__phone-button');
const sidebarPhoneButton = document.querySelector('.sidebar__phone-button');
const overlay = document.querySelector('.modal-overlay');

[headerPhoneButton, sidebarPhoneButton].forEach(btn => {
  btn.addEventListener('click', function () {
    modalCall.classList.add('modal-call_visible')
    overlay.classList.add('modal-overlay_visible')
    closeButton.classList.add('modal-call__icon_visible')
  })
});

closeButton.addEventListener('click', function () {
  modalCall.classList.remove('modal-call_visible')
  overlay.classList.remove('modal-overlay_visible')
  closeButton.classList.remove('modal-call__icon_visible')
})

overlay.addEventListener('click', function() {
  modalCall.classList.remove('modal-call_visible')
  overlay.classList.remove('modal-overlay_visible')
  closeButton.classList.remove('modal-call__icon_visible')
})
