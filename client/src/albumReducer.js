
const initialState = {
	albums : [],
	images : []
}

export default function(state = initialState, action) {
	switch (action.type) {
		case 'GET_ALBUMCOVER':
			return {...state, albums: action.payload}
		case 'GET_IMAGES':
			return {...state, images: action.payload}
		default:
			return state
	}
}