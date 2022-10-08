import React, { MutableRefObject } from 'react'

import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'

const HomePage: React.FC = () => {

	const myEcharts:MutableRefObject<any> = useRef(null)

	useEffect(()=>{
		const myChart = echarts.init(myEcharts.current)
		let option = {
			title: {
				text: "ECharts 入门示例",
			},
			tooltip: {},
			legend: {
				data: ["销量"],
			},
			xAxis: {
				data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
			},
			yAxis: {},
			series: [
				{
					name: "销量",
					type: "bar",
					data: [5, 20, 36, 10, 10, 20],
				},
			],
		};
		myChart.setOption(option);
	})
	return (
			<div ref={myEcharts} style={{height:'400px',width:'400px'}}></div>
	)
}

export default HomePage
