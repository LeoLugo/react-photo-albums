import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {getImages} from './Albumaction.js'
import LeftNav from './LeftNav'
import {connect} from 'react-redux'
import './Albumsum.css'
import addpic from './resources/addpic.svg'

class Albumsum extends Component {
	componentDidMount(){
		getImages(this.props.match.params.id)
	}

	componentWillReceiveProps(newprops) {
		if (newprops.match.params.id !== this.props.match.params.id) {
			getImages(newprops.match.params.id)
		}
	}

	render() {
		return(
			<div className="albumsumcontainer">
				<LeftNav />
				<div className="addownpic"><Link to="/addpicture"><img className="addpicture" alt="" src={addpic}/></Link></div>
				<div className="sumcontent">
					{this.props.images.map(image => (
						<div key={"image" + image.id}>
					<Link to={"/images/" + image.id}><div className="sumphoto"><img alt="" src={image.pic}/></div>
					<div className="albumsumtitle">{image.pictitle}</div></Link>
					</div>
						))}
				</div>
			</div>



			)
	}
}


function mapStateToProps(state){
	return {
		images: state.images
	}
}


export default connect(mapStateToProps)(Albumsum)