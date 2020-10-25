import React from 'react'
import Appointment from './Appointment'


class AppointmentContainer extends React.Component {
    render(){
        let filteredArrayAppointments = this.props.appointments.filter(appointment => {
            return appointment.user.id === this.props.userID
        })
        let componentArray = filteredArrayAppointments.map(appointmentObj => {
            return <Appointment 
                    key={appointmentObj.id}
                    appointment={appointmentObj}
                    deletedAppointmentFun={this.props.deletedAppointmentFun}
                    token={this.props.token}
                    />
        })
        return(
            <div className="appointmentcontainer"> 
            <h1> My Appointments </h1>
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
                            <h3 className="ui center aligned header">Character</h3>
                            </th>
                            <th>
                            <h3 className="ui center aligned header">Outfit Set</h3>
                            </th>
                        </tr>
                            {componentArray}
                    </tbody>
                 </table>
            </div>
        )
    }
}

export default AppointmentContainer