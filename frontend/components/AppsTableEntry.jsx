import React from 'react'

class AppsTableEntry extends React.Component {
	render() {
		return(
			<div>
				{this.props.app.name}
			</div>
		)
	}
}

export default AppsTableEntry;