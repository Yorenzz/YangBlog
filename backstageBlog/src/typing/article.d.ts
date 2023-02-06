
export interface ArticleType{
	text: string,
	describe: string,
	title: string,
	time: string,
	img: string,
	num: number,
	category: string,
	label: object
}

export interface ArticleDataType{
	key: number,
	title: string,
	time: string,
	category: string,
	top: boolean,
	private: boolean,
	lastUpdate: string,
	_id: string
}
