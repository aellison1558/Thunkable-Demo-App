import React from 'react'
import CreateButton from './CreateButton.jsx'
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
				<CreateButton addApp={this.props.addApp} />
				<CreateAppForm />
				<ul>
					{apps}
				</ul>
			</div>
		)
	}
}

export default AppsTable;