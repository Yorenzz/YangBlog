import React, { MutableRefObject, useState } from 'react'

import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'
import { Card } from 'antd'
import './style.scss'
import ChinaMap from './ChinaMap'
import { getCommentNum } from '../../api'

const HomePage: React.FC = () => {

	const categoryChart:MutableRefObject<any> = useRef(null)
	const labelChart:MutableRefObject<any> = useRef(null)

	const [commentNum, setCommentNum] = useState(0)
	const [categoryOption, setCategoryOption]  =useState({
		legend: {
			top: 'bottom'
		},
		toolbox: {
			show: true,
		},
		series: [
		{
			name: '分类下文章数量',
			type: 'pie',
			radius: [50, 150],
			center: ['50%', '50%'],
			roseType: 'area',
			itemStyle: {
			borderRadius: 4
			},
			data: [
			{ value: 40, name: 'rose 1' },
			{ value: 38, name: 'rose 2' },
			{ value: 32, name: 'rose 3' },
			{ value: 30, name: 'rose 4' },
			]
		}
		]
	})
	const [labelOption, setLabelOption]  =useState({
		legend: {
			top: 'bottom'
		},
		toolbox: {
			show: true,
		},
		series: [
		{
			name: '标签下文章数量',
			type: 'pie',
			radius: [50, 150],
			center: ['50%', '50%'],
			roseType: 'area',
			itemStyle: {
			borderRadius: 4
			},
			data: [
			{ value: 40, name: 'rose 1' },
			{ value: 38, name: 'rose 2' },
			{ value: 32, name: 'rose 3' },
			{ value: 30, name: 'rose 4' },
			]
		}
		]
	})
	const getCategoryNum = () :void =>{
		getCommentNum().then((res)=>{
			console.log(res);
			setCommentNum(res)
		})
	}
	useEffect(()=>{
		getCategoryNum()
	},[])
	useEffect(()=>{
		const category = echarts.init(categoryChart.current)
		category.setOption(categoryOption);
	},[categoryOption])

	useEffect(()=>{
		const label = echarts.init(labelChart.current)
		label.setOption(labelOption);
	},[labelOption])
	return (
		<div>
			<div className='topNum'>
				<div className='card'>
					<Card title="今日访客数">
						<div className='cardContent'>
							<img width="80px" src="/public/statistics.svg" alt="" />
							<span>100</span>
						</div>
					</Card>
				</div>
				<div className='card'>
					<Card title="今日访问量">
						<div className='cardContent'>
							<img width="80px" src="/public/num.svg" alt="" />
							<span>100</span>
						</div>
					</Card>
				</div>
				<div className='card'>
					<Card title="文章总数">
						<div className='cardContent'>
							<img width="80px" src="/public/doc.svg" alt="" />
							<span>{commentNum}</span>
						</div>
					</Card>
				</div>
				<div className='card'>
					<Card title="评论总数">
						<div className='cardContent'>
							<img width="80px" src="/public/comment.svg" alt="" />
							<span>10</span>
						</div>
					</Card>
				</div>
			</div>
			<div className='charts'>
				<div className='chartsItem'>
					<Card>
						<div className='categoryChart'>
							<div className='categoryTitle'>分类下文章数量</div>
							<div ref={categoryChart} style={{height:'500px',width:'100%'}}></div>
						</div>
					</Card>
				</div>
				<div className='chartsItem'>
					<Card>
						<div className='categoryChart'>
							<div className='categoryTitle'>标签下文章数量</div>
							<div ref={labelChart} style={{height:'500px',width:'100%'}}></div>
						</div>
					</Card>
				</div>
				<div className='chartsItemOne'>
					<Card>
						<ChinaMap/>
					</Card>
				</div>
			</div>
		</div>
	)
}

export default HomePage
