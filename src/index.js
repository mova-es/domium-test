import "./index.html";
//new modules
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "./index.scss";
import { slidersInit } from "./modules/sliders";
import { menuControl } from "./modules/menuControl";
import { showSliderGarderob } from "./modules/showSlider";
import { showSliderGarage } from "./modules/showSlider";
import { showSliderKreslo } from "./modules/showSlider";
import { showSliderDivan } from "./modules/showSlider";
import { headerFix } from "./modules/headerFix";
import { showForm } from "./modules/showfowm";
import { formHandle } from "./modules/formHandle";

//use modules

headerFix();
menuControl();
showSliderGarderob();
showSliderGarage();
showSliderKreslo();
showSliderDivan();
showForm();
formHandle();


slidersInit(".aristo__slider-garderob", {
  navigation: {
    nextEl: ".garderob-next",
    prevEl: ".garderob-prev"
  },
});

slidersInit(".aristo__slider-garage", {
  navigation: {
    nextEl: ".garage-next",
    prevEl: ".garage-prev"
  },
});

slidersInit(".gliver__slider-kreslo", {
  navigation: {
    nextEl: ".kreslo-next",
    prevEl: ".kreslo-prev"
  },
});

slidersInit(".gliver__slider-divan", {
  navigation: {
    nextEl: ".divan-next",
    prevEl: ".divan-prev"
  },
});

slidersInit(".customer-projects__slider", {
  navigation: false,
  pagination: {
    el: '.customer-pagination'
  }
});

slidersInit(".designer-projects__slider", {
  navigation: false,
  pagination: {
    el: '.designer-pagination'
  }
});

slidersInit(".aristo__slider-garderob-main", {
  navigation: false,
  pagination: {
    el: '.aristo__slider-garderob-pagination'
  }
});

slidersInit(".aristo__slider-garage-main", {
  navigation: false,
  pagination: {
    el: '.aristo__slider-garage-pagination'
  }
});

slidersInit(".gliver__slider-kreslo-main", {
  navigation: false,
  pagination: {
    el: '.gliver__slider-kreslo-pagination'
  }
});

slidersInit(".gliver__slider-divan-main", {
  navigation: false,
  pagination: {
    el: '.gliver__slider-divan-pagination'
  }
});



