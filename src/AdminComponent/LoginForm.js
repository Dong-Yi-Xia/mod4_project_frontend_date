import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import RegisterForm from './RegisterForm'

class LoginForm extends React.Component{

    state = {
        username: "",
        password: ""
      }
    
      handleSubmit = (evt) => {
        evt.preventDefault()
        // this.props.handleSubmit(this.state)
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