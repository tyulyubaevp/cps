const modalFeedback = document.querySelector('.modal-feedback');
const closeButton = modalFeedback.querySelector('.modal-feedback__close-button');
const headerMessageButton = document.querySelector('.header__message-button');
const sidebarMessageButton = document.querySelector('.sidebar__message-button');
const overlay = document.querySelector('.modal-overlay');

[headerMessageButton, sidebarMessageButton].forEach(btn => {
  btn.addEventListener('click', function () {
    modalFeedback.classList.add('modal-feedback_visible')
    overlay.classList.add('modal-overlay_visible')
    closeButton.classList.add('modal-feedback__icon_visible')
  })
});

closeButton.addEventListener('click', function () {
  modalFeedback.classList.remove('modal-feedback_visible')
  overlay.classList.remove('modal-overlay_visible')
  closeButton.classList.remove('modal-feedback__icon_visible')
})

overlay.addEventListener('click', function() {
  modalFeedback.classList.remove('modal-feedback_visible')
  overlay.classList.remove('modal-overlay_visible')
  closeButton.classList.remove('modal-feedback__icon_visible')
})
