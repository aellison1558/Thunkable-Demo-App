const initialState = {
	apps: [{name: "demo app 1", lastEdited: new Date("August 17, 2017 16:47:00")}]
}

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

const apps = (state = initialState, action) => {
	let newAppArray;
	switch (action.type) {
		case 'ADD_APP':
			newAppArray = state.apps.concat([action.app])
			return Object.assign({}, state, {apps: newAppArray})
			break;
		case "DELETE_APP":
			let app = action.app;
			newAppArray = state.apps.filter((a) => {
				if (a.name == app.name && a.lastEdited.toDateString() == app.lastEdited.toDateString()) {
					return false
				} else {
					return true
				}
			})
			return Object.assign({}, state, {apps: newAppArray})
			break;
		case "SORT_APPS":
			if (action.sortField == "name") {
				newAppArray = sortByName(state.apps);
			} else {
				newAppArray = sortByEdit(state.apps);
			}
			return Object.assign({}, state, {apps: newAppArray})
			break;
		default:
			return state;
	}
}

export default apps;