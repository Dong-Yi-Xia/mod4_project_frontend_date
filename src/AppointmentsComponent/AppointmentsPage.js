import React from 'react'
import AppointmentContainer from './AppointmentContainer'

class AppointmentsPage extends React.Component {
    render(){
   
        return(
            <div class="appointmentspage">
                <AppointmentContainer 
                appointments={this.props.appointments}
                userID={this.props.userID}
                deletedAppointmentFun={this.props.deletedAppointmentFun}
                />
            </div>
        )
    }
}

export default AppointmentsPage