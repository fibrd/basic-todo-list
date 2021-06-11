import React, { useState, useRef } from 'react'

interface Props {
	onInputSubmit: (data: string) => void
}

export const ListInput = (props: Props) => {
	const { onInputSubmit } = props
	const [todoItem, setTodoItem] = useState('')
	const input = useRef(null)

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTodoItem(e.target.value)
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (todoItem) {
			onInputSubmit(todoItem)
			setTodoItem('')
		}
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					autoFocus
					ref={input}
					type="text"
					value={todoItem}
					onChange={handleInput}
				/>
			</form>
		</div>
	)
}
