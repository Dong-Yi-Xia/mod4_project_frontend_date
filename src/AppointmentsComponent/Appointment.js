import React from 'react'

class Appointment extends React.Component{


    handleDelete = (evt) => {
        fetch(`http://localhost:3000/appointments/${this.props.appointment.id}`, {
          method: 'DELETE',
        })
        .then (r => r.json())
        .then(deletedAppointment => {
          this.props.deletedAppointmentFun(this.props.appointment)
        })
      }


    render(){
    
        let {date, location, character, outfit} = this.props.appointment
        return(
            <tr>
                <td>{date}</td>
                <td>{location}</td>
                <td>{character.name}</td>
                <td>{outfit.outfitname}</td>
                <td> <button className="ui button" onClick={this.handleDelete}>  X </button></td>
            </tr>
        
        )
    }
}

export default Appointment