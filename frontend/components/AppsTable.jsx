import React from 'react'
import CreateButton from './CreateButton.jsx'
import AppsTableEntry from './AppsTableEntry.jsx'

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
				<CreateButton />
				<ul>
					{apps}
				</ul>
			</div>
		)
	}
}

export default AppsTable;