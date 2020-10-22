import React from 'react'


class ProfilePage extends React.Component {


    handleUpdate = (evt) => {
        console.log(evt.target.value)
    }


    render(){
        let {name, age, gender, bio, looks, smarts, athletic, finance, kindness} = (this.props.user)
        return(
            <div class="myprofile ui grid">
                <div class="profileLeft six wide column">
                    <h1>My profile page</h1>
                    <img src='https://res.cloudinary.com/dfqzcsl8x/image/upload/v1603237135/Project4/blank_leicjd.png' alt="myimage"></img>
                    <h2>{name}</h2>
                    <p>Age: {age}</p>
                    <p>Gender: {gender}</p>
                    <p>Bio: {bio} </p>
                </div>

                <div class="profileRight six wide column"> 
                    <h1> Stats </h1>
                    <table className="ui celled striped padded table">
                        <tbody>
                        <tr>
                           <th><h3 className="ui center aligned header">Looks</h3></th>  
                           <th><h3 className="ui center aligned header">Smarts</h3></th>  
                           <th><h3 className="ui center aligned header">Athletic</h3></th>  
                           <th><h3 className="ui center aligned header">Finance</h3></th>  
                           <th><h3 className="ui center aligned header">Kindness</h3></th>  
                        </tr>
                        <tr>
                              <td><button value="looks-" onClick={this.handleUpdate}> - </button> {looks} <button value="looks+"onClick={this.handleUpdate}> + </button> </td>
                              <td><button value="smarts-" onClick={this.handleUpdate}> - </button> {smarts} <button value="smarts+" onClick={this.handleUpdate}> + </button> </td>
                              <td><button value="athletic-" onClick={this.handleUpdate}> - </button> {athletic} <button value="athletic+" onClick={this.handleUpdate}> + </button> </td>
                              <td><button value="finance-" onClick={this.handleUpdate}> - </button> {finance} <button value="finance+" onClick={this.handleUpdate}> + </button> </td>
                              <td><button value="kindness-" onClick={this.handleUpdate}> - </button> {kindness} <button value="kindness+" onClick={this.handleUpdate}> + </button> </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
              
            </div>
        )
    }
}

export default ProfilePage