import React from 'react'
import {Button, Modal, form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap'

class CreateAppForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			nameValue: "",
			imageValue: "",
			urlValue: "https://itunes.apple.com/us/genre/ios/id36?mt=8"
		}
		this.close = this.close.bind(this);
		this.open = this.open.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleURLChange = this.handleURLChange.bind(this);
	}

	close() {
		this.setState({showModal: false})
	}

	open() {
		this.setState({showModal: true})
	}

	handleNameChange(e) {
		e.preventDefault();
		this.setState({nameValue: e.target.value})
	}

	handleURLChange(e) {
		e.preventDefault();
		this.setState({urlValue: e.target.value})
	}

	handleSubmit(e) {
		e.preventDefault();

		this.props.addApp({name: this.state.nameValue, lastEdited: new Date(), appStoreURL: this.state.urlValue});
		this.setState({showModal: false, nameValue: ""})
	}

	render() {
		let showModal = this.state.showModal;
		let close = this.close;
		return(
			<div onClick={this.open}>
				<div className="new-app-box">
					<div className="new-app-icon">
						<img src="./assets/images/plus .png"/>
					</div>
					<div>
						Create New App
					</div>
				</div>

				<Modal show={showModal} onHide={close}>
		          <Modal.Header closeButton>
			            <Modal.Title>Modal heading</Modal.Title>
			          </Modal.Header>
			          <Modal.Body>
				            <form>
						        <FormGroup
						          controlId="formName"
						        >
						          <ControlLabel>App Name</ControlLabel>
						          <FormControl
						            type="text"
						            value={this.state.nameValue}
						            placeholder="Enter text"
						            onChange={this.handleNameChange}
						          />
						        </FormGroup>

						        <FormGroup
						          controlId="formURL"
						        >
						          <ControlLabel>URL to App in App Store</ControlLabel>
						          <FormControl
						            type="text"
						            value={this.state.urlValue}
						            onChange={this.handleURLChange}
						          />
						        </FormGroup>

						  		<Button type="submit" onClick={this.handleSubmit}>
						  			Create App
						  		</Button>
						      </form>
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