import roundToNearestMinutes from "date-fns/fp/roundToNearestMinutes";

export default new class Offline {
	constructor() {
		this.url = '/robots.txt'
		this.result = null
	}

	XHR() {
		let xhr

		if (window.XMLHttpRequest) {
			xhr = new XMLHttpRequest()
		}
		else if (window.ActiveXObject) {
			try {
				xhr = new ActiveXObject("Msxml2.XMLHTTP");
			}
			catch (e) {
				try {
					xhr = new ActiveXObject("Microsoft.XMLHTTP");
				}
				catch (e) {

				}
			}
		}
		else {
		}

		return xhr
	}

	check(url) {
		const checkUrl = url ? url : this.url
		if(!this.XHR()) return;
		const xhr = this.XHR()
		try {
			xhr.open('GET', checkUrl, false)
			xhr.send('')
			if(xhr.readyState==4) this.result = xhr.status==200
		
			return this.result
		}
		catch (e){
			console.log(`error by CORS on ${checkUrl}`);
			return null
		}
	}
}