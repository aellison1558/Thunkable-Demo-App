import React from 'react'
import {Button} from 'react-bootstrap'

const sampleApp = {name: "new app", lastEdited: new Date("August 17, 2017 16:47:00")}

class CreateButton extends React.Component {
	handleClick(event) {
		event.preventDefault();
		this.props.addApp(sampleApp);
	}

	render() {
		return(
			<div>
				<Button bsStyle="primary" onClick={this.handleClick.bind(this)}>Create New App</Button>
			</div>
		)
	}
}

export default CreateButton;