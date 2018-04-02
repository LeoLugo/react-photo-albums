import React, {Component} from 'react'
import {getPic} from './Albumaction.js'
import {connect} from 'react-redux'
import './Imagesum.css'
import home from './resources/home.svg'
import back from './resources/back.svg'
import {Link} from 'react-router-dom'

class Imagesum extends Component {

	componentDidMount(){
		getPic(this.props.match.params.id)
		console.log(this)
	}				

	componentWillReceiveProps(newprops) {
		if (newprops.match.params.id !== this.props.match.params.id) {
			getPic(newprops.match.params.id)
			console.log(this)
		}
	}


	render() {
		return(

			<div>
				<div><Link to="/" className="home"><img alt="" src={home} /></Link></div>
				<input type="image" alt="" className="backbutton"src={back} onClick={()=>{this.props.history.goBack()}} />
				<div className="imagesumpic"><img alt="" src={this.props.pic.pic}/></div>
				<div className="imagesumtitle">{this.props.pic.pictitle}</div>
			</div>


			)
	}
}

function mapStateToProps(state){
	
	return {
		pic: state.pic
	}
}

export default connect(mapStateToProps)(Imagesum)