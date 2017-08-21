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
		this.download = this.download.bind(this);
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

	download() {
		window.open(this.props.app.appStoreURL);
	}

	render() {
		return(
			<div className="app-detail">
				<div className="app-detail-image">
					<img src={this.props.app.imageURL ? this.props.app.imageURL : "./assets/images/defaut icon.png"} />
				</div>
				<div className="app-detail-name">
					{this.props.app.name}
				</div>
				<div className="app-detail-edited">
					Last Edit: {this.props.app.lastEdited.toLocaleDateString()}
				</div>

				<div >
					<img onClick={this.open} src="./assets/images/delete.png"/>
					<img onClick={this.download} src="./assets/images/download.png" />
				</div>

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