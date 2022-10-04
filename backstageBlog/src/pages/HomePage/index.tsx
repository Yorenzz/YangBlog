import React from 'react';
import { Chart, Interval, LineAdvance } from 'bizcharts'

const HomePage: React.FC = () => {
	const data = [
		{ genre: 'Sports', sold: 275 },
		{ genre: 'Strategy', sold: 115 },
		{ genre: 'Action', sold: 120 },
		{ genre: 'Shooter', sold: 350 },
		{ genre: 'Other', sold: 150 }
	];
	return (
	<div>homepage
		<Chart height={320} autoFit data={data} >
			<Interval position="genre*sold" />
		</Chart>
	</div>
	)
}

export default HomePage
