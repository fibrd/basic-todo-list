import React, { useEffect, useState } from 'react'

// children
import { ListInput } from '../components/ListInput'
import { ListComponent } from '../components/ListComponent'

export const TodoList = () => {
	const [listItems, setListItems] = useState([
		{ id: 1, title: 'first I do this' },
		{ id: 2, title: 'then I ll do that' },
	])
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then(res => res.json())
			.then(res => setListItems(res.splice(0, 10)))
	}, [])

	const handleInputSubmit = (data: string) => {
		const id =
			listItems.length > 0 ? Math.max(...listItems.map(li => li.id)) + 1 : 1
		const newItem = {
			id,
			title: data,
		}
		setListItems([...listItems, newItem])
	}

	const handleListItemRemove = (listItemId: number) => {
		setListItems(listItems => listItems.filter(li => li.id !== listItemId))
	}

	return (
		<div>
			<h1>TODO LIST</h1>
			<ListInput onInputSubmit={handleInputSubmit} />
			<hr />
			<ListComponent
				listItems={listItems}
				onListItemRemove={handleListItemRemove}
			/>
		</div>
	)
}
