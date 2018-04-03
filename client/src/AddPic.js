import React, { Component } from 'react'
import axios from 'axios'
import home from './resources/home.svg'
import back from './resources/back.svg'
import {Link} from 'react-router-dom'
import './AddPic.css'

class AddPic extends Component {

	state = {
		pic: "",
		pictitle: ""
	}

	manageChange = (e) => {
		this.setState({
			[e.target.name] : e.target.value
		})
	}

	manageSubmit = (e) => {
		e.preventDefault()
		axios.post('http://localhost:3001/images/', {
			pic: this.state.pic,
			pictitle: this.state.pictitle,
			albumId:this.props.match.params.albumId
		}).then(resp => {
			this.props.history.push('/')
		}).catch(e => {
			
		})

	}

	render() {
		return (
			<div>
			<div><Link to="/" className="home"><img alt="" src={home} /></Link></div>
				<input type="image" alt="" className="backbutton"src={back} onClick={()=>{this.props.history.goBack()}} />
				<div className="addpicmain">
				<h1 className="addpictitle">Add Picture</h1>
				<form onSubmit={this.manageSubmit}>
					<div className="addpicpictitle">
						<label htmlFor="pictureTitle">Enter Picture Title:</label>
						<input onChange={this.manageChange} value={this.state.pictitle}type="text" name="pictitle" id="pictureTitle"/>
					</div>
					<div className="addpicpicurl">
						<label htmlFor="pictureUrl">Enter Picture URL:</label>
						<input onChange={this.manageChange} value={this.state.pic} type="text" name="pic" id="pictureUrl"/>
					</div>
					<button type="submit">Add My Picture</button>
				</form>
				</div>
			</div>
		)
	}
}

export default AddPic