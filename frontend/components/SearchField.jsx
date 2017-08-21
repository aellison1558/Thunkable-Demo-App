import React from 'react'
import {Button, form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap'

class SearchField extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			searchValue: "",
			show: false
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.show = this.show.bind(this);
	}

	handleChange(e) {
		e.preventDefault();
		this.setState({searchValue: e.target.value});
	}

	handleSubmit(e) {
		e.preventDefault();

		this.props.searchApps(this.state.searchValue);
	}

	show() {
		this.setState({show: !this.state.show})
	}

	render() {
		return(
			<div className="search-field">
				<form>
					<FormGroup controlId="formSearch">
						<ControlLabel onClick={this.show}><img src="./assets/images/search.png" /></ControlLabel>
						{this.state.show ? <FormControl className="search-input-field" type="text" value={this.state.searchValue} placeholder="Search for apps by name" onChange={this.handleChange} /> : null}
						
					</FormGroup>

					{this.state.show ? <Button type="submit" onClick={this.handleSubmit}>Search</Button> : null}
					
				</form>
			</div>
		)
	}
}

export default SearchField;