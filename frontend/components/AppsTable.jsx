import React from 'react'
import CreateButton from './CreateButton.jsx'
import AppsTableEntry from './AppsTableEntry.jsx'

class AppsTable extends React.Component {
	render() {
		return(
			<div>
				<CreateButton />
				<AppsTableEntry />
			</div>
		)
	}
}

export default AppsTable;