const bodyEl = document.querySelector('body');

export const showSliderGarderob = () => {
    const blockImageEl = document.querySelector('.aristo-block-garderob');
    const garderobSlider = document.querySelector('.aristo__picture-garderob');
    const exitEl = document.querySelector('.garderob__exit');

    blockImageEl.addEventListener('click', function (e) {
        garderobSlider.classList.remove('hide');
        bodyEl.classList.add('slider-on')
    });

    exitEl.addEventListener('click', function (e) {
        garderobSlider.classList.add('hide');
        bodyEl.classList.remove('slider-on')
    });
}

export const showSliderGarage = () => {
    const blockImageGarageEl = document.querySelector('.aristo-block-garage');
    const garageSlider = document.querySelector('.aristo__picture-garage');
    const exitGarageEl = document.querySelector('.garage__exit');

    blockImageGarageEl.addEventListener('click', function (e) {
        garageSlider.classList.remove('hide')
        bodyEl.classList.add('slider-on')
    });

    exitGarageEl.addEventListener('click', function (e) {
        garageSlider.classList.add('hide')
        bodyEl.classList.remove('slider-on')
    });
}

export const showSliderKreslo = () => {
    const blockImageKresloEl = document.querySelector('.gliver-block-kreslo');
    const kresloSlider = document.querySelector('.gliver__picture-kreslo');
    const exitKresloEl = document.querySelector('.kreslo__exit');

    blockImageKresloEl.addEventListener('click', function (e) {
        kresloSlider.classList.remove('hide')
        bodyEl.classList.add('slider-on')
    });

    exitKresloEl.addEventListener('click', function (e) {
        kresloSlider.classList.add('hide')
        bodyEl.classList.remove('slider-on')
    });
}

export const showSliderDivan = () => {
    const blockImageDivanEl = document.querySelector('.gliver-block-divan');
    const divanSlider = document.querySelector('.gliver__picture-divan');
    const exitDivanEl = document.querySelector('.divan__exit');

    blockImageDivanEl.addEventListener('click', function (e) {
        divanSlider.classList.remove('hide')
        bodyEl.classList.add('slider-on')
    });

    exitDivanEl.addEventListener('click', function (e) {
        divanSlider.classList.add('hide')
        bodyEl.classList.remove('slider-on')
    });
}