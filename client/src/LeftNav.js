import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {getAlbumCovers} from './Albumaction'
import {connect} from 'react-redux'
import './LeftNav.css'
import home from './resources/home.svg'
import back from './resources/back.svg'

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
				<div><Link to="/" className="home"><img alt="" src={home} /></Link></div>
				<input type="image" alt="" className="backbutton"src={back} onClick={()=>{this.props.history.goBack()}} />
				<div className="mainnav">
				{this.props.albums.map(album => (
						<div key={"albumlink" + album.id} className="nav"><Link to={"/album/" + album.id}>{album.albumtitle}</Link></div>
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


export default withRouter(connect(mapStateToProps)(LeftNav))