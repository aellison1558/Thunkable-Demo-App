const initialState = {
	apps: [{name: "demo app 1", lastEdited: new Date("August 17, 2017 16:47:00")}]
}

const apps = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_APP':
			return Object.assign({}, state, {apps: state.apps.concat([action.app])})
			break;
		case "DELETE_APP":
			let app = action.app;
			let newAppArray = state.apps.filter((a) => {
				if (a.name == app.name && a.lastEdited.toDateString() == app.lastEdited.toDateString()) {
					return false
				} else {
					return true
				}
			})
			return Object.assign({}, state, {apps: newAppArray})
			break;
		default:
			return state;
	}
}

export default apps;