import React from 'react'


class RegisterForm extends React.Component{
    state = {
        username: "",
        password: "",
        name: "", 
        age: "", 
        gender: "", 
        bio: "", 
        looks: "",
        smarts: "",
        athletic: "", 
        finance: "", 
        kindness: ""
      }
    
      handleSubmit = (evt) => {
        evt.preventDefault()
        let {username, password, name, age, gender, bio, looks, smarts, athletic, finance, kindness} = this.state
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
              "Content-Type": "Application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password,
                name: name, 
                age: age, 
                gender: gender, 
                bio: bio, 
                looks: looks,
                smarts: smarts,
                athletic: athletic, 
                finance: finance, 
                kindness: kindness
            })
          })
          .then(res => res.json())
          .then(createdUser => {
            console.log(createdUser)
            this.props.history.push("/")
          })
        
      }
    
      handleChange = (evt) => {
        let {name, value} = evt.target
        this.setState({
          [name]: value
        })
      }

    render(){
        console.log(this.props)
        let {username, password, name, age, gender, bio, looks, smarts, athletic, finance, kindness} = this.state

        return(
            <div className="formContainer">
                <form onSubmit={this.handleSubmit}>
                     <h1>User Registration</h1>
                    <input type="text" placeholder="username" name="username" 
                      value={username} onChange={this.handleChange} required
                      />
                    <input type="password" placeholder="password" name="password" 
                      value={password} onChange={this.handleChange} required
                      />
                    <input type="text" placeholder="name" name="name" 
                      value={name} onChange={this.handleChange} required
                      />
                    <input type="number" placeholder="age" name="age" 
                      value={age} onChange={this.handleChange} required
                      /> 
                    <input type="text" placeholder="gender" name="gender" 
                      value={gender} onChange={this.handleChange} required
                      />   
                    <textarea type="text" placeholder="bio" name="bio" 
                      value={bio} onChange={this.handleChange} required
                      />
                    <input type="number" placeholder="looks Max:10points" name="looks" min="1" max="10" 
                      value={looks} onChange={this.handleChange} required
                      />
                    <input type="number" placeholder="smarts Max:10points" name="smarts" min="1" max="10" 
                      value={smarts} onChange={this.handleChange} required
                      />    
                    <input type="number" placeholder="athletic Max:10points" name="athletic" min="1" max="10" 
                      value={athletic} onChange={this.handleChange} required
                      />  
                    <input type="number" placeholder="finance Max:10points" name="finance" min="1" max="10" 
                      value={finance} onChange={this.handleChange} required
                      />   
                     <input type="number" placeholder="kindness Max:10points" name="kindness" min="1" max="10" 
                      value={kindness} onChange={this.handleChange} required
                      />    
   
                    <button class="ui primary button" type="submit" > Submit </button>
                </form>

            </div>
        )
    }
}

export default RegisterForm