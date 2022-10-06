export default {
	setItem(key, val) {
		window.localStorage.setItem(key, JSON.stringify(val))
	},
	getItem(key) {
		return JSON.parse(window.localStorage.getItem(key))
	},
	clearItem(key) {
		window.localStorage.removeItem(key)
	},
	clearAll() {}
}
