import React, {useCallback, useEffect, useRef, useState} from "react";
import './index.css'

interface User {
	name:string
	age:string
}

const options = {
	root: null,
	rootMargin: '0px',
	threshold: [0]
}

export const InfinityScroll = ()=>{
	const [list,setList] = useState<User[]>([])
	const observeRef = useRef<IntersectionObserver>()

	const loadItem = useCallback((count:number)=>{
		const tempList:User[] = []
		for (let i = 1; i <= count; i++) {
			tempList.push({name:'名字'+(i+list.length),age:'年龄'+(i+list.length)})
		}
		setList([...list,...tempList])
	},[list.length])

	const callback = useCallback((changes)=>{
		changes.forEach((change:any) => {
			if (change.isIntersecting) {
				loadItem(10)
			}
		})
	},[list.length])


	useEffect(()=>{
		const footer = document.getElementById('listFooter') as HTMLDivElement
		if (observeRef.current){
			observeRef.current?.disconnect()
			observeRef.current = undefined
		}
		observeRef.current = new IntersectionObserver(callback,options)
		observeRef.current?.observe(footer)
	},[list.length])


	useEffect(()=>{

		loadItem(20)

	},[])

	return (
			<div className={'listCon'}>
				{
					list.map((item)=>{
						return (
								<div className={'listItem'} key={item.name}>
									<div style={{marginRight:30}}>{item.name}</div>
									<div >{item.age}</div>
								</div>
						)
					})
				}
				<div className={'listFooter'} id={'listFooter'}>
					<div>这是底部</div>
				</div>
			</div>
	)
}
