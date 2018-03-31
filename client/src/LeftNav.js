import React, {Component} from 'react'
import {getImages} from './Albumaction.js'
import {Link, withRouter} from 'react-router-dom'
import {getAlbumCovers} from './Albumaction'
import {connect} from 'react-redux'

class LeftNav extends Component {

	componentDidMount(){
		getAlbumCovers()
	}

	componentWillReceiveProps(newprops) {
		if (newprops.match.params.id !== this.props.match.params.id) {
			getAlbumCovers(newprops.match.params.id)
		}
	}

	render() {
		return (
			<div className="sumsidebar">
				<div><Link to="/">HOME</Link></div>
				<ul>
				{this.props.albums.map(album => (
						<Link to={"/album/" + album.id}><li>{album.albumtitle}</li></Link>
						))}
				</ul>
			</div>
		)
	}
}


function mapStateToProps(state) {
	return {
		albums: state.albums
	}
}


export default withRouter(connect(mapStateToProps)(LeftNav))