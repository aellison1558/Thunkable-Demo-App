import React from 'react'
import FilterBar from './FilterBar.jsx'
import AppsTable from './AppsTable.jsx'

class AppDisplay extends React.Component {
	constructor(props) {
		
	}
	render() {
		return(
			<div>
				<FilterBar sortApps={this.props.sortApps}/>
				<AppsTable apps={this.props.apps} addApp={this.props.addApp} deleteApp={this.props.deleteApp}/>
			</div>
		)
	}
} 

export default AppDisplay;