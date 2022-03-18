export default new class Size {
	constructor() {
		this.md = "(min-width:768px)";
	}

	checker(e, f) {
		const size = e ? e : this.md
		const breakpoint = window.matchMedia(size);

		if(f) {
			try {
				breakpoint.addEventListener("change", f);
			} catch (e1) {
				try {
					breakpoint.addListener(f);
				} catch (e2) {
					console.error(e2);
				}
			}
		}

		return breakpoint.matches
	}
}