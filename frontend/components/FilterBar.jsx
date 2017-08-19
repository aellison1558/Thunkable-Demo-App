import React from 'react'
import SearchField from './SearchField.jsx'
import SortField from './SortField.jsx'

class FilterBar extends React.Component {
	render() {
		return(
			<div>
				<SearchField searchApps={this.props.searchApps}/>
				<SortField toggleSort={this.props.toggleSort}/>
			</div>
		)
	}
}

export default FilterBar;