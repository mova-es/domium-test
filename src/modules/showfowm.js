export const showForm = () => {
  const showButtonEls = document.querySelectorAll(
    ".partners__description__button"
  );
  const modalwindow = document.querySelector(".modal");
  const closeModalWindow = document.querySelector(".modal__close");
  const bodyEl = document.querySelector('body');

  modalwindow.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity 300ms ease;
    `;

  const closeModal = (event) => {
    const target = event.target;

    if (target === modalwindow || target === closeModalWindow) {
        modalwindow.style.opacity = 0;
        bodyEl.classList.remove('modal__active');

      setTimeout(() => {
        modalwindow.style.visibility = "hidden";
      }, 300);
    }
  };

  const openModal = () => {
    modalwindow.style.visibility = "visible";
    modalwindow.style.opacity = 1;
    bodyEl.classList.add('modal__active');
  };

  showButtonEls.forEach((button) => {
    button.addEventListener("click", openModal);
  });
  modalwindow.addEventListener("click", closeModal);
};