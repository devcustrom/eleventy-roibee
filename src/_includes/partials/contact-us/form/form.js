import Alpine from 'alpinejs'
import Offline from '/@root/js/tools/offline';

export default new class ContactForm {
	constructor() {
		this.url = 'https://docs.google.com/forms/u/1/d/e/1FAIpQLSfoltKxdAT-qxBHd1ALYFypcfeg9fXnQ-fPZLQ3GQFv1NkBLg/formResponse'
		this.handler();
	}

	contactForm = () => ({
		message: '',
		url: this.url,
		sent: false,
		sending: false,
		buttonLabel: 'Отправить',
		page: document.location.href,
		refferer: document.referrer,
		notRobot: 'test',
		init() {
		},
		preSubmit() {
			if(Offline.check()) {
				this.buttonLabel = 'Отправить'
				this.$refs.button.disabled = false
			} else {
				this.buttonLabel = 'Нет подключения'
				this.$refs.button.disabled = true
			}
		},
		async submit() {
			this.buttonLabel = 'Отправка'
			this.sending = true
			const form = {
				method: 'POST',
				mode: 'no-cors',
				body: new FormData(this.$refs.form)
			}

			try {
				await fetch(this.url, form)
				this.message = 'Форма отправлена, ожидайте!<br> С вами свяжутся'
			} catch (e) {
				this.message = 'Увы, но произошла ошибка попробуйте еще раз!'
			} finally {
				this.sent = true,
				this.sending = false;
				setTimeout(() => {
					this.$refs.form.reset()
					this.buttonLabel = 'Отправить',
					this.sent = false
				}, 15000)
			}
		}
	})

	handler() {
		Alpine.data('contactForm', this.contactForm)
	}
}
