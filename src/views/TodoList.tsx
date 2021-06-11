import React, { useState } from 'react'

// children
import { ListInput } from '../components/ListInput'
import { ListComponent } from '../components/ListComponent'

interface Props {}

export const TodoList = (props: Props) => {
	const [listItems, setListItems] = useState([
		{ id: 1, value: 'first I do this' },
		{ id: 2, value: 'then I ll do that' },
	])

	const handleInputSubmit = (data: string) => {
		const id =
			listItems.length > 0 ? Math.max(...listItems.map(li => li.id)) + 1 : 1
		const newItem = {
			id,
			value: data,
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
