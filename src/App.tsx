import React from 'react'
import './App.scss'

// components
import { TodoList } from './views/TodoList'

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<TodoList />
			</header>
		</div>
	)
}

export default App
