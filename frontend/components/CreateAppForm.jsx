import React from 'react'
import {Button, Modal, OverlayTrigger} from 'react-bootstrap'

class CreateAppForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false
		}
		this.setState = this.setState.bind(this);
		this.close = this.close.bind(this);
		this.open = this.open.bind(this)
	}

	close() {
		this.setState({showModal: false})
	}

	open() {
		this.setState({showModal: true})
	}

	render() {
		let showModal = this.state.showModal;
		let close = this.close;
		return(
			<div>
				<Button onClick={this.open}>Open Modal</Button>

				<Modal show={showModal} onHide={close}>
		          <Modal.Header closeButton>
			            <Modal.Title>Modal heading</Modal.Title>
			          </Modal.Header>
			          <Modal.Body>
			            <h4>Text in a modal</h4>
			            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

			            </Modal.Body>
			          <Modal.Footer>
			            <Button onClick={this.close}>Close</Button>
			          </Modal.Footer>
		        </Modal>
			</div>
			

		)
	}
}

export default CreateAppForm;