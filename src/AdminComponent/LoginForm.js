import React from 'react'
import { NavLink } from 'react-router-dom'


class LoginForm extends React.Component{

    state = {
        username: "",
        password: ""
      }
    
      handleSubmit = (evt) => {
        evt.preventDefault()
        fetch("/users/login",{
          method: "POST",
          headers: {
           "Content-Type": "Application/json"
           },
          body: JSON.stringify({
            username: this.state.username,
            password: this.state.password
          })
        })
        .then(r => r.json())
        .then(userResult => {
          this.props.userInfoFun(userResult)
        })
      }
    
      handleChange = (evt) => {
        let {name, value} = evt.target
        this.setState({
          [name]: value
        })
      }

    render(){

        let {username, password} = this.state

        return(
            <div className="formContainer">
                <form onSubmit={this.handleSubmit}>
                     <h1>LogIn</h1>
                    <input type="text" placeholder="username" name="username" 
                      value={username} onChange={this.handleChange}
                      />
                    <input type="password" placeholder="password" name="password" 
                      value={password} onChange={this.handleChange}
                      />
                    <button class="ui primary button" type="submit" > Submit </button>
                    <NavLink  to="/register">
                      <button class="ui button"> Register </button>
                    </NavLink>
                </form>

            </div>
        )
    }
}

export default LoginForm