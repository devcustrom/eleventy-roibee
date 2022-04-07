import Alpine from 'alpinejs'
import Offline from '../../../../js/tools/offline';
import { load } from 'recaptcha-v3'

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
		notRobot: '',
		init() {
			load('6Ld25MIeAAAAAHOE3uPGklXk25HzZbyX39NP1h9W').then((recaptcha) => {
				recaptcha.execute().then((token) => {
					this.notRobot = token
				})
			})
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
		submit() {
			this.buttonLabel = 'Отправка'
			this.sending = true
			const form = new FormData(this.$refs.form)

			fetch(this.url, {
				method: 'POST',
				mode: 'no-cors',
				body: form
			})
				.then(() => {
					this.message = 'Форма отправлена, ожидайте!<br> С вами свяжутся'
				})
				.catch(() => {
					this.message = 'Увы, но произошла ошибка попробуйте еще раз!'
				})
				.finally(() => {
					this.sent = true,
					this.sending = false;
					this.buttonLabel = 'Отправлено'
					setTimeout(() => {
						this.$refs.form.reset()
						this.buttonLabel = 'Отправить',
						this.sent = false
					}, 15000)
				})
		}
	})

	handler() {
		Alpine.data('contactForm', this.contactForm)
	}
}
