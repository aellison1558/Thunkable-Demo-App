import React from 'react'
import FilterBar from './FilterBar.jsx'
import AppsTable from './AppsTable.jsx'

const sortByName = (apps) => {
	console.log()
	return apps.sort((a, b) => {
		if (a.name < b.name) {
			return -1
		} else if (a.name == b.name) {
			return 0
		} else {
			return 1
		}

	})
}

const sortByEdit = (apps) => {
	return apps.sort((a, b) => {
		if (a.lastEdited < b.lastEdited) {
			return -1
		} else if (a.lastEdited == b.lastEdited) {
			return 0
		} else {
			return 1
		}

	})
}

class AppDisplay extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			appsToShow: this.props.apps,
			sortField: "lastEdit"
		}

		this.toggleSort = this.toggleSort.bind(this);
		this.searchApps = this.searchApps.bind(this);
	}

	componentWillReceiveProps(newProps) {
		this.setState({appsToShow: this.sortApps(this.state.sortField, newProps.apps)});
	}

	sortApps(sortField, apps) {
		if (sortField == "name") {
			return sortByName(apps);
		} else {
			return sortByEdit(apps);
		}
	}

	toggleSort(sortField) {
		this.setState({
			sortField: sortField,
			appsToShow: this.sortApps(sortField, this.state.appsToShow)
		});
	}

	searchApps(searchValue) {
		let newAppsArray = []

		if (searchValue == "") {
			newAppsArray = this.props.apps;
		} else {
			newAppsArray = this.props.apps.filter((app) => {
				return app.name.match(searchValue);
			})
		}
		this.setState({
			appsToShow: this.sortApps(this.state.sortField, newAppsArray)
		})
	}

	render() {
		return(
			<div>
				<FilterBar toggleSort={this.toggleSort} searchApps={this.searchApps}/>
				<AppsTable apps={this.state.appsToShow} addApp={this.props.addApp} deleteApp={this.props.deleteApp}/>
			</div>
		)
	}
} 

export default AppDisplay;