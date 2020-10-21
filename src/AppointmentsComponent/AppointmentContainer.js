import React from 'react'
import Appointment from './Appointment'


class AppointmentContainer extends React.Component {
    render(){
        let filteredArrayAppointments = this.props.appointments.filter(appointment => {
            return appointment.user.id === this.props.userID
        })
        let componentArray = filteredArrayAppointments.map(appointmentObj => {
            return <Appointment 
                    key={appointmentObj}
                    appointment={appointmentObj}
                    />
        })
        return(
            <div>
                {componentArray}
            </div>
        )
    }
}

export default AppointmentContainer