const tree = {
	val:'1',
	children:[
		{
			val:'2',
			children:[
				{
					val:'4',
				},
				{
					val:'5',
				}
			]
		},
		{
			val:'3',
			children:[
				{
					val:'6',
				},
				{
					val:'7',
				}
			]
		}
	]
}
console.log('深度度优先遍历')
//深度优先遍历
const dfs = (root)=>{
	root.children?.forEach(dfs)
}

dfs(tree)
console.log('广度度优先遍历')
//广度度优先遍历
const bfs = (root) => {
	// 新建一个队列，并把根节点先放到队列里面
	const q = [root];
	while(q.length > 0){
		// 不断进行出队，访问
		const n = q.shift();
		// 边出队边访问
		console.log(n.val);
		// 把队头的children挨个入队，退到队列里面
		n.children?.forEach(child => {
			q.push(child);
		});
	}
}

bfs(tree)

