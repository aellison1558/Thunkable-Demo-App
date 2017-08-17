const initialState = {
	apps: [{name: "demo app 1", lastEdited: new Date("August 17, 2017 16:47:00")}]
}

const apps = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
}

export default apps;