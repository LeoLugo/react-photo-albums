import {createStore} from 'redux'

import albumReducer from './albumReducer'

const store = createStore(albumReducer)

export default store