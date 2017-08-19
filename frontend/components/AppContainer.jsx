import React from 'react'
import { connect } from 'react-redux'
import AppDisplay from './AppDisplay.jsx'
import {addApp, deleteApp, sortApps} from '../actions/AppActions.js'

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
		},

		sortApps: sortField => {
			dispatch(sortApps(sortField))
		}
	}
}

class AppContainer extends React.Component {
	render() {
		return(
			<div>
				<AppDisplay apps={this.props.apps} addApp={this.props.addApp} deleteApp={this.props.deleteApp} sortApps={this.props.sortApps}/>
			</div>
		)
	}
} 

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);