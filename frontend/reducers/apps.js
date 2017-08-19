const initialState = {
	apps: [
		{name: "demo app 2", lastEdited: new Date("August 17, 2017 16:47:00"), appStoreURL: "https://itunes.apple.com/us/genre/ios/id36?mt=8"},
		{name: "app 1", lastEdited: new Date("August 18, 2017 16:47:00"), appStoreURL: "https://itunes.apple.com/us/genre/ios/id36?mt=8"}
	]
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
		default:
			return state;
	}
}

export default apps;