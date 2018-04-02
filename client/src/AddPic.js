import React, { Component } from 'react'
import axios from 'axios'


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
		axios.post('http://localhost:3001/images/', this.state).then(resp => {
			this.props.history.push('/')
		}).catch(e => {
			
		})

	}

	render() {
		return (
			<div>
				<h1>Add Picture</h1>
				<form onSubmit={this.manageSubmit}>
					<div>
						<label for="pictureTitle">Enter Picture Title</label>
						<input onChange={this.manageChange} value={this.state.pictitle}type="text" name="pictitle" id="pictureTitle"/>
					</div>
					<div>
						<label for="pictureUrl">Enter Picture URL</label>
						<input onChange={this.manageChange} value={this.state.pic} type="text" name="pic" id="pictureUrl"/>
					</div>
					<button type="submit">Add My Picture</button>
				</form>
			</div>
		)
	}
}

export default AddPic