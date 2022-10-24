export default {
	setItem(key: string, val: any) {
		window.localStorage.setItem(key, JSON.stringify(val))
	},
	getItem(key: string) {
		return JSON.parse(window.localStorage.getItem(key) as string)
	},
	clearItem(key: string) {
		window.localStorage.removeItem(key)
	},
	clearAll() {}
}
