import React, {Component} from 'react'
import {getPic} from './Albumaction.js'
import {connect} from 'react-redux'

class Imagesum extends Component {

	componentDidMount(){
		getPic(this.props.match.params.id)
		console.log(this.props)
	}				

	componentWillReceiveProps(newprops) {
		if (newprops.match.params.id !== this.props.match.params.id) {
			getPic(newprops.match.params.id)
			console.log(this.props)
		}
	}


	render() {
		return(

			<div>
				<button onClick={()=>{this.props.history.goBack()}}>Back</button>
				<div><img alt="" src={this.props.pic}/></div>
			</div>


			)
	}
}

function mapStateToProps(state){
	
	return {
		pic: state.pic.pic
	}
}

export default connect(mapStateToProps)(Imagesum)