import React from 'react'
import AppsTableEntry from './AppsTableEntry.jsx'
import CreateAppForm from './CreateAppForm.jsx'

class AppsTable extends React.Component {
	render() {
		const apps = this.props.apps.map((app) => {
			return(
				<li>
					<AppsTableEntry app={app} />
				</li>
			)
		})
		return(
			<div>
				<CreateAppForm addApp={this.props.addApp}/>
				<ul>
					{apps}
				</ul>
			</div>
		)
	}
}

export default AppsTable;