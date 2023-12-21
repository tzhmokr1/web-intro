import React, { Component } from 'react'
import './styles.css'

const STORAGE_KEY = 'text-value'

export default class App extends Component {
	state = { text: localStorage.getItem(STORAGE_KEY) || '' }

	render() {
		return (
			<div className="App">
				<input value={this.state.text} onChange={this.updateText} />
				<button onClick={this.saveText}>Save Text</button>
			</div>
		)
	}

	updateText = (event) => {
		const text = event.target.value
		this.setState({ text })
		// Save each key stroke:
		// localStorage.setItem(STORAGE_KEY, text)
	}

	saveText = () => {
		localStorage.setItem(STORAGE_KEY, this.state.text)
	}
}