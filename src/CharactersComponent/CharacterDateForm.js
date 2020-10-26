import React from 'react'
import OutfitNameList from './OutfitNameList'


class CharacterDateForm extends React.Component{

    state = {
        date: "",
        location: "",
        outfit: ""
    }

    handleChange = (evt) => {
        let {name, value} = evt.target
        this.setState({
          [name]: value
        })
    }

    outfitStateFun = (info) => { 
        this.setState({
          outfit: info
        })
    }


    handleSubmit =(evt) => {
        evt.preventDefault()
        let{ date, location, outfit} = this.state

        fetch("/appointments", {
            method: 'POST',
            headers: {
                "Content-Type": "Application/json",
                "authorization": this.props.token
            },
            body: JSON.stringify({
              date: date,
              location: location,
              character_id: this.props.characterID,
              user_id: this.props.userID,
              outfit_id: outfit
            })
        })
        .then(r => r.json())
        .then(newAppointment => {
            if(newAppointment.error){
                alert(newAppointment.error)
              } else {
            this.props.newAppointmentFun(newAppointment)
            }
        })
    }
    
    render(){
        
        return(
            <form className="ui form" onSubmit={this.handleSubmit}>
                <div className="inline fields">
                    <input 
                        type="date" 
                        name="date" 
                        value={this.state.date}
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text" 
                        name="location" 
                        placeholder="location" 
                        value={this.state.location}
                        onChange={this.handleChange}
                    />
                    {/* select */}
                        < OutfitNameList 
                        outfits={this.props.outfits}
                        theState={this.state}
                        outfitStateFun={this.outfitStateFun}
                        />
                     {/* select */}
                </div>
                <button className="ui button" type="submit" > 
                Request A Date
                </button>
            </form>
        )
    }
}

export default CharacterDateForm