import React from 'react'
import { connect } from 'react-redux'
import AppDisplay from './AppDisplay.jsx'

const mapStateToProps = (state, ownProps) => {
	return {
		apps: state.apps
	}
}

class AppContainer extends React.Component {
	render() {
		return(
			<div>
				<AppDisplay apps={this.props.apps}/>
			</div>
		)
	}
} 

export default connect(mapStateToProps)(AppContainer);