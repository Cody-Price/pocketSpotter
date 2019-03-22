export const exerciseReducer = (state=[], action) => {
	switch(action.type) {
	case 'ADD_EXERCISE':
		return [...state, action.exercise]
	default: 
		return state
	}
}