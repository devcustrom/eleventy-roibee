import Alpine from 'alpinejs'
import lozad from 'lozad'

window.Alpine = Alpine

Alpine.start()

const observer = lozad();
observer.observe();

import './swiper';

import './home';