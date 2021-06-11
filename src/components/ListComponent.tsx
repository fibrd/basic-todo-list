import React from 'react'

interface Props {
	listItems: { id: number; value: string }[]
	onListItemRemove: (listItemId: number) => void
}

export const ListComponent = (props: Props) => {
	const { listItems, onListItemRemove } = props

	return (
		<div>
			<ol>
				{listItems.map(li => (
					<li key={li.id}>
						{li.value}
						<button onClick={() => onListItemRemove(li.id)}>x</button>
					</li>
				))}
			</ol>
		</div>
	)
}
