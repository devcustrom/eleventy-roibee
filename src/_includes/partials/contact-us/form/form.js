import Alpine from 'alpinejs'

export default new class ContactForm {
	constructor() {
		this.handler();
	}

	handler() {
		const contactForm = () => ({
			message: '',
			sent: false,
			sending: false,
			buttonLabel: 'Отправить',
			page: '',
			refferer: '',
			notRobot: '',
			submit() {
				this.buttonLabel = 'Отправка'
				this.sending = true

				const form = new FormData(this.$refs.form)

				fetch('https://docs.google.com/forms/u/1/d/e/1FAIpQLSfoltKxdAT-qxBHd1ALYFypcfeg9fXnQ-fPZLQ3GQFv1NkBLg/formResponse', {
					method: 'POST',
					mode: 'no-cors',
					body: form
				})
					.then(() => {
						this.message = 'Форма отправлена, ожидайте!<br> С вами свяжутся'
						this.$refs.form.reset()
					})
					.catch(() => {
						this.message = 'Увы, но произошла ошибка попробуйте еще раз!'
					})
					.finally(() => {
						this.sent = true,
						this.sending = false;
						this.buttonLabel = 'Отправлено'
						setTimeout(() => {
							this.buttonLabel = 'Отправить',
							this.sent = false
						}, 15000)
					})
			}
		})

		Alpine.data('contactForm', contactForm)
	}
}