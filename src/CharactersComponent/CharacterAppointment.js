import React from 'react'
import OneAppointment from './OneAppointment'



class CharacterAppointment extends React.Component{

    render(){
        // console.log(this.props)

        let appointArray = this.props.appointments.map(appointmentObj => {
            return <OneAppointment key={appointmentObj.id} appointment={appointmentObj}/>
        })

        return(
            <table className="ui celled striped padded table">
                <tbody>
                <tr>
                    <th>
                    <h3 className="ui center aligned header">Date</h3>
                    </th>
                    <th>
                    <h3 className="ui center aligned header">Location</h3>
                    </th>
                    <th>
                    <h3 className="ui center aligned header">Name of User</h3>
                    </th>
                </tr>
                {appointArray}
                </tbody>
          </table>
        )
    }
}

export default CharacterAppointment