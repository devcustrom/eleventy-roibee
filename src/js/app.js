import Alpine from 'alpinejs'
import lozad from 'lozad'
import Cookies from './tools/cookies'
import ContactForm from '../_includes/partials/contact-us/form/form'
import Services from '../_includes/partials/services/services';
import Size from './tools/size';
import './metriks'

window.Alpine = Alpine

window.Cookies = Cookies

window.Size = Size

Alpine.start()

const observer = lozad();
observer.observe();
