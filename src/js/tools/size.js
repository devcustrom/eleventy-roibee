export default new class Size {
	constructor() {
		this.sm = "(min-width:640px)";
		this.md = "(min-width:768px)";
		this.lg = "(min-width:1024px)";
		this.xl = "(min-width:1280px)";
		this.xl = "(min-width:1280px)";
		this.hover = "(hover: hover)"
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