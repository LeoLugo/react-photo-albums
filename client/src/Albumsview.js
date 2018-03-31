import React, { Component } from 'react';
import {getAlbumCovers} from './Albumaction'
import './Albumsview.css'
import {Link} from 'react-router-dom'

import {connect} from 'react-redux'


class Albumsview extends Component {

	componentDidMount() {
		getAlbumCovers()
	}

	render() {
		return(
			<div className="main-albums">
				<div className="main-header"><h1>Cool Albums</h1></div>
				<div className="albumscontent">
					{this.props.albums.map(album => (
						<div key={"album" + album.id} className="album"><Link to={"/album/" + album.id}><div className="albumsimage"><img alt="" src={album.pic}/></div></Link><h3 className="albumtitle">{album.albumtitle}</h3></div>
						))}
				</div>
			</div>

			)
	}
}

function mapStateToProps(state) {
	return {
		albums: state.albums
	}
}


export default connect(mapStateToProps)(Albumsview)