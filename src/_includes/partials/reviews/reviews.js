import {Swiper} from "swiper"

export default new class SwiperReviews {
	constructor() {
		this.swiper = undefined
		this.swiperClass = "reviews-swiper"
		this.handler()
	}

	handler() {
		const config = {
			slidesPerView: 'auto',
			spaceBetween: 10,
		}
		this.swiper = new Swiper(`.${this.swiperClass}`, config)
	}
}
