import React from 'react'
import CharacterDateForm from './CharacterDateForm'
import CharacterAppointment from './CharacterAppointment'

class CharacterInfoPage extends React.Component{

  
    handleUpdate = (evt) => {

        let value = 0
        if(evt.target.innerText === "-"){
            value = -1 
        } else {
            value = 1
        }
      
        fetch(`/characters/${this.props.character.id}`, {
          method: 'PATCH',
          headers: {
            'content-type' : 'application/json',
            "authorization": this.props.token
          },
          body: JSON.stringify({
            lovePoint: this.props.character.lovePoint + value
          })
        })
        .then (r => r.json())
        .then(updatedLP => {
          if(updatedLP.error){
            alert(updatedLP.error)
          } else {
          this.props.updatedLPFun(updatedLP)
          }
        })
      }

    
    render(){
        // console.log(this.props)
        let {name, age, gender, occupation, lovePoint, favorite, bio, imageURL} = this.props.character  

        return(
            <div class="characterInfo">

              <div class="eachCharacterInformation">
                <img src={imageURL} alt={name}/>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Gender: {gender}</p>
                <p>Occupation: {occupation}</p>
                <p>Lovepoint: <button onClick={this.handleUpdate}> - </button> 
                                 {lovePoint} 
                             <button onClick={this.handleUpdate}> + </button> 
                </p>
                <p>{bio}</p>
              </div>

              
               <CharacterDateForm 
               outfits={this.props.outfits} 
               userID={this.props.userID} 
               characterID={this.props.character.id}
               newAppointmentFun={this.props.newAppointmentFun}
               token={this.props.token}
               />
                
               <CharacterAppointment appointments={this.props.character.appointments} />

                
                
            </div>
        )
    }
}

export default CharacterInfoPage