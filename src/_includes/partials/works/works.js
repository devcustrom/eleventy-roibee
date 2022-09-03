import {Swiper, Pagination} from "swiper"

export default new class SwiperWorks {
	constructor() {
		this.swiper = undefined
		this.swiperClass = "swiper-works"
		this.handler()
	}

	handler() {
		const config = {
			modules: [Pagination],
			slidesPerView: 'auto',
			spaceBetween: 10,
			pagination: {
				el: '.swiper-pagination-works',
				clickable: true,
				type: 'bullets',
			}
		}
		this.swiper = new Swiper(`.${this.swiperClass}`, config)
	}
}
