import {Swiper, Navigation} from "swiper"

export default new class SwiperTeam {
	constructor() {
		this.swiper = undefined
		this.swiperClass = "swiper-team"
		this.handler()
	}

	handler() {
		const config = {
			modules: [Navigation],
			slidesPerView: 'auto',
			spaceBetween: 10,
			navigation: {
				nextEl: `.swiper-news-button-next`,
				prevEl: `.swiper-news-button-prev`,
			}
		}
		this.swiper = new Swiper(`.${this.swiperClass}`, config)
	}
}
