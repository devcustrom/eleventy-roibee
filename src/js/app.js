import Alpine from 'alpinejs'
import lozad from 'lozad'
import Cookies from './tools/cookies'

window.Alpine = Alpine

window.Cookies = Cookies

Alpine.start()

const observer = lozad();
observer.observe();

import './swiper';

import './home';