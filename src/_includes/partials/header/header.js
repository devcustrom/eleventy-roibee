import Alpine from 'alpinejs'
import Size from '../../../js/tools/size';

export default new class Header {
	constructor() {
		this.handler();
	}

	header = () => ({
		noTop: false,
        h: 80,
		show: false,
		desktop: Size.checker(Size.md),
		init() {
			window.addEventListener('scroll', () => {
				this.noTop = (document.body.scrollTop > this.h || document.documentElement.scrollTop > this.h);
			})
			Size.checker(Size.md, () => {
				this.desktop = Size.checker(Size.md)
			})
		},
		toggle() {
			if(!this.desktop) {
				this.bodyLock = !this.bodyLock;
				this.show = !this.show
			}
		}
	})

	handler() {
		Alpine.data('header', this.header)
	}
}
