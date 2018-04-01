import React, {Component} from 'react'
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
				<button onClick={()=>{this.props.history.goBack()}}>Back</button>
				<ul>
				{this.props.albums.map(album => (
						<div key={"albumlink" + album.id}><Link to={"/album/" + album.id}><li>{album.albumtitle}</li></Link></div>
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