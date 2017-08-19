import React from 'react'
import {Button, Modal} from 'react-bootstrap'

class AppsTableEntry extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			showModal: false
		}
		this.close = this.close.bind(this);
		this.open = this.open.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}
	handleDelete(e) {
		e.preventDefault();
		this.props.deleteApp(this.props.app);
	}

	close() {
		this.setState({showModal: false})
	}

	open() {
		this.setState({showModal: true})
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

				<Button onClick={this.open}>
					<img src="./assets/images/delete.png"/>
				</Button>

				<Modal show={this.state.showModal} onHide={close}>
		          <Modal.Header closeButton>
		            <Modal.Title>Modal heading</Modal.Title>
		          </Modal.Header>
		          <Modal.Body>
		            Are you sure you want to delete {this.props.app.name}?

			  		<Button onClick={this.handleDelete}>Delete App</Button>

			  		<Button onClick={this.close}>Cancel</Button>
	              </Modal.Body>
		            
		        </Modal>
			</div>
		)
	}
}

export default AppsTableEntry;