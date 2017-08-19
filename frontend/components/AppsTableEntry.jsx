import React from 'react'

class AppsTableEntry extends React.Component {
	render() {
		return(
			<div>
				<div className="app-detail-name">
					{this.props.app.name}
				</div>
				<div className="app-detail-edited">
					{this.props.app.lastEdited.toString()}
				</div>
			</div>
		)
	}
}

export default AppsTableEntry;