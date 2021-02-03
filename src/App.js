import React from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Button, Form, FormControl } from "react-bootstrap"

class App extends React.Component {
	state = {
		location: "",
		description: "",
		results: [],
	}
	constructor(props) {
		super(props)
	}
	handleinput = (event) => {
		console.log(event.target.value)
		const newstate = {}
		newstate[event.target.placeholder] = event.target.value
		this.setState(newstate)
	}
	search = async (event) => {
		event.preventDefault()
		let response
		try {
			response = await fetch(
				`/positions.json?description=${this.state.description}&location=${this.state.location}`
			)
			//console.log("ok", JSON.stringify(response))
			response = await response.json()
			//console.log("ok", JSON.stringify(response))
			this.setState({ results: response })
		} catch (error) {
			console.log("error", error)
		}
	}
	componentDidUpdate = (oldprops) => {
		console.log("yeah we got an update")
	}
	render() {
		return (
			<div className="">
				<div className="container mx-auto my-5 rounded-10 border border-dark">
					<Form inline onSubmit={this.search}>
						<FormControl
							type="text"
							placeholder="location"
							className="w-100 text-center my-1"
							value={this.state.location}
							onChange={this.handleinput}
						></FormControl>
						<br />
						<FormControl
							type="text"
							placeholder="description"
							className="w-100 text-center my-1"
							value={this.state.description}
							onChange={this.handleinput}
						></FormControl>
						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
				</div>
				<div className="container mx-auto">
					{this.state.results !== [] &&
						this.state.results.map((job, index) => (
							<div>
								<b>Company: </b>
								{job.company}
								<b> Location: </b>
								{job.location}
							</div>
						))}
				</div>
			</div>
		)
	}
}

export default App
