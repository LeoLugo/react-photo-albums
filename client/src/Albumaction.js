import axios from 'axios'
import store from './store.js'

export function getAlbumCovers(){
	axios.get('http://localhost:3001/albums').then(resp => {
		store.dispatch({
			type: 'GET_ALBUMCOVER',
			payload: resp.data
		})
	})
}

export function getImages(id){
	axios.get('http://localhost:3001/images?albumId=' + id).then(resp => {
		store.dispatch({
			type: 'GET_IMAGES',
			payload: resp.data
		})
	})
}
