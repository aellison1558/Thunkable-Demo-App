import React from 'react'
import AppsTableEntry from './AppsTableEntry.jsx'
import CreateAppForm from './CreateAppForm.jsx'

class AppsTable extends React.Component {
	render() {
		const apps = this.props.apps.map((app) => {
			return(
				<li>
					<AppsTableEntry app={app} deleteApp={this.props.deleteApp} />
				</li>
			)
		})
		return(
			<div className='app-table'>
				
				<ul>
					<li>
						<div className="app-detail">
							<CreateAppForm addApp={this.props.addApp}/>
						</div>
					</li>
					{apps}
				</ul>
			</div>
		)
	}
}

export default AppsTable;