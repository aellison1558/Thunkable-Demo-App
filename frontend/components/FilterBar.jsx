import React from 'react'
import SearchField from './SearchField.jsx'
import SortField from './SortField.jsx'

class FilterBar extends React.Component {
	render() {
		return(
			<div>
				<SearchField />
				<SortField />
			</div>
		)
	}
}

export default FilterBar;