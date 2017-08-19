import React from 'react'
import {Button} from 'react-bootstrap'

class AppsTableEntry extends React.Component {
	constructor(props) {
		super(props)

		this.handleDelete = this.handleDelete.bind(this);
	}
	handleDelete(e) {
		e.preventDefault();
		this.props.deleteApp(this.props.app);
	}
	render() {
		return(
			<div>
				<div className="app-detail-name">
					{this.props.app.name}
				</div>
				<div className="app-detail-edited">
					{this.props.app.lastEdited.toString()}
				</div>

				<Button onClick={this.handleDelete}>
					<img src="./assets/images/delete.png"/>
				</Button>
			</div>
		)
	}
}

export default AppsTableEntry;