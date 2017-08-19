import React from 'react'
import SearchField from './SearchField.jsx'
import SortField from './SortField.jsx'

class FilterBar extends React.Component {
	render() {
		return(
			<div>
				<SearchField />
				<SortField sortApps={this.props.sortApps}/>
			</div>
		)
	}
}

export default FilterBar;