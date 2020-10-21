import React from 'react'

class Appointment extends React.Component{


    render(){
        let {date, location, character, user} = this.props.appointment
        return(
            <div>
                {date}
                {location}
                {character.name}
            
            </div>
        )
    }
}

export default Appointment