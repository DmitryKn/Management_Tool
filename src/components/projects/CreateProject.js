import React, { Component } from 'react'

class CreateProject extends Component {
  state = {
    title:'',
    content:''
  }
  changeHandler = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="container">
        <form action="" className="white" onSubmit={this.submitHandler}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.changeHandler}/>
          </div>
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea className="materialize-textarea" id="content" onChange={this.changeHandler}></textarea>
          </div>
          <div className="input-field">
            <button className="btn blue lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateProject
