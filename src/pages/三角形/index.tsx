import React, {useEffect} from "react";
import './index.css'

const src = 'http://47.103.211.10:9090/static/images/girl.jpg'
export const  SJX =  ()=> {


	useEffect(()=>{
		let options = {
			root: null,
			rootMargin: '0px',
			threshold: [0]
		}

		const img = document.getElementById('img') as HTMLImageElement
		const observer = new IntersectionObserver((changes) => {
			// changes: 目标元素集合
			console.log('export')
			changes.forEach((change) => {
				console.log(change)
				// intersectionRatio
				if (change.isIntersecting) {
					const img = change.target as HTMLImageElement
					img.src = src
					observer.unobserve(img)
				}
			})
		},options)
		observer.observe(img)
	})


	return (
			<div className={'sjxCon'}>
				<div className={'sjx'}/>
				<div className={'pla'}/>
				<img id={'img'} alt={''}/>
			</div>
	)
}
