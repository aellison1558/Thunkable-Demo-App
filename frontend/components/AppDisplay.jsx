import React from 'react'
import FilterBar from './FilterBar.jsx'
import AppsTable from './AppsTable.jsx'

class AppDisplay extends React.Component {
	render() {
		return(
			<div>
				<FilterBar />
				<AppsTable apps={this.props.apps} addApp={this.props.addApp}/>
			</div>
		)
	}
} 

export default AppDisplay;