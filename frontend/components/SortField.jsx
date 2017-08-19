import React from 'react'
import {form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap'

class SortField extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			sortBy: "lastEdit"
		}

		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(e) {
		e.preventDefault()

		this.setState({sortBy: e.target.value})
	}

	render() {
		return(
			<div>
				<form>
					<FormGroup controlId="formSort">
						<ControlLabel>Sort by:</ControlLabel>
						<FormControl componentClass="select" placeholder="select" onChange={this.handleChange}>
					      <option value="lastEdit">Last Edited</option>
					      <option value="name">name</option>
					    </FormControl>
					</FormGroup>
				</form>
			</div>
		)
	}
}

export default SortField;