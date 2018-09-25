import React, { Component } from 'react'

export class SignIn extends Component {
  state = {
    email:'',
    password:''
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
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.changeHandler}/>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.changeHandler}/>
          </div>
          <div className="input-field">
            <button className="btn blue lighten-1 z-depth-0">Login</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
