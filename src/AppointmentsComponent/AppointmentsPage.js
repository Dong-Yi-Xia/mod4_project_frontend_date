import React from 'react'
import AppointmentContainer from './AppointmentContainer'

class AppointmentsPage extends React.Component {
    render(){
   
        return(
            <div>
                <AppointmentContainer 
                appointments={this.props.appointments}
                userID={this.props.userID}
                />
            </div>
        )
    }
}

export default AppointmentsPage