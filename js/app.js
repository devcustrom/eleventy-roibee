import Alpine from 'alpinejs'
import lozad from 'lozad'
import Cookies from './tools/cookies'
import ContactForm from '/@root/src/_includes/partials/contact-us/form/form'
import Services from '/@root/src/_includes/partials/services/services';
import './metriks'
import Header from '/@root/src/_includes/partials/header/header'

window.Alpine = Alpine

window.Cookies = Cookies

Alpine.start()

const observer = lozad();
observer.observe();
