import React from 'react'
import {Button, form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap'

class SearchField extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			searchValue: ""
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		e.preventDefault();
		this.setState({searchValue: e.target.value});
	}

	handleSubmit(e) {
		e.preventDefault();

		this.props.searchApps(this.state.searchValue);
	}
	render() {
		return(
			<div>
				<form>
					<FormGroup controlId="formSearch">
						<ControlLabel><img src="./assets/images/search.png" /></ControlLabel>
						<FormControl type="text" value={this.state.searchValue} onChange={this.handleChange} />
					</FormGroup>

					<Button type="submit" onClick={this.handleSubmit}>
			  			Search
			  		</Button>
				</form>
			</div>
		)
	}
}

export default SearchField;