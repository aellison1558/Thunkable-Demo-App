export const addApp = app => {
	return {
		type: 'ADD_APP',
		app: app
	}
}

export const deleteApp = app => {
	return {
		type: "DELETE_APP",
		app: app
	}
}

export const sortApps = sortField => {
	return {
		type: "SORT_APPS",
		sortField: sortField
	}
}

