import Swiper, { Scrollbar } from "swiper"
import Size from "./tools/size"

export default new class swiperService {
	constructor() {
		this.swiper = undefined
		this.swiperClass = "swiper-service"
		this.scrollBar = "swiper-service-scrollbar"
		this.handler()
	}

	handler() {
		if (!document.querySelector(`.${this.swiperClass}`)) return

		const config = {
			modules: [Scrollbar],
			slidesPerView: 1,
			spaceBetween: 40,
			autoplay: {
				delay: 2000,
				disableOnInteraction: false,
			},
			scrollbar: {
				el: `.${this.scrollBar}`,
			},
			breakpoints: {
				640: {
					slidesPerView: 2,
				},
			},
		}

		const enableSwiper = () => this.swiper = new Swiper(`.${this.swiperClass}`, config)

		const toggle = () => {
			if (Size.checker(Size.md)) {
				if (this.swiper !== undefined) this.swiper.destroy(true, true)
				return
			} else {
				return enableSwiper()
			}
		}

		Size.checker(Size.md, toggle)
		toggle()
	}
}
