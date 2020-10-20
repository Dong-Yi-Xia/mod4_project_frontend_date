import React from 'react'

class LoginForm extends React.Component{

    state = {
        username: "",
        password: ""
      }
    
      handleSubmit = (e) => {
        e.preventDefault()
        // this.props.handleSubmit(this.state)
      }
    
      handleChange = (e) => {
        let {name, value} = e.target
        this.setState({
          [name]: value
        })
      }

    render(){

        let {username, password} = this.state

        return(
            <div className="formContainer">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input type="text"  name="username" value={username} onChange={this.handleChange}/>
                    <label htmlFor="password">Password:</label>
                    <input type="password"  name="password" value={password} onChange={this.handleChange}/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default LoginForm