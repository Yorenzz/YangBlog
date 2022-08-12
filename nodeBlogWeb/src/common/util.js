export const getRandomColor = () => {
	const randomColor = Math.floor(Math.random() * 16777215).toString(16)
	return randomColor.length === 6 ? '#' + randomColor : '#0' + randomColor
}
