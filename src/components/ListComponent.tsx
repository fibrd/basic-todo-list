import React from 'react'

interface Props {
	listItems: { id: number; title: string }[]
	onListItemRemove: (listItemId: number) => void
}

export const ListComponent = (props: Props) => {
	const { listItems, onListItemRemove } = props

	return (
		<div>
			<ol>
				{listItems.map(li => (
					<li key={li.id}>
						{li.title}
						<button onClick={() => onListItemRemove(li.id)}>x</button>
					</li>
				))}
			</ol>
		</div>
	)
}
