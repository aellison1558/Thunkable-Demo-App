import React from 'react'
import { connect } from 'react-redux'
import AppDisplay from './AppDisplay.jsx'
import {addApp, deleteApp} from '../actions/AppActions.js'

const mapStateToProps = (state, ownProps) => {
	return {
		apps: state.apps
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addApp: app => {
			dispatch(addApp(app));
		},

		deleteApp: app=> {
			dispatch(deleteApp(app));
		}
	}
}

class AppContainer extends React.Component {
	render() {
		return(
			<div className="app-container">
				<AppDisplay apps={this.props.apps} addApp={this.props.addApp} deleteApp={this.props.deleteApp}/>
			</div>
		)
	}
} 

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);