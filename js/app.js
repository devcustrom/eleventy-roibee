import Alpine from 'alpinejs'
import lozad from 'lozad'
import Cookies from './tools/cookies'
import ContactForm from '/@root/src/_includes/partials/contact-us/form/form'
import Services from '/@root/src/_includes/partials/services/services';
import SwiperTeam from '/@root/src/_includes/partials/team/team';
import SwiperWorks from '/@root/src/_includes/partials/works/works';
import './metriks'
import Header from '/@root/src/_includes/partials/header/header'

window.Alpine = Alpine

window.Cookies = Cookies

Alpine.start()

const observer = lozad();
observer.observe();

// const focusmenu = document.querySelector('#focusmenu')
// focusmenu.addEventListener('focusin', () => {
// 	import('./test.js' /* webpackChunkName: "test" */).then(module => {
// 		const initCarousel = module.default;
// 		initCarousel.handler()
// 	});
// })
