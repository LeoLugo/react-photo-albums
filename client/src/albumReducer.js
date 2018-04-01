
const initialState = {
	albums : [],
	images : [],
	pic: {}
}

export default function(state = initialState, action) {
	switch (action.type) {
		case 'GET_ALBUMCOVER':
			return {...state, albums: action.payload}
		case 'GET_IMAGES':
			return {...state, images: action.payload}
			case 'GET_PIC':
			return {...state, pic: action.payload}
		default:
			return state
	}
}