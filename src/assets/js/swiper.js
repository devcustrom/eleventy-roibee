import Swiper from "swiper";

export default new class swiperService {
	constructor() {
		this.size = '(min-width:768px)'
		this.swiper = 'swiper-service'
		this.scrollBar = 'swiper-scrollbar'
		this.handler()
	}

	handler() {
		const s = document.querySelector(`.${this.swiper}`)

		if (!s) return;
		const breakpoint = window.matchMedia(this.size);
		let swiper

		const breakpointChecker = () => {
			if (breakpoint.matches) {
				if (swiper !== undefined) swiper.destroy(true, true);
				return;
			} else {
				return enableSwiper();
			}
		};

		const enableSwiper = () => {
			swiper = new Swiper(`.${this.swiper}`, {
				slidesPerView: 1,
				spaceBetween: 40,
				autoplay: {
					delay: 2000,
					disableOnInteraction: false,
				},
				scrollbar: {
					el: `.${this.scrollBar}`,
					hide: true,
				},
				breakpoints: {
					640: {
						slidesPerView: 2,
					}
				}
			})
		}

		try {
			breakpoint.addEventListener("change", breakpointChecker);
		} catch (e1) {
			try {
				breakpoint.addListener(breakpointChecker);
			} catch (e2) {
				console.error(e2);
			}
		}

  		breakpointChecker();
	}
}
