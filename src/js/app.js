import Alpine from 'alpinejs'
import lozad from 'lozad'
import Cookies from './tools/cookies'
import ContactForm from '../_includes/partials/contact-us/form/form'
import Services from '../_includes/partials/services/services';
import './metriks'
import Header from '../_includes/partials/header/header'

window.Alpine = Alpine

window.Cookies = Cookies

Alpine.start()

const observer = lozad();
observer.observe();
