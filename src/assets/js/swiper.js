import Swiper from "swiper";

export default new class swiperService {
	constructor() {
		this.size = '(min-width:640px)'
		this.swiper = 'swiper-service'
		this.scrollBar = 'swiper-scrollbar'
		this.handler()
	}

	handler() {
		const swiper = document.querySelector(`.${this.swiper}`)

		if (!swiper) return;

		const breakpoint = window.matchMedia(this.size);

		let swiperService;

		const breakpointChecker = function() {
		
			if ( breakpoint.matches === true ) {
		
			if ( swiperService !== undefined ) swiperService.destroy( true, true );

			return;

			} else if ( breakpoint.matches === false ) {
				
			return enableSwiper();
			
			}
		
		};
		
		const enableSwiper = function() {
			swiperService = new Swiper(`.${this.swiper}`, {
				slidesPerView: 1,
				spaceBetween: 40,
				autoplay: {
					delay: 2000,
					disableOnInteraction: false,
				},
				scrollbar: {
					el: `.${this.scrollBar}`,
					hide: true,
				}
			})
		}
	}
}
