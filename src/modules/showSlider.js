const bodyEl = document.querySelector('body');

export const showSliderGarderob = () => {
    const blockImageEl = document.querySelector('.aristo-block-garderob');
    const garderobSlider = document.querySelector('.aristo__picture-garderob');
    const exitEl = document.querySelector('.garderob__exit');

    const closeModal = (event) => {
        const target = event.target;
    
        if (target === garderobSlider || target === exitEl) {
            garderobSlider.style.opacity = 0;
            bodyEl.classList.remove('slider-on');
    
          setTimeout(() => {
            garderobSlider.style.visibility = "hidden";
          }, 300);
        }
      };
    
      const openModal = () => {
        garderobSlider.style.visibility = "visible";
        garderobSlider.style.opacity = 1;
        bodyEl.classList.add('slider-on');
      };
    
    blockImageEl.addEventListener("click", openModal);
    garderobSlider.addEventListener("click", closeModal);
}

export const showSliderGarage = () => {
    const blockImageGarageEl = document.querySelector('.aristo-block-garage');
    const garageSlider = document.querySelector('.aristo__picture-garage');
    const exitGarageEl = document.querySelector('.garage__exit');

    garageSlider.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity 300ms ease;
    `;

    const closeModal = (event) => {
        const target = event.target;
    
        if (target === garageSlider || target === exitGarageEl) {
            garageSlider.style.opacity = 0;
            bodyEl.classList.remove('slider-on');
    
          setTimeout(() => {
            garageSlider.style.visibility = "hidden";
          }, 300);
        }
      };
    
      const openModal = () => {
        garageSlider.style.visibility = "visible";
        garageSlider.style.opacity = 1;
        bodyEl.classList.add('slider-on');
      };
    
    blockImageGarageEl.addEventListener("click", openModal);
    garageSlider.addEventListener("click", closeModal);
}

export const showSliderKreslo = () => {
    const blockImageKresloEl = document.querySelector('.gliver-block-kreslo');
    const kresloSlider = document.querySelector('.gliver__picture-kreslo');
    const exitKresloEl = document.querySelector('.kreslo__exit');

    kresloSlider.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity 300ms ease;
    `;

    const closeModal = (event) => {
        const target = event.target;
    
        if (target === kresloSlider || target === exitKresloEl) {
            kresloSlider.style.opacity = 0;
            bodyEl.classList.remove('slider-on');
    
          setTimeout(() => {
            kresloSlider.style.visibility = "hidden";
          }, 300);
        }
      };
    
      const openModal = () => {
        kresloSlider.style.visibility = "visible";
        kresloSlider.style.opacity = 1;
        bodyEl.classList.add('slider-on');
      };
    
    blockImageKresloEl.addEventListener("click", openModal);
    kresloSlider.addEventListener("click", closeModal);
}

export const showSliderDivan = () => {
    const blockImageDivanEl = document.querySelector('.gliver-block-divan');
    const divanSlider = document.querySelector('.gliver__picture-divan');
    const exitDivanEl = document.querySelector('.divan__exit');

    divanSlider.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity 300ms ease;
    `;

    const closeModal = (event) => {
        const target = event.target;
    
        if (target === divanSlider || target === exitDivanEl) {
            divanSlider.style.opacity = 0;
            bodyEl.classList.remove('slider-on');
    
          setTimeout(() => {
            divanSlider.style.visibility = "hidden";
          }, 300);
        }
      };
    
      const openModal = () => {
        divanSlider.style.visibility = "visible";
        divanSlider.style.opacity = 1;
        bodyEl.classList.add('slider-on');
      };
    
    blockImageDivanEl.addEventListener("click", openModal);
    divanSlider.addEventListener("click", closeModal);
}

