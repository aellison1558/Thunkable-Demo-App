import React from 'react'

class AppsTableEntry extends React.Component {
	render() {
		return(
			<div>
				
				{this.props.app.name}
				\n
				{this.props.app.lastEdited.toString()}
			</div>
		)
	}
}

export default AppsTableEntry;