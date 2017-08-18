import React from 'react'
import { connect } from 'react-redux'
import AppDisplay from './AppDisplay.jsx'
import {addApp} from '../actions/AppActions.js'

const mapStateToProps = (state, ownProps) => {
	return {
		apps: state.apps
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addApp: app => {
			dispatch(addApp(app));
		}
	}
}

class AppContainer extends React.Component {
	render() {
		return(
			<div>
				<AppDisplay apps={this.props.apps} addApp={this.props.addApp}/>
			</div>
		)
	}
} 

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);